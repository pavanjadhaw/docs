import hotkeys from 'hotkeys-js';
import React, { useEffect } from 'react';

export default function SearchBoxShortcut() {
  useEffect(() => {
    hotkeys('command+K', function (event, handler) {
      event.preventDefault();
      document.getElementById('search-field')?.focus();
    });
    return () => {
      hotkeys.unbind('command+K');
    };
  }, []);

  return (
    <div className="hidden md:flex space-x-1 items-center">
      <span className="border border-gray-200 text-gray-500 p-1 w-7 font-bold text-center rounded text-sm">
        &#x2318;
      </span>
      <span className="border border-gray-200 text-gray-500 p-1 w-7 font-bold text-center rounded text-sm">
        K
      </span>
    </div>
  );
}
