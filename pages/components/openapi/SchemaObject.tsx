import { OpenAPIV3 } from 'openapi-types';
import { init, last } from 'ramda';
import React from 'react';

interface Props {
  object?: OpenAPIV3.SchemaObject;
  objectPathAcc: string[];
}

export default function RequestBodyParameter({ object, objectPathAcc = [] }: Props) {
  if (!object) return null;
  if (object.type === 'object')
    return (
      <>
        {Object.keys(object.properties || {}).map((p, index) => (
          <RequestBodyParameter
            key={index}
            object={object.properties?.[p] as OpenAPIV3.SchemaObject}
            objectPathAcc={[...objectPathAcc, p]}
          />
        ))}
      </>
    );

  const objectParents = init(objectPathAcc);
  const propertyName = last(objectPathAcc);
  return (
    <div>
      <p className="m-0 font-mono white break-all">
        <span className="opacity-60">{objectParents.join('.') + '.'}</span>
        <span>{propertyName}</span>
        {object.nullable && <span className="text-red-500 mx-4 text-xs">required</span>}
      </p>
      <p className="m-0 opacity-60">{object.description}</p>
      <p className="opacity-60 capitalize ">{object.type}</p>
    </div>
  );
}
