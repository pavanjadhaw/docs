import classNames from 'classnames';
import React from 'react';
import HighlightedCode from '../code/HighlightedCode';

interface Props {
  location?: string;
  method?: string;
}

export default function Request({ method, location }: Props) {
  return (
    <div>
      <p className="mt-2 mb-6 font-mono text-sm">
        <span
          className={classNames(
            'py-1 px-2 text-white text-xs uppercase rounded-sm',
            method === 'POST' && 'bg-green-500',
            method === 'GET' && 'bg-blue-500',
            method === 'PUT' && 'bg-purple-500',
            method === 'DELETE' && 'bg-red-500',
          )}
        >
          {method}
        </span>{' '}
        {location}
      </p>
      <HighlightedCode>{JSON.stringify(location)}</HighlightedCode>
    </div>
  );
}
