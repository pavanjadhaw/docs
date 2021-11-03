import { FieldDefinitionNode, NamedTypeNode } from 'graphql';
import React from 'react';
import FieldArguments from './FieldArguments';

interface Props {
  field: FieldDefinitionNode;
  operationType: NamedTypeNode;
}

export default function Field({ field, operationType }: Props) {
  const { arguments: args, name, description: descriptionNode } = field;
  const href = `${name.value}-${operationType.name.value}`.toLowerCase();
  const [title, description] = descriptionNode
    ? descriptionNode.value.replace(/\n+/, ':::').split(':::')
    : ['', ''];

  return (
    <article id={href} className="py-36 border-t">
      <h2 className="mt-0">{title}</h2>
      <p className="text-xs rounded bg-green-50 px-3 py-2 text-green-600 uppercase font-mono mb-4 inline-block">
        {operationType.name.value}
      </p>
      <div className="flex space-x-0 xl:space-x-4 flex-wrap xl:flex-nowrap">
        <main className="w-full xl:w-1/2">
          <p
            dangerouslySetInnerHTML={{
              __html: description?.replace(/\n/g, '<br/>'),
            }}
          />
          {args ? <FieldArguments args={args} /> : null}
        </main>
        <aside className="w-full xl:w-1/2 space-y-12"></aside>
      </div>
    </article>
  );
}
