import React from 'react';

interface Props {
  children: JSX.Element | JSX.Element[];
  title: string;
}

export default function Card({ children, title }: Props) {
  return (
    <div className="break-inside bg-purple text-white rounded p-6 mb-4">
      <p className="font-bold text-xl">{title}</p>
      {children}
    </div>
  );
}
