import { TimelineTree } from '@/@dront/components';
import type { OptionsDot, TimelineData } from '@/@dront/components/TimelineTree/Timeline.types';

const TimelineTreeDotOutlined = () => {
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

  const dotOptions: OptionsDot = {
    outlined: true
  };

  return <TimelineTree data={data} dot={dotOptions} />;
};

export default TimelineTreeDotOutlined;
