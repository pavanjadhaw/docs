import { DocumentNode, SchemaDefinitionNode } from 'graphql';
import { find, propEq } from 'ramda';
import React from 'react';
import Operation from './Operation';

interface Props {
  schema: DocumentNode;
}

export default function Document({ schema }: Props) {
  const definition = find(
    propEq('kind', 'SchemaDefinition'),
    schema.definitions,
  ) as SchemaDefinitionNode;

  return (
    <section>
      {definition?.operationTypes.map((operation, index) => (
        <Operation key={index} operation={operation} schema={schema} />
      ))}
    </section>
  );
}
