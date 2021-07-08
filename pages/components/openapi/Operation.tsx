import { OpenAPIV3 } from 'openapi-types';
import React from 'react';
import HeaderParameters from './HeaderParameters';
import Request from './Request';
import Responses from './Responses';

interface Props {
  pathKey?: string;
  operation: OpenAPIV3.OperationObject;
  method?: string;
}

export default function Operation({ pathKey, operation, method }: Props) {
  return (
    <article id={operation.operationId} className=" py-28 border-t border-b">
      <h2 className="mt-0">{operation.summary}</h2>
      <div className="flex space-x-0 md:space-x-4 items-start flex-wrap md:flex-nowrap">
        <main className="w-full md:w-1/2">
          <p>{operation.description}</p>
          {/* @ts-ignore */}
          <HeaderParameters parameteres={operation.parameters} />
        </main>
        <aside className="w-full md:w-1/2">
          <Request method={method} location={pathKey} />
          <Responses responses={operation.responses} />
        </aside>
      </div>
    </article>
  );
}
