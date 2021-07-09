import { flatten, isNil, reject } from 'ramda';
import sitemap from '../sitemap.json';

export type SitemapItem = {
  name: string;
  to?: string;
  icon?: string;
  children?: SitemapItem[];
  staticRoute?: boolean;
};

export default sitemap as SitemapItem[];

export function getAllChildrenPaths(element: any): string[] {
  if (element.to) return element.to;
  return reject(isNil, flatten(element.children.map(getAllChildrenPaths)));
}
