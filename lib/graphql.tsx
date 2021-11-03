import { GraphQLField, GraphQLObjectType, isObjectType, isScalarType } from 'graphql';

export function buildQueryField(
  field: GraphQLField<any, any>,
): string | Record<string, any> {
  // @ts-ignore
  const { ofType } = field.type;
  let nestedFields = {} as Record<string, any>;

  if (ofType && !isScalarType(ofType)) {
    nestedFields = ofType.getFields();
  } else if (isObjectType(field.type)) {
    nestedFields = field.type.getFields();
  }

  if (nestedFields)
    return {
      [field.name]: Object.keys(nestedFields).map((key) =>
        buildQueryField(nestedFields[key]),
      ),
    };

  return field.name;
}

/**
 * Function to build fields for a GraphQL query from a GraphQLObject.
 *
 * @param node
 * @returns Array of fields to query
 */
export function buildQueryFields(node: GraphQLObjectType) {
  const fields = node?.getFields() || {};
  return Object.keys(fields).map((key) => buildQueryField(fields[key]));
}
