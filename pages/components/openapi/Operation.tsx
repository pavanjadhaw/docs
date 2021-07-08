import { OpenAPIV3 } from 'openapi-types';
import React from 'react';
import HeaderParameters from './HeaderParameters';
import Responses from './Responses';

interface Props {
  operation: OpenAPIV3.OperationObject;
}

export default function Operation({ operation }: Props) {
  return (
    <article
      id={operation.operationId}
      className="flex py-28 border-t border-b space-x-0 md:space-x-4 items-start flex-wrap md:flex-nowrap"
    >
      <main className="w-full md:w-1/2">
        <h2 className="mt-0">{operation.summary}</h2>
        <p>{operation.description}</p>
        {/* @ts-ignore */}
        <HeaderParameters parameteres={operation.parameters} />
      </main>
      <aside className="w-full md:w-1/2">
        <Responses responses={operation.responses} />
      </aside>
    </article>
  );
}
