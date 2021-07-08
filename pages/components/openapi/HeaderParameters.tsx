import { OpenAPIV3 } from 'openapi-types';
import { reject } from 'ramda';
import React from 'react';
import Parameter from './Parameter';

interface Props {
  parameteres?: OpenAPIV3.ParameterObject[];
}

export default function HeaderParameters({ parameteres = [] }: Props) {
  const headerParams = reject((param) => param.in !== 'header', parameteres);

  if (!headerParams.length) return null;
  return (
    <div className="mt-8 mb-12">
      <p className="uppercase text-sm border-b border-gray-200 pb-2">Header parameters</p>
      {headerParams.map((param, index) => (
        <Parameter key={index} param={param} />
      ))}
    </div>
  );
}
