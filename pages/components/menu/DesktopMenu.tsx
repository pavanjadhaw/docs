import React from 'react';
import { SitemapItem } from '../../../lib/sitemap';
import Menu from './Menu';

interface Props {
  navigationItems: SitemapItem[];
}

export default function DesktopMenu({ navigationItems }: Props) {
  return (
    <div className="flex-shrink-0 w-72 h-full border-r border-gray-200 overflow-hidden hidden md:block">
      <Menu navigationItems={navigationItems} />
    </div>
  );
}
