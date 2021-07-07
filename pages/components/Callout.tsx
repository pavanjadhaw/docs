import classNames from "classnames";
import React from "react";

interface Props {
  children: JSX.Element | JSX.Element[];
  className: string;
}

export default function Callout({ children, className }: Props) {
  return (
    <div
      className={classNames(
        "my-4 p-4 rounded-md bg-yellow-100 text-gray-900",
        className
      )}
    >
      {children}
    </div>
  );
}
