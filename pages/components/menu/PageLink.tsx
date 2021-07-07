import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { SitemapItem } from "../../../lib/sitemap";
import LinkIcon from "./LinkIcon";

export default function PageLink({ name, to, icon }: SitemapItem) {
  const router = useRouter();
  const isActive = router.asPath === to;

  return (
    <Link href={to || ""}>
      <a
        className={classNames(
          isActive
            ? "bg-white text-gray-800 font-bold"
            : "text-gray-600 hover:bg-white group-hover:text-gray-800",
          "group py-3 px-6 flex items-center text-sm"
        )}
      >
        {icon ? <LinkIcon name={icon} isActive={isActive} /> : null}
        {name}
      </a>
    </Link>
  );
}
