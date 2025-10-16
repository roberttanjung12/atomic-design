import { TimelineTree } from '@/@dront/components';
import type { TimelineData } from '@/@dront/components/TimelineTree/Timeline.types';

const TimelineTreeOpposite = () => {
  const data: TimelineData[] = [
    {
      title: 'Test 1',
      opposite: '02:00 AM'
    },
    {
      title: <div>Test 2</div>,
      opposite: '02:30 PM'
    },
    {
      title: 'Test 3',
      opposite: '09:11 PM'
    },
    {
      title: 'Test 4',
      opposite: '11:21 AM'
    }
  ];

  return <TimelineTree data={data} />;
};

export default TimelineTreeOpposite;
