import { OpenAPIV3 } from 'openapi-types';
import React from 'react';
import SchemaObject from './SchemaObject';

interface Props {
  requestBody?: OpenAPIV3.RequestBodyObject;
}

export default function RequestBody({ requestBody }: Props) {
  if (!requestBody) return null;

  // @ts-ignore
  const properties = requestBody.content?.['application/json']?.schema?.properties as {
    [name: string]: OpenAPIV3.SchemaObject;
  };

  return (
    <div className="mt-8 mb-12 overflow-hidden">
      <p className="uppercase text-sm border-b border-gray-200 pb-2">Body Parameters</p>
      {Object.keys(properties || {}).map((key, index) => (
        <SchemaObject key={index} object={properties[key]} objectPathAcc={[key]} />
      ))}
    </div>
  );
}
