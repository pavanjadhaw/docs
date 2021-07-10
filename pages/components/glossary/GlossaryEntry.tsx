import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import React from 'react';
import slugify from 'slugify';

interface Props {
  metadata?: { [key: string]: any };
  mdxSource?: MDXRemoteSerializeResult;
}

export default function GlossaryEntry({ mdxSource, metadata }: Props) {
  if (!metadata) return null;
  return (
    <div>
      <h3 id={slugify(metadata.title).toLowerCase()} className="mt-16 mb-0">
        {metadata.title}
      </h3>
      <p className="text-gray-500">{metadata.shortDescription}</p>
      {mdxSource ? (
        <article className="mdx-content">
          <MDXRemote {...mdxSource} />
        </article>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
