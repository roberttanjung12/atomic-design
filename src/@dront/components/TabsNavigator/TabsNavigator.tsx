'use client';

import { useState } from 'react';
import Box from '@mui/material/Box';
import clsx from 'clsx';
import DefaultContentWrapper from './DefaultContentWrapper';
import OutlinedTab from './OutlinedTab';
import TabList from './TabList';
import type { TabPanelProps, TabsNavigatorProps } from './types';
import UnderlineTab from './UnderlineTab';

const baseClassName = 'dront-tabs-navigator';

/**
 * Internal component for rendering the content of each tab.
 *
 * @template T - The type of the tab value (string literal union).
 */
const TabPanel = <T extends string>({ children, value, tabValue }: TabPanelProps<T>) => {
  return (
    <Box
      role="tabpanel"
      hidden={value !== tabValue}
      id={`tab-panel-${tabValue}`}
      aria-labelledby={`tab-panel-${tabValue}`}
      className={`${baseClassName}__panel`}
    >
      {value === tabValue && <>{children}</>}
    </Box>
  );
};

/**
 * A flexible and type-safe tab navigation component built on top of MUI Tabs.
 *
 * Supports different visual variants (`underline`, `outlined`),
 * optional content wrapper, and slotProps for customization.
 *
 * @example
 * Basic usage:
 * ```tsx
 * <TabsNavigator
 *   tabs={[
 *     { label: 'Tab One', value: 'one', content: <div>Content One</div> },
 *     { label: 'Tab Two', value: 'two', content: <div>Content Two</div> },
 *   ]}
 *   defaultValue="one"
 * />
 * ```
 *
 * With content wrapper:
 * ```tsx
 * <TabsNavigator
 *   tabs={[
 *     { label: 'Tab A', value: 'a', content: <div>A Content</div> },
 *     { label: 'Tab B', value: 'b', content: <div>B Content</div> },
 *   ]}
 *   contentWrapper={({ children }) => (
 *     <div className="p-4 border rounded-lg">{children}</div>
 *   )}
 * />
 * ```
 *
 * @template T - The type of the tab value (string literal union).
 */
const TabsNavigator = <T extends string>({
  tabs,
  defaultValue,
  onChange,
  variant = 'underline',
  className,
  contentWrapper: ContentWrapper,
  slotProps
}: TabsNavigatorProps<T>) => {
  const [value, setValue] = useState<T>(defaultValue ?? tabs[0].value);

  const handleChange = (_: React.SyntheticEvent, newValue: T) => {
    setValue(newValue);
    onChange?.(newValue);
  };

  const Wrapper = ContentWrapper ?? DefaultContentWrapper;

  const TabButton = variant === 'outlined' ? OutlinedTab : UnderlineTab;

  const { className: tabListClassName, ...tabListProps } = slotProps?.tabList ?? {};

  return (
    <Box className={clsx(baseClassName, `${baseClassName}--${variant}`, className)} {...slotProps?.root}>
      <TabList
        {...tabListProps}
        value={value}
        onChange={handleChange}
        className={clsx(`${baseClassName}__list`, tabListClassName)}
      >
        {tabs.map(tab => {
          const tabButtonActiveClassName = value === tab.value ? `${baseClassName}__tab--active` : '';

          return (
            <TabButton
              key={tab.value}
              label={tab.label}
              value={tab.value}
              className={clsx(`${baseClassName}__tab`, tabButtonActiveClassName)}
            />
          );
        })}
      </TabList>

      <Wrapper>
        {tabs.map(tab => (
          <TabPanel key={tab.value} value={value} tabValue={tab.value}>
            {tab.content}
          </TabPanel>
        ))}
      </Wrapper>
    </Box>
  );
};

export default TabsNavigator;
