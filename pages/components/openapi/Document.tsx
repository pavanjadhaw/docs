import { OpenAPIV3 } from 'openapi-types';
import React from 'react';
import Path from './Path';

interface Props {
  document: OpenAPIV3.Document;
}

export default function Document({ document }: Props) {
  const { paths } = document;
  console.warn({ paths: Object.keys(paths) });

  if (!paths) return null;
  return (
    <section>
      {Object.keys(paths).map((key, index) => (
        <Path key={index} path={paths[key]} />
      ))}
    </section>
  );
}
