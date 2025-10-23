'use client';

import Timeline from '@/@dront/components/GanttChart';
import { type Task, TaskType } from '@/@dront/components/GanttChart/GanttChart.types';

const GanttChartBasic = () => {
  const data: Task[] = [
    {
      id: '1',
      name: 'Design Phase',
      start: new Date('2025-01-01'),
      end: new Date('2025-01-10'),
      type: TaskType.Task
    },
    {
      id: '2',
      name: 'Development Phase',
      start: new Date('2025-01-9'),
      end: new Date('2025-02-15'),
      type: TaskType.Task
    },
    {
      id: '3',
      name: 'Testing & QA',
      start: new Date('2025-02-02'),
      end: new Date('2025-02-20'),
      type: TaskType.Milestone
    }
  ];

  return <Timeline data={data} title="Timeline Project A 2025" />;
};

export default GanttChartBasic;
