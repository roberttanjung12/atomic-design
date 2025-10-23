'use client';

import { GanttChart } from '@/@dront/components';
import { TaskType, type Task } from '@/@dront/components/GanttChart/GanttChart.types';

const GanttChartOnClick = () => {
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
      type: TaskType.Task
    },
    {
      id: '4',
      name: 'Demo',
      start: new Date('2025-02-18'),
      end: new Date('2025-02-23'),
      type: TaskType.Milestone
    }
  ];

  const onItemClick = (item: Task) => {
    alert(JSON.stringify(item));
  };

  return <GanttChart data={data} title="Timeline Project A 2025" onItemClick={onItemClick} />;
};

export default GanttChartOnClick;
