'use client';

import Timeline from '@/@dront/components/GanttChart';
import { TaskType, type Task } from '@/@dront/components/GanttChart/GanttChart.types';

const GanttChartBasic = () => {
  const data: Task[] = [
    {
      id: '1',
      name: 'Project Initiation',
      start: '2025-01-01',
      end: '2025-01-10',
      progress: 65,
      type: TaskType.Task,
      children: [
        {
          id: '1.1',
          name: 'Requirement Gathering',
          start: '2025-01-02',
          end: '2025-01-05',
          progress: 100,
          type: TaskType.Task,
          color: { bar: '#81C784', progress: '#388E3C' }
        },
        {
          id: '1.2',
          name: 'Stakeholder Meeting',
          start: '2025-01-06',
          end: '2025-01-10',
          progress: 50,
          type: TaskType.Task,
          dependencies: ['1.1'],
          color: { bar: '#66BB6A', progress: '#2E7D32' }
        }
      ]
    },
    {
      id: '2',
      name: 'Design Phase',
      start: '2025-01-11',
      end: '2025-01-25',
      progress: 60,
      type: TaskType.Task,
      dependencies: ['1'],
      color: { bar: '#42A5F5', progress: '#1565C0' },
      children: [
        {
          id: '2.1',
          name: 'UI/UX Design',
          start: '2025-01-11',
          end: '2025-01-18',
          progress: 80,
          type: TaskType.Task,
          color: { bar: '#64B5F6', progress: '#1E88E5' }
        },
        {
          id: '2.2',
          name: 'System Architecture',
          start: '2025-01-18',
          end: '2025-01-25',
          progress: 40,
          type: TaskType.Task,
          color: { bar: '#90CAF9', progress: '#1976D2' }
        }
      ]
    },
    {
      id: '3',
      name: 'Development Phase',
      start: '2025-01-26',
      end: '2025-02-20',
      progress: 45,
      type: TaskType.Task,
      dependencies: ['2'],
      color: { bar: '#FFB300', progress: '#F57C00' },
      children: [
        {
          id: '3.1',
          name: 'Frontend Development',
          start: '2025-01-26',
          end: '2025-02-10',
          progress: 50,
          type: TaskType.Task,
          color: { bar: '#FFD54F', progress: '#FFA000' }
        },
        {
          id: '3.2',
          name: 'Backend Development',
          start: '2025-02-05',
          end: '2025-02-20',
          progress: 40,
          type: TaskType.Task,
          color: { bar: '#FFE082', progress: '#FB8C00' }
        }
      ]
    },
    {
      id: '4',
      name: 'Testing & QA',
      start: '2025-02-21',
      end: '2025-02-28',
      progress: 30,
      type: TaskType.Task,
      dependencies: ['3'],
      color: { bar: '#E57373', progress: '#C62828' }
    }
  ];

  return <Timeline data={data} title="Timeline Project A 2025" />;
};

export default GanttChartBasic;
