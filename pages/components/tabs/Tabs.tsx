import React, { useState } from 'react';
import TabPanel from './TabPanel';
import TabsHeader from './TabsHeader';

export interface CodeTabsProps {
  children: JSX.Element[];
  defaultIndex?: number;
}

/**
 * Tabs component.
 *
 * @example
 * <Tabs>
 *   <div>Tab 1</div>
 *   <div>Tab 2</div>
 * </Tabs>
 */
export default function Tabs({ children, defaultIndex = 0 }: CodeTabsProps) {
  const [focusedIndex, setFocusedIndex] = useState(defaultIndex);

  const tabs = children.map((component) => ({
    title: component.props.title,
  }));

  return (
    <div className="my-4">
      <TabsHeader tabs={tabs}>
        {(tab, index) => (
          <button
            className="p-3 text-xs font-bold font-mono"
            onClick={() => setFocusedIndex(index)}
          >
            {tab.title}
          </button>
        )}
      </TabsHeader>
      {children.map((component, index) => (
        <TabPanel key={index} isActive={focusedIndex === index}>
          {component}
        </TabPanel>
      ))}
    </div>
  );
}
