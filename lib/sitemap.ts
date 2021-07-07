import sitemap from "../sitemap.json";

export type SitemapItem = {
  name: string;
  to?: string;
  icon?: string;
  children?: SitemapItem[];
};

export default sitemap;
