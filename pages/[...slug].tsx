import fs from 'fs';
import * as matter from 'gray-matter';
import { GetStaticPaths, GetStaticProps } from 'next';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import Error from 'next/error';
import path from 'path';
import { flatten, reject } from 'ramda';
import React from 'react';
import autolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import sitemap from '../lib/sitemap';
import DocPage from './components/DocPage';

interface Props {
  notFound?: boolean;
  metadata?: { [key: string]: any };
  mdxSource?: MDXRemoteSerializeResult;
}

export default function DynamicDocument({ mdxSource, metadata, notFound }: Props) {
  if (notFound) return <Error statusCode={404} />;
  if (!metadata) return null;
  return <DocPage mdxSource={mdxSource} {...metadata} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  // Load routes from the sitemap
  const allRoutes = sitemap.flatMap(item => {
    if(item.children){
      return [...item.children, item];
    }
    return item;
  }).filter(route => route.to !== undefined && !route.staticRoute);

  return {
    paths: allRoutes.map((item) => {
      const slug = item.to.startsWith('/') ? item.to.substr(1) : item.to;
      return { params: { slug: slug.split('/') } };
    }),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // Read the file that contains the content for the route
  const slug = params?.slug as string[];

  const filename = slug.join('/') + '.mdx';
  const docsDirectory = path.join(process.cwd(), 'docs');
  const filePath = path.join(docsDirectory, filename);

  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');

    // @ts-ignore
    const { content, data } = matter(fileContents);
    const mdxSource = await serialize(content, {
      mdxOptions: {
        rehypePlugins: [
          [rehypeSlug, {}],
          [autolinkHeadings, {}],
        ],
      },
    });

    return { props: { mdxSource, metadata: data } };
  } catch (err) {
    console.log(err);
    return { props: { notFound: true } };
  }
};
