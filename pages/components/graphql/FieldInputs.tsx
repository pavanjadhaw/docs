import { InputValueDefinitionNode } from 'graphql';
import React from 'react';
import InputValue from './InputValue';

interface Props {
  inputs: readonly InputValueDefinitionNode[];
}

export default function FieldInputs({ inputs }: Props) {
  return (
    <div className="mt-8 mb-12">
      <p className="uppercase text-sm">GraphQL Variables</p>
      <ul className="border border-gray-200 rounded divide-y m-0">
        {inputs.map((input, index) => (
          <InputValue key={index} input={input} />
        ))}
      </ul>
    </div>
  );
}
