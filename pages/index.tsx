import fs from 'fs';
import * as matter from 'gray-matter';
import { GetStaticProps } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import path from 'path';
import React from 'react';
import HomeChangelog from './components/HomeChangelog';
import Page from './components/layout/Page';

interface Props {
  metadata?: { [key: string]: any };
  mdxSource?: MDXRemoteSerializeResult;
}

export default function index({ mdxSource, metadata = {} }: Props) {
  return (
    <Page title="Docs">
      <h1 className="mt-12 mb-2">{metadata.title}</h1>
      <h3 className="mb-12 font-normal text-gray-500">{metadata.subtitle}</h3>
      {mdxSource ? (
        <article className="mdx-content">
          <MDXRemote {...mdxSource} />
        </article>
      ) : (
        <p>Loading...</p>
      )}
      <HomeChangelog />
    </Page>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const docsDirectory = path.join(process.cwd(), 'docs');
  const filePath = path.join(docsDirectory, 'index.mdx');
  const fileContents = fs.readFileSync(filePath, 'utf8');

  // @ts-ignore
  const { content, data } = matter(fileContents);
  const mdxSource = await serialize(content);
  return { props: { mdxSource, metadata: data } };
};
