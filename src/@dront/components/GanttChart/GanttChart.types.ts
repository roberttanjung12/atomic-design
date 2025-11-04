/**
 * Enum representing available task types in the Gantt chart.
 */
export const enum TaskType {
  /** Standard task representing an actionable item. */
  Task = 'task',

  /** A milestone marker representing a significant event or deadline. */
  Milestone = 'milestone',

  /** A group that contains multiple child tasks. */
  Group = 'group'
}

/**
 * Represents a single task or milestone in the Gantt chart.
 */
export interface Task {
  /** Unique identifier for the task. */
  id: string;

  /** Display name or title of the task. */
  name: string;

  /** Task start date (string or Date format). */
  start: string | Date;

  /** Task end date (string or Date format). */
  end: string | Date;

  /** Type of task, indicating whether it's a task, milestone, or group. */
  type: TaskType;

  /** Color configuration for task bar and progress visualization. */
  color?: {
    /** Color for the task bar. */
    bar: string;
    /** Color for the task progress indicator. */
    progress: string;
  };

  /** Progress percentage of the task (0–100). */
  progress?: number;

  /** List of task IDs that this task depends on. */
  dependencies?: string[];

  /** Nested child tasks (used when this task is a group). */
  children?: Task[];

  /** Whether the group task is collapsed (hides its children). */
  collapsed?: boolean;
}

/**
 * Props definition for the GanttChart component.
 */
export interface GanttChartProps {
  /** Array of task objects to be rendered in the Gantt chart. */
  data: Task[];

  /** Optional chart title displayed above the Gantt chart. */
  title?: string;

  /** Height of the chart container (can be string or number). */
  height?: string | number;

  /** Width of the chart container (can be string or number). */
  width?: string | number;

  /**
   * Callback triggered when a task item is clicked.
   *
   * @param task - The task object that was clicked.
   */
  onItemClick?: (task: Task) => void;
}
