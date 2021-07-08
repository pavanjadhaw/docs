import React from 'react';
import slugify from 'slugify';

interface Props {
  children: string;
}

export default function HeaderTwo({ children }: Props) {
  if (!children) return null;

  const id = slugify(children, { lower: true });
  return (
    <h2 id={id} className="border-b border-gray-200 pb-3">
      {children}
    </h2>
  );
}
