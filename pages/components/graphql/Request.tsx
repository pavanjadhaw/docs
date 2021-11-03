import { query } from 'gql-query-builder';
import { GraphQLField, GraphQLObjectType, GraphQLSchema } from 'graphql';
import prettier from 'prettier';
import React from 'react';
import { buildQueryFields } from '../../../lib/graphql';
import HighlightedCode from '../code/HighlightedCode';

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

  return (
    <HighlightedCode title="Payload" className="graphql">
      {prettier.format(gqlQuery.query, { parser: 'graphql' })}
    </HighlightedCode>
  );
}
