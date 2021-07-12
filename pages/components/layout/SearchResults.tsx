import { isEmpty } from 'ramda';
import React from 'react';
import { connectStateResults } from 'react-instantsearch-dom';

interface Props {
  searchState: any;
  searchResults: any;
  children: JSX.Element | JSX.Element[];
}

function SearchResults({ searchState, searchResults, children }: Props) {
  if (isEmpty(searchState) || isEmpty(searchState.query)) return null;

  return (
    <div className="absolute z-10 top-12 bg-gray-800 text-white rounded-md w-full">
      {searchResults?.nbHits !== 0 ? (
        children
      ) : (
        <p className="m-0 p-4">No results have been found for {searchState.query}</p>
      )}
    </div>
  );
}

// @ts-ignore
export default connectStateResults(SearchResults);
