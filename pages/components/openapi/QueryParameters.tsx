import { OpenAPIV3 } from 'openapi-types';
import { reject } from 'ramda';
import React from 'react';
import Parameter from './Parameter';

interface Props {
  parameteres?: OpenAPIV3.ParameterObject[];
}

export default function QueryParameters({ parameteres = [] }: Props) {
  const params = reject((param) => param.in !== 'query', parameteres);

  if (!params.length) return null;
  return (
    <div className="mt-8 mb-12">
      <p className="uppercase text-sm border-b border-gray-200 pb-2">Query parameters</p>
      {params.map((param, index) => (
        <Parameter key={index} param={param} />
      ))}
    </div>
  );
}
