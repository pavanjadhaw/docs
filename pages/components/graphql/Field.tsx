import { GraphQLField, GraphQLObjectType } from 'graphql';
import React from 'react';
import FieldArguments from './FieldArguments';

interface Props {
  field: GraphQLField<any, any, any>;
  operation: GraphQLObjectType<any, any>;
}

export default function Field({ field, operation }: Props) {
  const { args, name, description: descriptionNode } = field;
  const href = `${name}-${operation.name}`.toLowerCase();
  const [title, description] = descriptionNode
    ? descriptionNode.replace(/\n+/, ':::').split(':::')
    : ['', ''];

  return (
    <article id={href} className="py-36 border-t">
      <h2 className="mt-0">{title}</h2>
      <p className="text-xs rounded bg-green-50 px-3 py-2 text-green-600 uppercase font-mono mb-4 inline-block">
        {operation.name}
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
