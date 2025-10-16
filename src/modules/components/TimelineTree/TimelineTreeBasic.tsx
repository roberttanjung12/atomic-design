import { TimelineTree } from '@/@dront/components';
import type { TimelineData } from '@/@dront/components/TimelineTree/Timeline.types';

const TimelineTreeBasic = () => {
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

  return <TimelineTree data={data} />;
};

export default TimelineTreeBasic;
