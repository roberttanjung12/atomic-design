import { TimelineTree } from '@/@dront/components';
import type { TimelineData } from '@/@dront/components/TimelineTree/Timeline.types';

const TimelineTreeActive = () => {
  const data: TimelineData[] = [
    {
      title: 'Test 1'
    },
    {
      title: <div>Test 2</div>
    },
    {
      title: 'Test 3',
      color: 'success'
    },
    {
      title: 'Test 4'
    }
  ];

  return <TimelineTree data={data} />;
};

export default TimelineTreeActive;
