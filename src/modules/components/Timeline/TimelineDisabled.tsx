import { Timeline } from '@/@dront/components';
import type { TimelineData } from '@/@dront/components/Timeline/Timeline.types';

const TimelineDisabled = () => {
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

  return <Timeline data={data} />;
};

export default TimelineDisabled;
