import { type BoxProps } from '@mui/material/Box';
import { type TabsProps } from '@mui/material/Tabs';

/**
 * Props for a single tab panel.
 *
 * @template T - The type of the tab value (string literal union).
 */
export interface TabPanelProps<T extends string> {
  /**
   * Content of the tab panel.
   */
  children?: React.ReactNode;

  /**
   * The value of the tab that this panel is associated with.
   */
  tabValue: T;

  /**
   * The currently active tab value.
   */
  value: T;
}

/**
 * Definition of a single tab item inside the TabsNavigator.
 *
 * @template T - The type of the tab value (string literal union).
 */
interface TabItem<T extends string> {
  /**
   * The label displayed on the tab.
   */
  label: string;

  /**
   * Unique value that identifies the tab.
   */
  value: T;

  /**
   * Content rendered when this tab is active.
   */
  content: React.ReactNode;
}

/**
 * Props passed into the optional content wrapper.
 */
interface ContentWrapperProps {
  /**
   * The content to be wrapped.
   */
  children: React.ReactNode;
}

/**
 * Props for the TabsNavigator component.
 *
 * @template T - The type of the tab value (string literal union).
 */
export interface TabsNavigatorProps<T extends string> {
  /**
   * Array of tab items that define labels, values, and content.
   */
  tabs: TabItem<T>[];

  /**
   * The default selected tab value.
   */
  defaultValue?: T;

  /**
   * Callback fired when the active tab changes.
   *
   * @param value - The new active tab value.
   */
  onChange?: (value: T) => void;

  /**
   * Visual variant of the tabs.
   */
  variant?: 'underline' | 'outlined';

  /**
   * Optional className for custom styling of the root container.
   */
  className?: string;

  /**
   * Optional wrapper around the active tab content.
   *
   * @example
   * ```tsx
   * contentWrapper={({ children }) => (
   *   <div className="p-4 border rounded-lg">{children}</div>
   * )}
   * ```
   */
  contentWrapper?: (props: ContentWrapperProps) => React.ReactElement;

  /**
   * Slot props to customize MUI underlying components.
   */
  slotProps?: {
    /**
     * Props for the root container (MUI Box).
     */
    root?: Omit<BoxProps, 'className'>;

    /**
     * Props for the MUI Tabs component (MUI Tabs), excluding controlled props.
     */
    tabList?: Omit<TabsProps, 'value' | 'onChange'>;
  };
}
