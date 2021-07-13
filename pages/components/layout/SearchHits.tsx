import React from 'react';
import { connectHits } from 'react-instantsearch-dom';
import SearchHit from './SearchHit';

interface Props {
  hits: [];
}

function SearchHits({ hits = [] }: Props) {
  return (
    <ul className="max-h-96 overflow-y-scroll divide-y divide-gray-700 rounded-md">
      {hits.map((hit, index) => (
        <li key={index}>
          <SearchHit hit={hit} />
        </li>
      ))}
    </ul>
  );
}

export default connectHits(SearchHits);
