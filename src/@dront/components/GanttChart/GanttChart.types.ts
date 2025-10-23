export const enum TaskType {
  Task = 'task',
  Milestone = 'milestone',
  Group = 'group'
}

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

export interface GanttChartProps {
  data: Task[];
  title?: string;
  height?: string | number;
  width?: string | number;
}
