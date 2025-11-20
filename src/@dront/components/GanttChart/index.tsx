'use client';

import React, { useMemo, useState, useCallback, type ReactNode } from 'react';
import ReactEcharts from 'echarts-for-react';
import { flattenTasks, toggleExpand } from './GanttChart.interact';
import { buildGanttChartOptions } from './GanttChart.options';
import type { GanttChartProps, Task } from './GanttChart.types';
import { computeRange } from './GanttChart.utils';

const GANTT_CHART_COLORS = {
  axis: '#999',
  text: '#333',
  divider: '#eee',
  title: '#222'
};

/**
 * GanttChart
 *
 * A responsive, interactive Gantt chart component built on echarts.
 *
 * Renders a timeline visualization for a hierarchical list of tasks. Tasks may be
 * nested and groups can be expanded/collapsed. The chart automatically computes
 * the visible time range from the flattened task list and builds echarts options
 * accordingly.
 *
 *   Receives the clicked Task as its single argument.
 *
 * Behavior and implementation notes:
 * @remarks
 * - The component maintains local state for the task hierarchy, ensuring each task
 *   has a `collapsed` boolean (defaults to true when not provided).
 * - Tasks are flattened (preserving order and nesting information) with flattenTasks
 *   to produce the series and axis values for echarts.
 * - The visible time range is computed from the flattened tasks via computeRange and
 *   passed into buildGanttChartOptions together with a fixed color palette.
 * - Click handling supports clicks on the yAxis label and on series items:
 *   - If a clicked task has children, the component toggles its collapsed state (expand/collapse).
 *   - If a clicked task is a leaf, and onItemClick is provided, it will be invoked
 *     with the clicked Task object.
 * - A helper (findTaskByName) is used to map a clicked label/name back to the task object.
 * - The rendered ReactEcharts instance is re-keyed by the flattened data length to help
 *   force re-rendering when the number of visible rows changes.
 *
 * Returns:
 * @returns {React.JSX} - a div wrapper containing the configured ReactEcharts instance.
 *
 * Example:
 * @example
 * <GanttChart
 *   data={[{ id: '1', name: 'Phase A', start: '2024-01-01', end: '2024-02-01', children: [...] }]}
 *   title="Project Timeline"
 *   height={480}
 *   onItemClick={(task) => console.log('clicked', task)}
 * />
 */
const GanttChart = ({
  data: initialData,
  title,
  height = 400,
  width = '100%',
  onItemClick
}: GanttChartProps): Readonly<ReactNode> => {
  const [data, setData] = useState<Task[]>(() =>
    initialData.map(task => ({
      ...task,
      collapsed: task.collapsed ?? true
    }))
  );

  const handleToggleExpand = useCallback((taskId: string) => {
    setData(prev => toggleExpand(prev, taskId));
  }, []);

  const flatData = useMemo(() => flattenTasks(data), [data]);
  const range = useMemo(() => computeRange(flatData), [flatData]);
  const option = useMemo(
    () => buildGanttChartOptions(flatData, title, range, GANTT_CHART_COLORS, 'sans-serif'),
    [flatData, title, range]
  );

  const findTaskByName = useCallback((tasks: Task[], name: string): Task | undefined => {
    for (const t of tasks) {
      if (t.name === name) return t;
      if (t.children) {
        const found = findTaskByName(t.children, name);

        if (found) return found;
      }
    }

    return undefined;
  }, []);

  const onEvents = useMemo(
    () => ({
      click: (params: any) => {
        let taskName: string | undefined;

        if (params.componentType === 'yAxis' && params.value) {
          taskName = params.value;
        } else if (params.componentType === 'series' && params.name) {
          taskName = params.name;
        }

        if (taskName) {
          const clickedTask = findTaskByName(data, taskName);

          if (clickedTask) {
            if (clickedTask?.children?.length) return handleToggleExpand(clickedTask.id);

            if (onItemClick) return onItemClick(clickedTask);
          }
        }
      }
    }),
    [data, findTaskByName, handleToggleExpand, onItemClick]
  );

  return (
    <div style={{ width, height }}>
      <ReactEcharts
        option={option}
        onEvents={onEvents}
        key={flatData.length}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};

export default GanttChart;
