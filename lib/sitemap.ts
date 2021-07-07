import sitemap from "../sitemap.json";

export type SitemapItem = {
  name: string;
  to?: string;
  icon?: string;
  children?: SitemapItem[];
  staticRoute?: boolean;
};

export default sitemap as SitemapItem[];
