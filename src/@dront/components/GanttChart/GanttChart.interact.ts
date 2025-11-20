import type { Task } from './GanttChart.types';

/**
 * Recursively flattens a hierarchical list of tasks into a single array.
 * Only includes children of tasks that are not collapsed.
 *
 * @param tasks - The array of tasks to flatten.
 * @returns A flat array of tasks, including all expanded children.
 */
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

/**
 * Toggles the `collapsed` state of a task with the specified `taskId` within a nested list of tasks.
 * If the task is found, its `collapsed` property is inverted.
 * The function recursively traverses child tasks if present.
 *
 * @param tasks - The array of tasks to search through.
 * @param taskId - The ID of the task whose `collapsed` state should be toggled.
 * @returns A new array of tasks with the specified task's `collapsed` state toggled.
 */
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
