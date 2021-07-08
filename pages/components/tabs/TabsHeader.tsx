import React from 'react';
import CopyButton from '../CopyButton';

interface Props {
  tabs: any[];
  children: (tab: any, index: number) => JSX.Element | JSX.Element[];
  currentTabIndex: number;
}

/**
 * Header for the Tabs component.
 *
 * @example
 * <TabsHeader tabs={[{ title: 'HTML' }]}>
 *   {({ tab }) => renderTabButton(tab)}
 * </TabsHeader>
 */
export default function TabsHeader({ tabs, children, currentTabIndex }: Props) {
  if (!tabs) return null;
  return (
    <div
      className="px-3 rounded-t-md space-x-2 text-white flex items-center"
      style={{ background: 'rgb(34, 35, 55)' }}
    >
      <div className="flex-1">{tabs.map((tab, index) => children(tab, index))}</div>
      <div className="border-l border-gray-500 pl-2">
        <CopyButton text={tabs[currentTabIndex].code} />
      </div>
    </div>
  );
}
