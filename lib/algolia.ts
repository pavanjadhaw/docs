import algoliasearch from 'algoliasearch/lite';

// Client for searching the app
export const algoliaClient = algoliasearch(
  // @ts-ignore
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY,
);
