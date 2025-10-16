import { Place, Start } from '@mui/icons-material';
import { TimelineTree } from '@/@dront/components';
import type { TimelineData } from '@/@dront/components/TimelineTree/Timeline.types';

const TimelineTreeIcon = () => {
  const data: TimelineData[] = [
    {
      dotIcon: <Start />
    },
    {
      content: <div>Test 2</div>
    },
    {
      content: 'Test 3'
    },
    {
      dotIcon: <Place />
    }
  ];

  return <TimelineTree data={data} />;
};

export default TimelineTreeIcon;
