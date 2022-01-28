import React from 'react';
import slugify from 'slugify';
import PageLink from './PageLink';

interface Props {
  query: any;
}

export default function QueryLink({ query }: Props) {
  if (!query) return null;

  const [summary] = query.description.split('\n');
  return (
    <PageLink
      to={`/graphql-api/reference#${slugify(summary).toLowerCase()}`}
      name={
        <div className="flex space-x-2">
          <div className="mt-1">
            <span
              className={'uppercase font-mono w-6 block text-green-500'}
              style={{ fontSize: '10px', lineHeight: 1.3 }}
            >
              POST
            </span>
          </div>
          <div>{summary}</div>
        </div>
      }
      style={{ padding: '6px 0' }}
    />
  );
}
