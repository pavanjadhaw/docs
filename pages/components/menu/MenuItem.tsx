import React from "react";
import { SitemapItem } from "../../../lib/sitemap";
import PageLink from "./PageLink";
import ParentMenuItem from "./ParentMenuItem";

export default function MenuItem(props: SitemapItem) {
  if (props.children) return <ParentMenuItem {...props} />;
  if (props.to) return <PageLink {...props} />;
  return null;
}
