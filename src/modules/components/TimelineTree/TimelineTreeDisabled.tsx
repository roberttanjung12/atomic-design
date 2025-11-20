import { TimelineTree } from '@/@dront/components';
import type { TimelineData } from '@/@dront/components/TimelineTree/Timeline.types';

const TimelineTreeDisabled = () => {
  const data: TimelineData[] = [
    {
      title: 'Test 1'
    },
    {
      title: <div>Test 2</div>
    },
    {
      title: 'Test 3',
      disabled: true
    },
    {
      title: 'Test 4',
      disabled: true
    }
  ];

  return <TimelineTree data={data} />;
};

export default TimelineTreeDisabled;
