import { ClipboardIcon } from '@heroicons/react/outline';
import React from 'react';

interface Props {
  tabs: any[];
  children: (tab: any, index: number) => JSX.Element | JSX.Element[];
}

/**
 * Header for the Tabs component.
 *
 * @example
 * <TabsHeader tabs={[{ title: 'HTML' }]}>
 *   {({ tab }) => renderTabButton(tab)}
 * </TabsHeader>
 */
export default function TabsHeader({ tabs, children }: Props) {
  return (
    <div
      className="px-3 rounded-t-md space-x-2 text-white flex items-center"
      style={{ background: 'rgb(34, 35, 55)' }}
    >
      <div className="flex-1">{tabs.map((tab, index) => children(tab, index))}</div>
      <div>
        <button className="">
          <ClipboardIcon className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
