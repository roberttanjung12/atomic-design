import { TimelineTree } from '@/@dront/components';
import type { TimelineData } from '@/@dront/components/TimelineTree/Timeline.types';

const TimelineTreecontent = () => {
  const data: TimelineData[] = [
    {
      title: 'Test 1',
      content: '02:00 AM'
    },
    {
      title: <div>Test 2</div>,
      content: '02:30 PM'
    },
    {
      title: 'Test 3',
      content: <div>09:11 PM</div>
    },
    {
      title: 'Test 4',
      content: '11:21 AM'
    }
  ];

  return <TimelineTree data={data} />;
};

export default TimelineTreecontent;
