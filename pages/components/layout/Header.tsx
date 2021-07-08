/* eslint-disable @next/next/no-img-element */
import { MenuAlt2Icon } from '@heroicons/react/outline';
import React from 'react';

interface Props {
  onToggleMenu: () => void;
}

export default function Header({ onToggleMenu }: Props) {
  const toggleMenu = () => {
    onToggleMenu();
  };

  return (
    <header className="relative z-10 flex-shrink-0 flex">
      <button
        className="px-4 text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden h-20"
        onClick={toggleMenu}
      >
        <span className="sr-only">Open main menu</span>
        <MenuAlt2Icon className="h-6 w-6" aria-hidden="true" />
      </button>
      <div className="flex-1 hidden justify-between py-2 px-4 md:flex max-w-screen-xl mx-auto">
        <div className="flex-1 flex items-center">
          <img src="/docs/white-logo.png" alt="MagicBell" style={{ height: '40px' }} />
        </div>
        <div className="ml-4 flex items-center md:ml-6 space-x-5 py-4">
          <a href="https://magicbell.com/pricing">Pricing</a>
          <a href="https://magicbell.com/docs">Docs</a>
          <a href="https://magicbell.com/blog">Blog</a>
          <a href="https://magicbell.com/about">About</a>
          <a href="https://app.magicbell.com">Login</a>
          <a className="bg-white rounded-md" href="https://app.magicbell.com">
            Sign Up
          </a>
        </div>
      </div>
    </header>
  );
}
