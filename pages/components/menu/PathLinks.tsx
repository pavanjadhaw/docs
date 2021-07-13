import { prop } from 'ramda';
import React from 'react';
import OperationLink from './OperationLink';

export default function PathLinks({ path }: { path: any }) {
  if (!path) return null;
  return (
    <ul>
      {Object.keys(path).map((operationKey) => (
        <li key={operationKey}>
          <OperationLink
            operationKey={operationKey}
            operation={prop(operationKey, path)}
          />
        </li>
      ))}
    </ul>
  );
}
