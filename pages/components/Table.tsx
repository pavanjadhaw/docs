import React from 'react';

export default function Table({ children }: { children: JSX.Element }) {
  return (
    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg m-6">
      <table>{children}</table>
    </div>
  );
}
