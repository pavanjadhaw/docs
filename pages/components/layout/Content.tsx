import React from "react";
import SearchBar from "./SearchBar";

interface Props {
  children: JSX.Element | JSX.Element[];
}

export default function Content({ children }: Props) {
  return (
    <div className="max-w-4xl mx-auto w-0 flex-1 flex flex-col md:px-8 xl:px-0 mb-20">
      <div className="md:pt-10 px-4 md:px-0 border-b border-gray-200">
        <SearchBar />
      </div>
      <main className="flex-1 relative overflow-y-auto focus:outline-none">
        <div className="p-4 md:p-0">{children}</div>
      </main>
    </div>
  );
}
