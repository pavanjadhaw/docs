import { OpenAPIV3 } from 'openapi-types';
import React from 'react';
import Operation from './Operation';

interface Props {
  path?: OpenAPIV3.PathItemObject;
}

export default function Path({ path }: Props) {
  if (path?.post) return <Operation operation={path.post} />;
  if (path?.put) return <Operation operation={path.put} />;
  if (path?.get) return <Operation operation={path.get} />;
  if (path?.delete) return <Operation operation={path.delete} />;

  return null;
}
