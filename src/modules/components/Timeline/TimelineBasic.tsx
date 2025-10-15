import { Timeline } from '@/@dront/components';
import type { TimelineData } from '@/@dront/components/Timeline/Timeline.types';

const TimelineBasic = () => {
  const data: TimelineData[] = [
    {
      content: 'Test 1'
    },
    {
      content: <div>02:22 PM</div>
    },
    {
      content: 'Test 3'
    },
    {
      content: 'Test 4'
    },
    {
      content: 'Test 5'
    },
    {
      content: 'Test 6'
    }
  ];

  return <Timeline data={data} />;
};

export default TimelineBasic;
