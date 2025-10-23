export const enum TaskType {
  Task = 'task',
  Milestone = 'milestone'
}

export interface Task {
  id: string;
  name: string;
  start: string | Date;
  end: string | Date;
  type: TaskType;
  color?: { bar: string; progress: string };
  progress?: number;
  dependencies?: string[];
}

export interface GanttChartProps {
  data: Task[];
  title?: string;
  height?: string | number;
  width?: string | number;
}
