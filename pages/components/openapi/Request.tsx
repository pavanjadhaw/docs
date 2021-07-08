import classNames from 'classnames';
import { OpenAPIV3 } from 'openapi-types';
import { reject } from 'ramda';
import React from 'react';
import HighlightedCode from '../code/HighlightedCode';
import Tabs from '../tabs/Tabs';

const HTTPSnippet = require('httpsnippet');

interface Props {
  location?: string;
  method?: string;
  operation?: OpenAPIV3.OperationObject;
}

export default function Request({ method, location, operation }: Props) {
  if (!method || !location || !operation) return null;

  const { requestBody, parameters = [] } = operation;
  const example = requestBody?.content?.['application/json'].example;
  const headerParams = reject(
    (param) => param.in !== 'header' || !param.required,
    parameters as OpenAPIV3.ParameterObject[],
  );

  const headers = Object.keys(headerParams).map((param, index) => ({
    name: headerParams[index].name,
    value: 'STRING_VALUE',
  }));

  console.warn(headers);

  const postData = example
    ? {
        mimeType: 'application/json',
        text: JSON.stringify(example),
      }
    : null;
  const snippet = new HTTPSnippet({
    method,
    url: 'https://api.magicbell.com' + location,
    postData,
    headers,
  });

  return (
    <div>
      <p className="font-mono text-sm">
        <span
          className={classNames(
            'py-1 px-2 text-white text-xs uppercase rounded-sm',
            method === 'POST' && 'bg-green-500',
            method === 'GET' && 'bg-blue-500',
            method === 'PUT' && 'bg-purple-500',
            method === 'DELETE' && 'bg-red-500',
          )}
        >
          {method}
        </span>{' '}
        {location}
      </p>
      <Tabs>
        <div>
          <HighlightedCode className="curl" title="cURL" hideHeader noTopBorderRadius>
            {snippet.convert('shell', 'curl')}
          </HighlightedCode>
        </div>
        <div>
          <HighlightedCode className="node" title="NODE" hideHeader noTopBorderRadius>
            {snippet.convert('node')}
          </HighlightedCode>
        </div>
        <div>
          <HighlightedCode className="python" title="PYTHON" hideHeader noTopBorderRadius>
            {snippet.convert('python', 'requests')}
          </HighlightedCode>
        </div>
        <div>
          <HighlightedCode className="ruby" title="RUBY" hideHeader noTopBorderRadius>
            {snippet.convert('ruby')}
          </HighlightedCode>
        </div>
        <div>
          <HighlightedCode className="go" title="GO" hideHeader noTopBorderRadius>
            {snippet.convert('go')}
          </HighlightedCode>
        </div>
        <div>
          <HighlightedCode className="java" title="JAVA" hideHeader noTopBorderRadius>
            {snippet.convert('java', 'okhttp')}
          </HighlightedCode>
        </div>
      </Tabs>
    </div>
  );
}
