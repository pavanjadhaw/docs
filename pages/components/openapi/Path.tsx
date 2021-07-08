import { OpenAPIV3 } from 'openapi-types';
import React from 'react';
import Operation from './Operation';

interface Props {
  pathKey: string;
  path?: OpenAPIV3.PathItemObject;
}

export default function Path({ pathKey, path }: Props) {
  if (path?.post)
    return <Operation pathKey={pathKey} operation={path.post} method="POST" />;
  if (path?.put) return <Operation pathKey={pathKey} operation={path.put} method="PUT" />;
  if (path?.get) return <Operation pathKey={pathKey} operation={path.get} method="GET" />;
  if (path?.delete)
    return <Operation pathKey={pathKey} operation={path.delete} method="DELETE" />;

  return null;
}
