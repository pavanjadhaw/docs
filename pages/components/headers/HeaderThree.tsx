import React from 'react';
import slugify from 'slugify';

interface Props {
  children: string;
}

export default function HeaderThree({ children }: Props) {
  const id = slugify(children, { lower: true });
  return <h3 id={id}>{children}</h3>;
}
