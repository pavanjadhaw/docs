import { InputValueDefinitionNode } from 'graphql';
import React from 'react';
import InputValue from './InputValue';

interface Props {
  args: readonly InputValueDefinitionNode[];
}

export default function FieldArguments({ args }: Props) {
  return (
    <div className="mt-8 mb-12">
      <p className="uppercase text-sm">GraphQL Arguments</p>
      <ul className="border border-gray-200 rounded divide-y m-0">
        {args.map((input, index) => (
          <InputValue key={index} input={input} />
        ))}
      </ul>
    </div>
  );
}
