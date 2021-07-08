import React from 'react';
import HighlightedCode from '../code/HighlightedCode';

interface Props {
  location?: string;
  method?: string;
}

export default function Request({ method, location }: Props) {
  return (
    <HighlightedCode
      title={
        <span>
          {method} {location}
        </span>
      }
    >
      {JSON.stringify(location)}
    </HighlightedCode>
  );
}
