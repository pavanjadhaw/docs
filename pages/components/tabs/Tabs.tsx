import classNames from 'classnames';
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
 *   ```html title=HTML
 *   <div id="tab-1"/>
 *   ```
 *   ```html title=Java
 *   <div id="tab-2"/>
 *   ```
 * </Tabs>
 */
export default function Tabs({ children, defaultIndex = 0 }: CodeTabsProps) {
  const [focusedIndex, setFocusedIndex] = useState(defaultIndex);

  const tabs = children?.map(({ props }) => ({
    // Get code > pre props
    title: props.children.props.title,
    code: props.children.props.children,
  }));

  if (!children) return null;
  return (
    <div className="my-4">
      <TabsHeader tabs={tabs} currentTabIndex={focusedIndex}>
        {(tab, index) => (
          <button
            key={index}
            className={classNames(
              'p-3 text-xs font-bold font-mono',
              focusedIndex === index ? 'text-white' : 'text-gray-400',
            )}
            onClick={() => setFocusedIndex(index)}
          >
            {tab.title}
          </button>
        )}
      </TabsHeader>
      {children.map((component, index) => (
        <TabPanel key={index} isActive={focusedIndex === index}>
          {component.props.children}
        </TabPanel>
      ))}
    </div>
  );
}
