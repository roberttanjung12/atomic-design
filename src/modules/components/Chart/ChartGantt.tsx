import Chart from '@/@dront/components/Chart';
import { TaskType } from '@/@dront/components/Chart/GanttChart'; // Assuming this path

const ChartGantt = () => {
  const data = {
    task: [
      {
        id: '1',
        name: 'Design Phase',
        start: new Date('2025-01-01'),
        end: new Date('2025-01-10'),
        type: TaskType.Task,
        progress: 40
      },
      {
        id: '2',
        name: 'Development Phase',
        start: new Date('2025-01-9'),
        end: new Date('2025-02-15'),
        type: TaskType.Task,
        progress: 70,
        dependencies: ['1']
      },
      {
        id: '3',
        name: 'Testing & QA',
        start: new Date('2025-02-02'),
        end: new Date('2025-02-20'),
        type: TaskType.Milestone,
        progress: 20,
        dependencies: ['2']
      }
    ]
  };

  return <Chart type="gantt" data={data} title="Timeline Front End 2025" />;
};

export default ChartGantt;
