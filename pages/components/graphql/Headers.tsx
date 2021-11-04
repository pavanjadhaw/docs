import { GraphQLField } from 'graphql';
import React from 'react';
import Parameter from '../openapi/Parameter';

interface Props {
  field: GraphQLField<any, any, any>;
}

const apiKeyHeader = {
  name: 'X-MAGICBELL-API-KEY',
  required: true,
  in: '',
  description: 'API key of your MagicBell project.',
  schema: { type: 'String' },
};

export default function Headers({ field }: Props) {
  const directives = field.astNode?.directives || [];
  const headers =
    directives[0]?.name.value === 'adminRequired'
      ? [
          apiKeyHeader,
          {
            name: 'X-MAGICBELL-API-SECRET',
            required: true,
            in: '',
            description: 'API secret of your MagicBell project.',
            schema: { type: 'String' },
          },
        ]
      : [
          apiKeyHeader,
          {
            name: 'X-MAGICBELL-USER-EXTERNAL-ID',
            in: '',
            description:
              'ID of the user. Provide the X-MAGICBELL-USER-EMAIL header instead if you identify users by email.',
            schema: { type: 'String' },
          },
          {
            name: 'X-MAGICBELL-USER-EMAIL',
            in: '',
            description:
              'Email address of the user. Provide the X-MAGICBELL-USER-EXTERNAL-ID header instead if you identify users by ID.',
            schema: { type: 'String' },
          },
        ];

  return (
    <div className="mt-8 mb-12">
      <p className="uppercase text-sm">HTTP headers</p>
      <ul className="border border-gray-200 rounded divide-y m-0">
        {headers.map((header, index) => (
          <Parameter key={index} param={header} />
        ))}
      </ul>
    </div>
  );
}
