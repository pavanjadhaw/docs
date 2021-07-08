import { ClipboardIcon } from '@heroicons/react/outline';
import React from 'react';

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
        <button>
          <ClipboardIcon className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
