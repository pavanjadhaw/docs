import React from 'react';
import { InstantSearch } from 'react-instantsearch-dom';
import { algoliaClient } from '../../../lib/algolia';
import SearchBox from './SearchBox';
import SearchHits from './SearchHits';
import SearchResults from './SearchResults';

export default function SearchBar() {
  return (
    <>
      <InstantSearch indexName="docs" searchClient={algoliaClient}>
        <div className="relative">
          <SearchBox />
          <SearchResults>
            <SearchHits />
          </SearchResults>
        </div>
      </InstantSearch>
    </>
  );
}
