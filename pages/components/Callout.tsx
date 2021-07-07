import classNames from "classnames";
import React from "react";

export default function Callout({ children, className }) {
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
