import { type StackProps } from '@mui/material/Stack';
import { type SxProps, type Theme } from '@mui/material/styles';

/**
 * Props for table pagination component
 */
export interface TablePaginationProps {
  /**
   * Current page number (1-based).
   */
  page: number;
  /**
   * Number of items per page.
   */
  perPage: number;
  /**
   * Total number of data items.
   */
  totalData: number;
  /**
   * Available options for items per page.
   */
  perPageRange?: number[];
  /**
   * Callback when page changes.
   */
  onPageChange?: (value: number) => void;
  /**
   * Callback when items per page changes.
   */
  onPerPageRangeChange?: (value: number) => void;
}

/**
 * Interface for table action items
 * @template T - Type of the row data
 */
interface TableRowAction<T> {
  /**
   * Display label for the action.
   */
  label: string;
  /**
   * Optional icon to display.
   */
  icon?: React.ReactNode;
  /**
   * Callback when action is clicked.
   */
  onClick?: (row: T) => void;
  /**
   * Whether the action is disabled.
   */
  disabled?: boolean;
}

/**
 * Props for table action component
 * @template T - Type of the row data
 */
export interface TableActionProps<T> {
  /**
   * Array of available actions for the row.
   */
  rowActions: TableRowAction<T>[];
  /**
   * The row data.
   */
  rowData: T;
}

/**
 * Configuration for table header
 */
interface TableHeaderConfig {
  /**
   * Header label text.
   */
  label: string;
  /**
   * Optional styling for the header cell.
   */
  sx?: SxProps<Theme>;
}

/**
 * Configuration for table row cells
 * @template T - Type of the row data
 */
interface TableRowConfig<T> {
  /**
   * Function to render cell content.
   */
  value: (data: T, index: number) => React.ReactNode;
  /**
   * Optional styling for the cell.
   */
  sx?: SxProps<Theme>;
}

/**
 * Complete table row configuration including header and cell
 * @template T - Type of the row data
 */
export interface TableRow<T> {
  /**
   * Header configuration.
   */
  header: TableHeaderConfig;
  /**
   * Row cell configuration.
   */
  row: TableRowConfig<T>;
}

/**
 * Styling for action column.
 */
type ActionColumnSx = SxProps<Theme>;

/**
 * Label for action column.
 */
type ActionColumnLabel = string;

/**
 * Function that returns actions for a given row.
 */
export type TableActions<T> = (row: T) => TableRowAction<T>[];

/**
 * Props for table head component
 * @template T - Type of the row data
 */
export interface TableHeadProps<T> {
  /**
   * Table row configurations.
   */
  rows: TableRow<T>[];
  /**
   * Whether to show actions column.
   */
  hasActions?: boolean;
  /**
   * Label for actions column.
   */
  actionColumnLabel?: ActionColumnLabel;
  /**
   * Styling for actions column.
   */
  actionColumnSx?: ActionColumnSx;
}

/**
 * Props for table body component
 * @template T - Type of the row data
 */
export interface TableBodyProps<T> {
  /**
   * Array of data to display.
   */
  data: T[];
  /**
   * Table row configurations.
   */
  rows: TableRow<T>[];
  /**
   * Function to generate actions for each row.
   */
  actions?: TableActions<T>;
  /**
   * Styling for actions column.
   */
  actionColumnSx?: ActionColumnSx;
  /**
   * Whether table is in loading state.
   */
  loading?: boolean;
  /**
   * Content to show when no data.
   */
  fallback?: React.ReactNode;
  /**
   * Content to show during loading.
   */
  loadingFallback?: React.ReactNode;
}

/**
 * Props to pass to internal components.
 */
interface TableSlotProps {
  /**
   * Props for the root Stack component.
   */
  root?: StackProps;
}

/**
 * Props for the main Table component
 * @template T - Type of the row data (must have an 'id' property)
 */
export interface TableProps<T> {
  /**
   * Array of data to display.
   */
  data: T[];
  /**
   * Table row configurations.
   */
  rows: TableRow<T>[];
  /**
   * Function to generate actions for each row.
   */
  actions?: TableActions<T>;
  /**
   * Whether to show row numbering.
   * @default false
   */
  showNumbering?: boolean;
  /**
   * Label for actions column.
   * @default 'Action(s)'
   */
  actionColumnLabel?: ActionColumnLabel;
  /**
   * Styling for actions column.
   * @default { textAlign: 'center', width: 60 }
   */
  actionColumnSx?: ActionColumnSx;
  /**
   * Whether table is in loading state.
   * @default false
   */
  loading?: TableBodyProps<T>['loading'];
  /**
   * Content to show when no data.
   */
  fallback?: TableBodyProps<T>['fallback'];
  /**
   * Content to show during loading.
   */
  loadingFallback?: TableBodyProps<T>['loadingFallback'];
  /**
   * Current page number.
   * @default 1
   */
  page?: TablePaginationProps['page'];
  /**
   * Number of items per page.
   * @default 5
   */
  perPage?: TablePaginationProps['page'];
  /**
   * Total number of data items.
   * @default 0
   */
  totalData: TablePaginationProps['page'];
  /**
   * Props to pass to internal components.
   */
  slotProps?: TableSlotProps;
  /**
   * Callback when page changes.
   */
  onPageChange?: TablePaginationProps['onPageChange'];
  /**
   * Callback when items per page changes.
   */
  onPerPageRangeChange?: TablePaginationProps['onPerPageRangeChange'];
}
