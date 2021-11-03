import { GraphQLArgument } from 'graphql';
import React from 'react';

interface Props {
  input: GraphQLArgument;
}

export default function InputValue({ input }: Props) {
  const { name, type, description } = input;

  return (
    <li className="list-none p-2">
      <p className="font-mono flex items-center mb-0.5">{name}</p>
      {description && (
        <p
          className="opacity-80 m-0"
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        />
      )}
      <p className="opacity-80 m-0 capitalize">{type.toString()}</p>
    </li>
  );
}
