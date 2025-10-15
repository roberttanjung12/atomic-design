import { Timeline } from '@/@dront/components';
import type { TimelineData } from '@/@dront/components/Timeline/Timeline.types';

const TimelineOpposite = () => {
  const data: TimelineData[] = [
    {
      content: 'Test 1',
      opposite: '02:00 AM'
    },
    {
      content: <div>Test 2</div>,
      opposite: '02:30 PM'
    },
    {
      content: 'Test 3',
      opposite: '09:11 PM'
    },
    {
      content: 'Test 4',
      opposite: '11:21 AM'
    }
  ];

  return <Timeline data={data} position="alternate" />;
};

export default TimelineOpposite;
