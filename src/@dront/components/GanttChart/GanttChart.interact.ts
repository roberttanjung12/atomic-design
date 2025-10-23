import type { Task } from './GanttChart.types';

export const flattenTasks = (tasks: Task[]): Task[] => {
  const result: Task[] = [];

  for (const t of tasks) {
    result.push(t);
    if (t.children && !t.collapsed) {
      result.push(...flattenTasks(t.children));
    }
  }

  return result;
};

export const toggleExpand = (tasks: Task[], taskId: string): Task[] => {
  return tasks.map(t => {
    if (t.id === taskId) {
      return { ...t, collapsed: !t.collapsed };
    }
    if (t.children) {
      return { ...t, children: toggleExpand(t.children, taskId) };
    }

    return t;
  });
};
