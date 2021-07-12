import React from 'react';

interface Props {
  hit: {
    objectID: string;
    title: string;
    content: string;
    _highlightResult: {
      title: { value: string };
    };
  };
}

export default function SearchHit({ hit }: Props) {
  const { _highlightResult } = hit;
  return (
    <article className="py-4 px-8 text-white hover:bg-gray-700">
      <p
        className="m-0"
        dangerouslySetInnerHTML={{ __html: _highlightResult.title.value }}
      />
    </article>
  );
}
