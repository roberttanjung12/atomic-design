import { TimelineTree } from '@/@dront/components';
import type { OptionsDot, TimelineData } from '@/@dront/components/TimelineTree/Timeline.types';

const TimelineTreeDotOutlined = () => {
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
    outlined: true
  };

  return <TimelineTree data={data} dot={dotOptions} />;
};

export default TimelineTreeDotOutlined;
