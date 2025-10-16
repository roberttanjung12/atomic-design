import { TimelineTree } from '@/@dront/components';
import type { TimelineData } from '@/@dront/components/TimelineTree/Timeline.types';

const TimelineTreeActive = () => {
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

  return <TimelineTree data={data} />;
};

export default TimelineTreeActive;
