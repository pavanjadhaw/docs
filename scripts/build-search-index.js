const { convert } = require('html-to-text');
const { flatten, reject, isNil } = require('ramda');
const algoliasearch = require('algoliasearch/lite');
const dotenv = require('dotenv');
const fs = require('fs');
const html = require('remark-html');
const matter = require('gray-matter');
const path = require('path');
const remark = require('remark');
const sitemap = require('../sitemap.json');

/**
 * Read and parse the contents of an MDX file.
 * It parses the file with remark and extract the metadata with gray-matter.
 *
 * @param {string} filePath Path to the MDX file to read
 * @param {string} encoding
 * @returns An object containing the metada and its content in plain text.
 */
function parseMDXFile(filePath, encoding = 'utf8') {
  const fileContents = fs.readFileSync(filePath, encoding);
  const { content, data } = matter(fileContents);
  const htmlContent = remark().use(html).processSync(content);

  return { content: convert(htmlContent), data };
}

/**
 * Function to extract the `to` attribute from an entry of the the sitemap.json
 * file recursively.
 *
 * @param {Object} element
 * @returns A list of the paths
 */
function extractPath(element) {
  if (element.to) return element.to;
  return reject(isNil, flatten(element.children.map(extractPath)));
}

function getPost(filePath, directory) {
  const fileName = filePath === '/' ? 'index.mdx' : filePath + '.mdx';
  const postPath = path.join(directory, fileName);
  const { content, data } = parseMDXFile(postPath);

  return { id: filePath, content, data };
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
  return posts.map(({ id, data, content }) => {
    return {
      objectID: id,
      title: data.title,
      description: data.subtitle,
      content,
    };
  });
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
    console.warn(response);
  } catch (error) {
    console.error(error);
  }
})();
