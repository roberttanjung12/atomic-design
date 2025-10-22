'use client';

import Timeline from '@/@dront/components/Timeline';
import { type Task, TaskType } from '@/@dront/components/Timeline/Timeline.types';

const TimelineDependency = () => {
  const data: Task[] = [
    {
      id: '1',
      name: 'Design Phase',
      start: new Date('2025-01-01'),
      end: new Date('2025-01-10'),
      type: TaskType.Task,
      progress: 37
    },
    {
      id: '2',
      name: 'Development Phase',
      start: new Date('2025-01-9'),
      end: new Date('2025-02-15'),
      type: TaskType.Task,
      progress: 65,
      dependencies: ['1']
    },
    {
      id: '3',
      name: 'Testing & QA',
      start: new Date('2025-02-02'),
      end: new Date('2025-02-20'),
      type: TaskType.Task,
      progress: 52,
      dependencies: ['2']
    },
    {
      id: '4',
      name: 'Demo',
      start: new Date('2025-02-18'),
      end: new Date('2025-02-23'),
      type: TaskType.Milestone,
      progress: 70,
      dependencies: ['3']
    }
  ];

  return <Timeline data={data} title="Timeline Project A 2025" />;
};

export default TimelineDependency;
