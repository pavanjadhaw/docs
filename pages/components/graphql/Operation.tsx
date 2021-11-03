import { GraphQLObjectType, GraphQLSchema } from 'graphql';
import React from 'react';
import Field from './Field';

interface Props {
  schema: GraphQLSchema;
  operation: GraphQLObjectType<any, any>;
}

export default function Operation({ operation }: Props) {
  const fields = operation.getFields();

  return (
    <>
      {Object.keys(fields).map((fieldKey, index) => (
        <Field key={index} field={fields[fieldKey]} operation={operation} />
      ))}
    </>
  );
}
