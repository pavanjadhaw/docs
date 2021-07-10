import fs from 'fs';
import * as matter from 'gray-matter';
import { GetStaticProps } from 'next';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import path from 'path';
import React from 'react';
import GlossaryEntry from './components/glossary/GlossaryEntry';
import DocPageLayout from './components/layout/DocPageLayout';

type GlossaryEntry = {
  mdxSource: MDXRemoteSerializeResult;
  metadata: any;
};

interface Props {
  entries?: GlossaryEntry[];
}

export default function glossary({ entries = [] }: Props) {
  return (
    <DocPageLayout title="Glossary">
      <h1 className="mt-12 mb-2">Glossary</h1>
      <h3 className="mb-12 font-normal text-gray-500">
        Learn the core concepts of MagicBell
      </h3>
      <section className="space-y-16 divide-y">
        {entries.map((entry, index) => (
          <GlossaryEntry
            key={index}
            mdxSource={entry.mdxSource}
            metadata={entry.metadata}
          />
        ))}
      </section>
    </DocPageLayout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const glossaryDirectory = path.join(process.cwd(), 'glossary');
  const articlesFilePaths = fs.readdirSync(glossaryDirectory);

  const entries: GlossaryEntry[] = [];
  for (const articleFilePath of articlesFilePaths) {
    const filePath = path.join(glossaryDirectory, articleFilePath);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    // @ts-ignore
    const { content, data } = matter(fileContents);
    const mdxSource = await serialize(content);

    entries.push({ mdxSource, metadata: data });
  }

  // @ts-ignore
  return { props: { entries } };
};
