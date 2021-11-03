import { InputValueDefinitionNode } from 'graphql';
import React from 'react';

interface Props {
  input: InputValueDefinitionNode;
}

export default function InputValue({ input }: Props) {
  const { name, type, description } = input;

  return (
    <li className="list-none p-2">
      <p className="font-mono flex items-center mb-0.5">{name.value}</p>
      {description && (
        <p
          className="opacity-80 m-0"
          dangerouslySetInnerHTML={{
            __html: description.value,
          }}
        />
      )}
      <p className="opacity-80 m-0 capitalize">
        {/* @ts-ignore */}
        {type.kind === 'ListType' ? 'List' : type.name?.value}
      </p>
    </li>
  );
}
