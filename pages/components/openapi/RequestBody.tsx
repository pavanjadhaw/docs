import { OpenAPIV3 } from 'openapi-types';
import React from 'react';

interface Props {
  requestBody?: OpenAPIV3.RequestBodyObject;
}

export default function RequestBody({ requestBody }: Props) {
  if (!requestBody) return null;

  // @ts-ignore
  const properties = requestBody.content?.['application/json']?.schema?.properties;

  const renderProperty = (
    propName: string,
    prop: any,
    acc: string[] = [],
  ): JSX.Element => {
    if (prop.type === 'object')
      return (
        <>
          {Object.keys(prop.properties || {}).map((p) =>
            renderProperty(p, prop.properties[p], [...acc, p]),
          )}
        </>
      );
    return (
      <div>
        <p className="m-0 font-mono white break-all">
          {acc.join('.')}{' '}
          {prop.nullable && <span className="text-red-500 mx-4 text-xs">required</span>}
        </p>
        <p className="m-0 opacity-60">{prop.description}</p>
        <p className="opacity-60 capitalize ">{prop.type}</p>
      </div>
    );
  };

  return (
    <div className="mt-8 mb-12 overflow-hidden">
      <p className="uppercase text-sm border-b border-gray-200 pb-2">Body Parameters</p>
      {Object.keys(properties || {}).map((key) =>
        renderProperty(key, properties[key], [key]),
      )}
    </div>
  );
}
