import React from 'react';
import CopyButton from '../CopyButton';

interface Props {
  title: string;
  code: string;
}

export default function HighlightedCodeHeader({ title, code }: Props) {
  return (
    <div
      className="px-6 py-3 rounded-t-md uppercase text-xs font-bold text-white flex items-center"
      style={{
        background: '#222337',
      }}
    >
      <span className="flex-1">{title}</span>
      <div>
        <CopyButton text={code} />
      </div>
    </div>
  );
}
