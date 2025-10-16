import { TimelineTree } from '@/@dront/components';
import type { TimelineData } from '@/@dront/components/TimelineTree/Timeline.types';

const TimelineTreePositionLeft = () => {
  const data: TimelineData[] = [
    {
      title: 'Test 1'
    },
    {
      title: <div>Test 2</div>
    },
    {
      title: 'Test 3'
    },
    {
      title: 'Test 4'
    }
  ];

  return <TimelineTree data={data} position="left" />;
};

export default TimelineTreePositionLeft;
