import React from "react";
import { SitemapItem } from "../../../lib/sitemap";
import Menu from "./Menu";

interface Props {
  navigationItems: SitemapItem[];
}

export default function DesktopMenu({ navigationItems }: Props) {
  return (
    <div className="h-full border-r border-gray-200 overflow-hidden flex">
      <div className="hidden md:flex md:flex-shrink-0">
        <div className="w-72 xl:w-80">
          <Menu navigationItems={navigationItems} />
        </div>
      </div>
    </div>
  );
}
