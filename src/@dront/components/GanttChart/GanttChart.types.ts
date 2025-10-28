/**
 * Represents the type of a task in the Gantt chart.
 *
 * @remarks
 * - `Task`: A standard task with a start and end date.
 * - `Milestone`: A significant event or marker, typically with no duration.
 * - `Group`: A collection of tasks grouped together.
 */

export const enum TaskType {
  Task = 'task',
  Milestone = 'milestone',
  Group = 'group'
}

/**
 * Represents a single task in the Gantt chart.
 *
 * @property id - Unique identifier for the task.
 * @property name - Display name of the task.
 * @property start - Start date/time of the task, as a string or Date object.
 * @property end - End date/time of the task, as a string or Date object.
 * @property type - The type/category of the task.
 * @property color - Optional colors for the task bar and progress indicator.
 * @property progress - Optional progress value (0-100) indicating completion percentage.
 * @property dependencies - Optional list of task IDs that this task depends on.
 * @property children - Optional list of child tasks (for hierarchical structures).
 * @property collapsed - Optional flag indicating if child tasks are collapsed in the UI.
 */
export interface Task {
  id: string;
  name: string;
  start: string | Date;
  end: string | Date;
  type: TaskType;
  color?: {
    bar: string;
    progress: string;
  };
  progress?: number;
  dependencies?: string[];
  children?: Task[];
  collapsed?: boolean;
}

/**
 * Props for the GanttChart component.
 *
 * @property data - An array of Task objects to be displayed in the Gantt chart.
 * @property title - Optional title for the Gantt chart.
 * @property height - Optional height of the chart, specified as a string (e.g., '400px') or number.
 * @property width - Optional width of the chart, specified as a string (e.g., '100%') or number.
 * @property onItemClick - Optional callback function invoked when a task item is clicked.
 */
export interface GanttChartProps {
  data: Task[];
  title?: string;
  height?: string | number;
  width?: string | number;
  onItemClick?: (task: Task) => void;
}
