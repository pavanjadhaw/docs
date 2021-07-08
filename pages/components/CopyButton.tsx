import { ClipboardIcon } from '@heroicons/react/outline';
import React from 'react';
import { useCopyToClipboard } from 'react-use';

export default function CopyButton({ text }: { text: string }) {
  const [state, copyToClipboard] = useCopyToClipboard();
  return (
    <button type="button" onClick={() => copyToClipboard(text)}>
      <ClipboardIcon className="h-4 w-4" />
    </button>
  );
}
