import { Timeline } from '@/@dront/components';
import type { TimelineData } from '@/@dront/components/Timeline/Timeline.types';

const TimelineActive = () => {
  const data: TimelineData[] = [
    {
      content: 'Test 1'
    },
    {
      content: <div>Test 2</div>
    },
    {
      content: 'Test 3',
      color: 'success'
    },
    {
      content: 'Test 4'
    }
  ];

  return <Timeline data={data} />;
};

export default TimelineActive;
