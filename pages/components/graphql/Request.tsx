import { query } from 'gql-query-builder';
import { GraphQLField, GraphQLObjectType, GraphQLSchema } from 'graphql';
import prettier from 'prettier';
import parserGraphql from 'prettier/parser-graphql';
import React from 'react';
import { buildRequestSnippet } from '../../../lib/codeSnippet';
import { buildQueryFields } from '../../../lib/graphql';
import HighlightedCode from '../code/HighlightedCode';
import Tabs from '../tabs/Tabs';

interface Props {
  field: GraphQLField<any, any, any>;
  schema: GraphQLSchema;
}

export default function Request({ field, schema }: Props) {
  if (!field) return null;

  const { name, type } = field;
  const node = schema.getTypeMap()[type.toString()] as GraphQLObjectType | null;

  const gqlQuery = query({
    operation: name,
    fields: node ? buildQueryFields(node) : [],
  });

  const snippet = buildRequestSnippet(
    'https://api.magicbell.com/graphql',
    'POST',
    [
      { name: 'Content-Type', content: 'application/json' },
      { name: 'X-MAGICBELL-API-KEY', in: '' },
      { name: 'X-MAGICBELL-API-SECRET', in: '' },
    ],
    {
      mimeType: 'application/json',
      text: JSON.stringify({ query: gqlQuery.query }),
    },
  );

  return (
    <div>
      <p className="font-mono text-sm">
        <span
          className={'py-1 px-2 text-xs uppercase rounded-sm bg-green-500 text-green-50'}
        >
          POST
        </span>
        {' /graphql'}
      </p>
      <Tabs>
        <div>
          <HighlightedCode title="QUERY" className="graphql" hideHeader noTopBorderRadius>
            {prettier.format(gqlQuery.query, {
              parser: 'graphql',
              plugins: [parserGraphql],
            })}
          </HighlightedCode>
        </div>
        <div>
          <HighlightedCode
            className="language-curl"
            title="cURL"
            hideHeader
            noTopBorderRadius
          >
            {snippet.convert('shell', 'curl')}
          </HighlightedCode>
        </div>
      </Tabs>
    </div>
  );
}
