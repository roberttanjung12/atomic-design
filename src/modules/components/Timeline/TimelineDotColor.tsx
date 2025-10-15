import { Timeline } from '@/@dront/components';
import type { OptionsDot, TimelineData } from '@/@dront/components/Timeline/Timeline.types';

const TimelineDotColor = () => {
  const data: TimelineData[] = [
    {
      content: 'Test 1'
    },
    {
      content: <div>Test 2</div>
    },
    {
      content: 'Test 3'
    },
    {
      content: 'Test 4'
    }
  ];

  const dotOptions: OptionsDot = {
    color: 'primary'
  };

  return <Timeline data={data} dot={dotOptions} />;
};

export default TimelineDotColor;
