import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import React from 'react';
import DocPageLayout from './layout/DocPageLayout';

interface Props {
  title?: string;
  subtitle?: string;
  mdxSource?: MDXRemoteSerializeResult;
  children?: JSX.Element | JSX.Element[];
}

export default function DocPage({ title, subtitle, mdxSource, children }: Props) {
  const pageTitle = title || 'Docs';

  return (
    <DocPageLayout title={pageTitle}>
      <h1 className="mt-12 mb-2">{title}</h1>
      <h3 className="mb-12 font-normal text-gray-500">{subtitle}</h3>
      {mdxSource ? (
        <article className="mdx-content">
          <MDXRemote {...mdxSource} />
        </article>
      ) : (
        <p>Loading...</p>
      )}
      <section>{children}</section>
    </DocPageLayout>
  );
}
