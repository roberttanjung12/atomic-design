import { TimelineTree } from '@/@dront/components';
import type { TimelineData } from '@/@dront/components/TimelineTree/Timeline.types';

const TimelineTreeDisabled = () => {
  const data: TimelineData[] = [
    {
      content: 'Test 1'
    },
    {
      content: <div>Test 2</div>
    },
    {
      content: 'Test 3',
      disabled: true
    },
    {
      content: 'Test 4',
      disabled: true
    }
  ];

  return <TimelineTree data={data} />;
};

export default TimelineTreeDisabled;
