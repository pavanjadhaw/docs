const { flatten, reject, isNil } = require('ramda');
const algoliasearch = require('algoliasearch/lite');
const dotenv = require('dotenv');
const fs = require('fs');
const html = require('remark-html');
const matter = require('gray-matter');
const path = require('path');
const remark = require('remark');
const sitemap = require('../sitemap.json');
const searchable = require('remark-mdx-searchable');
const gfm = require('remark-gfm');
const { default: slugify } = require('slugify');

/**
 * Read and parse the contents of an MDX file.
 * It parses the file with remark and extract the metadata with gray-matter.
 *
 * @param {string} filePath Path to the MDX file to read
 * @param {string} encoding
 * @returns An object containing the metada and its content in plain text.
 */
function parseMDXFile(filePath, context, encoding = 'utf8') {
  const fileContents = fs.readFileSync(filePath, encoding);
  const { content, data } = matter(fileContents);
  const compiled = remark().use(html).use(searchable).use(gfm).processSync(content);

  return compiled.data.map((item) => ({
    content: item.text,
    data: { heading: item.heading, ...data },
  }));
}

/**
 * Function to extract the `to` attribute from an entry of the the sitemap.json
 * file recursively.
 *
 * @param {Object} element
 * @returns A list of the paths
 */
function extractPath(element) {
  if (element.to) return { to: element.to, name: element.name };
  return reject(isNil, flatten(element.children.map(extractPath)));
}

function getPost(context, directory) {
  const fileName = context.to === '/' ? 'index.mdx' : context.to + '.mdx';
  const postPath = path.join(directory, fileName);
  const contents = parseMDXFile(postPath, context);

  // {
  //   slug: string;
  //   contents: [
  //     {
  //       content: string;
  //       data: {
  //         title: string;
  //         subtitle: string;
  //         heading: string;
  //       }
  //     }
  //   ]
  // }
  return { slug: context.to, contents };
}

/**
 * Function to generate the contents of all the posts based on the sitemap.json
 * file.
 *
 * @returns An array containing all the posts' content and metadata
 */
async function getAllPosts() {
  const posts = [];
  const docsDirectory = path.join(process.cwd(), 'docs');
  const sitemapPaths = flatten(sitemap.map((entry) => extractPath(entry)));

  for (entryFilePath of sitemapPaths) {
    try {
      const post = getPost(entryFilePath, docsDirectory);
      posts.push(post);
    } catch (err) {
      console.log(err);
    }
  }

  return posts;
}

function buildSearchObjects(posts) {
  return flatten(
    posts.map(({ slug, contents }) =>
      contents.map(({ content, data }, index) => ({
        objectID: slug + ':' + index,
        title: data.heading ? data.title + ' > ' + data.heading : data.title,
        breadcrumbs: [data.title, data.heading],
        slug: data.heading ? `${slug}#${slugify(data.heading)}` : slug,
        content,
      })),
    ),
  );
}

(async function () {
  dotenv.config();

  const client = algoliasearch(
    process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
    process.env.ALGOLIA_ADMIN_API_KEY,
  );

  try {
    const posts = await getAllPosts();
    const searchObjects = buildSearchObjects(posts);

    const index = client.initIndex('docs');
    const response = await index.saveObjects(searchObjects);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
})();
