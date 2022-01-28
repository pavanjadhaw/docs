import { buildSchema } from 'graphql';
import { isNil } from 'ramda';
import schemaFilePath from 'raw-loader!../../../docs/graphql-api/reference/schema.graphql';
import QueryLink from './QueryLink';

export default function GraphqlAPILinks() {
  const schema = buildSchema(schemaFilePath);
  const fields = schema.toConfig().query?.getFields();

  if (isNil(fields)) return null;
  return (
    <div className="divide-y divide-dashed divide-gray-200 px-6">
      <ul className="py-3">
        {Object.keys(fields).map((queryKey: string) => (
          <QueryLink key={queryKey} query={fields[queryKey]} />
        ))}
      </ul>
    </div>
  );
}
