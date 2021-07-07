import React from "react";
import { SitemapItem } from "../../../lib/sitemap";
import MenuItem from "./MenuItem";

interface Props {
  navigationItems: SitemapItem[];
}

export default function Menu({ navigationItems }: Props) {
  return (
    <div className="pb-4 overflow-y-auto">
      <nav className="py-8 space-y-1">
        {navigationItems.map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}
      </nav>
    </div>
  );
}
