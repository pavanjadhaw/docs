import { ChevronRightIcon } from "@heroicons/react/outline";
import classNames from "classnames";
import React from "react";
import { useToggle } from "react-use";
import LinkIcon from "./LinkIcon";
import MenuItem from "./MenuItem";

interface Props {
  name: string;
  icon?: string;
  children: [];
}

export default function ParentMenuItem({ name, icon, children }: Props) {
  const [isOpen, toggle] = useToggle(false);

  return (
    <div className="submenu">
      <button
        className="group py-4 px-6 flex items-center w-full hover:bg-white group-hover:text-gray-800"
        onClick={toggle}
      >
        {icon ? <LinkIcon name={icon} /> : null}
        <a className="flex-1 text-sm text-left text-gray-800">{name}</a>
        <ChevronRightIcon
          className={classNames(
            isOpen ? "rotate-90" : "rotate-0",
            "transform h-4 w-4"
          )}
        />
      </button>
      {isOpen && (
        <ul className="border-l border-gray-200 border-dashed ml-9">
          {children.map((item, index) => (
            <MenuItem key={index} {...item} />
          ))}
        </ul>
      )}
    </div>
  );
}