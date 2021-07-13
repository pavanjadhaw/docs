import React from 'react';
import { SitemapItem } from '../../../lib/sitemap';
import Menu from './Menu';

interface Props {
  navigationItems: SitemapItem[];
}

export default function DesktopMenu({ navigationItems }: Props) {
  return (
    <div className="sticky top-24 h-full">
      <div className="flex-shrink-0 w-72 hidden md:block">
        <Menu navigationItems={navigationItems} />
      </div>
    </div>
  );
}
