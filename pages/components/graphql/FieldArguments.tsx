import { GraphQLArgument } from 'graphql';
import React from 'react';
import InputArgument from './InputArgument';

interface Props {
  args: readonly GraphQLArgument[];
}

export default function FieldArguments({ args }: Props) {
  return (
    <div className="mt-8 mb-12">
      <p className="uppercase text-sm">GraphQL Arguments</p>
      <ul className="border border-gray-200 rounded divide-y m-0">
        {args.map((argument, index) => (
          <InputArgument key={index} argument={argument} />
        ))}
      </ul>
    </div>
  );
}
