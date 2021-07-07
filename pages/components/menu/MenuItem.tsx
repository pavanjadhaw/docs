import React from "react";
import PageLink from "./PageLink";
import ParentMenuItem from "./ParentMenuItem";

interface Props {
  name: string;
  to?: string;
  icon?: string;
  children?: [];
}

export default function MenuItem(props: Props) {
  if (props.children) return <ParentMenuItem {...props} />;
  if (props.to) return <PageLink {...props} />;
  return null;
}
