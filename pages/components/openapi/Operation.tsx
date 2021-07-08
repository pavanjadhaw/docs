import { OpenAPIV3 } from 'openapi-types';
import React from 'react';
import HeaderParameters from './HeaderParameters';
import Request from './Request';
import RequestBody from './RequestBody';
import Responses from './Responses';

interface Props {
  pathKey?: string;
  operation: OpenAPIV3.OperationObject;
  method?: string;
}

export default function Operation({ pathKey, operation, method }: Props) {
  return (
    <article id={operation.operationId} className="py-32 border-t border-b">
      <h2 className="mt-0">{operation.summary}</h2>
      <div className="flex space-x-0 xl:space-x-4 flex-wrap xl:flex-nowrap">
        <main className="w-full xl:w-1/2">
          <p>{operation.description}</p>
          <HeaderParameters
            parameteres={operation.parameters as OpenAPIV3.ParameterObject[]}
          />
          <RequestBody
            requestBody={operation.requestBody as OpenAPIV3.RequestBodyObject}
          />
        </main>
        <aside className="w-full xl:w-1/2 space-y-12">
          <Request method={method} location={pathKey} operation={operation} />
          <Responses responses={operation.responses} />
        </aside>
      </div>
    </article>
  );
}
