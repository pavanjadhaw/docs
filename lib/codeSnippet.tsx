import faker from 'faker';
import { OpenAPIV3 } from 'openapi-types';

const HTTPSnippet = require('httpsnippet');
const pupa = require('pupa');
const BASE_URL = 'https://api.magicbell.com'; // @todo Take it from the OpenAPI file

// To generate the same values accross example
const TEMPLATE_CONTEXT = {
  notification_id: '7fb3ce9f-a866-4dff-8ce8-2f64f7c5ed4c',
  user_id: faker.datatype.uuid(),
  device_token: faker.random.alphaNumeric(64),
  x_magicbell_api_key: faker.random.alphaNumeric(40),
  x_magicbell_api_secret: faker.random.alphaNumeric(40),
  x_magicbell_user_external_id: faker.datatype.number({ min: 1000 }),
};

export function replaceVariables(codeSnippet: string) {
  return pupa(codeSnippet, TEMPLATE_CONTEXT);
}

export function buildUrl(url: URL) {
  return replaceVariables(decodeURIComponent(url.href));
}

export function buildRequestSnippet(
  location: string,
  method: string,
  headers: OpenAPIV3.ParameterObject[],
  data: {
    mimeType: string;
    text: string;
  } | null,
) {
  const headersArray = Object.keys(headers).map((param, index) => ({
    name: headers[index].name,
    value: replaceVariables(`{${headers[index].name.toLowerCase().replace(/-/g, '_')}}`),
  }));

  return new HTTPSnippet({
    method,
    url: buildUrl(new URL(location, BASE_URL)),
    postData: data,
    headers: headersArray,
  });
}