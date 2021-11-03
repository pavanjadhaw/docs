import {
  DocumentNode,
  ObjectTypeDefinitionNode,
  OperationTypeDefinitionNode,
} from 'graphql';
import { find, pathEq } from 'ramda';
import React from 'react';
import Field from './Field';

interface Props {
  schema: DocumentNode;
  operation: OperationTypeDefinitionNode;
}

export default function Operation({ schema, operation }: Props) {
  const definition = find(
    pathEq(['name', 'value'], operation.type.name.value),
    schema.definitions,
  ) as ObjectTypeDefinitionNode;

  return (
    <>
      {definition.fields?.map((field, index) => (
        <Field key={index} field={field} operationType={operation.type} />
      ))}
    </>
  );
}
