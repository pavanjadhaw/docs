import fs from 'fs';
import { buildSchema } from 'graphql';
import * as matter from 'gray-matter';
import { GetStaticProps } from 'next';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import path from 'path';
import React from 'react';
import DocPage from '../components/DocPage';
import Document from '../components/graphql/Document';

interface Props {
  metadata?: { [key: string]: any };
  mdxAuthenticationSource?: MDXRemoteSerializeResult;
  schema: string;
}

export default function reference({
  mdxAuthenticationSource,
  schema,
  metadata = {},
}: Props) {
  return (
    <DocPage mdxSource={mdxAuthenticationSource} {...metadata}>
      <div className="my-12">
        <Document schema={buildSchema(schema)} />
      </div>
    </DocPage>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const docsDirectory = path.join(process.cwd(), 'docs');
  const filePath = path.join(docsDirectory, 'graphql-api/authentication.mdx');
  const fileContents = fs.readFileSync(filePath, 'utf8');

  const schemaFilePath = path.join(docsDirectory, 'graphql-api/reference/schema.graphql');
  const schemaFileContents = fs.readFileSync(schemaFilePath, 'utf8');
  let schema = schemaFileContents;

  // @ts-ignore
  const { content, data } = matter(fileContents);
  const mdxAuthenticationSource = await serialize(content);
  return {
    props: {
      mdxAuthenticationSource,
      metadata: data,
      schema,
    },
  };
};
