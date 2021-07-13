import classNames from 'classnames';
import React from 'react';
import PageLink from './PageLink';

interface Props {
  operationKey: string;
  operation: any;
}

export default function OperationLink({ operationKey, operation }: Props) {
  if (!operation) return null;
  return (
    <PageLink
      to={`/rest-api/reference#${operation.operationId}`}
      name={
        <div className="flex space-x-2">
          <div className="mt-1">
            <span
              className={classNames(
                'uppercase font-mono text-white rounded-sm w-7 text-center block',
                operationKey === 'post' && 'bg-green-500 text-green-50',
                operationKey === 'get' && 'bg-blue-500 text-blue-50',
                operationKey === 'put' && 'bg-purple-500 text-purple-50',
                operationKey === 'delete' && 'bg-red-500 text-red-50',
              )}
              style={{ fontSize: '6px', padding: '3px 1px', lineHeight: 1 }}
            >
              {operationKey}
            </span>
          </div>
          <div>{operation.summary}</div>
        </div>
      }
    />
  );
}
