import { SearchIcon } from '@heroicons/react/outline';
import { Field, Form, Formik } from 'formik';
import React from 'react';
import { connectSearchBox } from 'react-instantsearch-dom';
import FormSubmitter from '../FormSubmitter';

interface Props {
  currentRefinement: string;
  isSearchStalled: boolean;
  refine: (query: string) => void;
}

function SearchBox({ refine }: Props) {
  const handleSubmit = ({ query }: { query: string }) => {
    refine(query);
  };

  return (
    <Formik onSubmit={handleSubmit} initialValues={{ query: '' }}>
      {(formik) => (
        <Form className="w-full flex">
          <label htmlFor="search-field" className="sr-only">
            Search
          </label>
          <div className="relative w-full text-gray-400 focus-within:text-gray-600">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center">
              <SearchIcon className="h-5 w-5" />
            </div>
            <Field
              id="search-field"
              className="block h-full w-full border-transparent py-2 pl-8 pr-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent"
              placeholder="Quick search"
              name="query"
            />
          </div>
          <FormSubmitter formik={formik} />
        </Form>
      )}
    </Formik>
  );
}

export default connectSearchBox(SearchBox);