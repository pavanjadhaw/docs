import fs from 'fs';
import * as matter from 'gray-matter';
import { GetStaticProps } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import path from 'path';
import React from 'react';
import Page from '../components/layout/Page';

interface Props {
  metadata?: { [key: string]: any };
  mdxAuthenticationSource?: MDXRemoteSerializeResult;
  openapi: any;
}

export default function reference({
  mdxAuthenticationSource,
  openapi,
  metadata = {},
}: Props) {
  return (
    <Page>
      <h1 className="mt-12 mb-2">{metadata.title}</h1>
      <h3 className="mb-12 font-normal text-gray-500">{metadata.subtitle}</h3>
      {mdxAuthenticationSource ? (
        <article className="mdx-content">
          <MDXRemote {...mdxAuthenticationSource} />
        </article>
      ) : (
        <p>Loading...</p>
      )}
      <hr className="my-8" />
    </Page>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const docsDirectory = path.join(process.cwd(), 'docs');
  const filePath = path.join(docsDirectory, 'rest-api/authentication.mdx');
  const fileContents = fs.readFileSync(filePath, 'utf8');

  const openapiFilePath = path.join(docsDirectory, 'rest-api/reference/openapi.json');
  const openapiFileContents = fs.readFileSync(openapiFilePath, 'utf8');

  // @ts-ignore
  const { content, data } = matter(fileContents);
  const mdxAuthenticationSource = await serialize(content);
  return {
    props: {
      mdxAuthenticationSource,
      metadata: data,
      openapi: JSON.parse(openapiFileContents),
    },
  };
};
