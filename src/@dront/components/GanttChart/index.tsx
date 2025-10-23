'use client';

import React, { useMemo, useState, useCallback } from 'react';
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

const GanttChart = ({ data: initialData, title, height = 400, width = '100%' }: GanttChartProps) => {
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

          if (clickedTask?.children?.length) {
            console.log('Toggling ID:', clickedTask.id);
            handleToggleExpand(clickedTask.id);
          }
        }
      }
    }),
    [data, findTaskByName, handleToggleExpand]
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
