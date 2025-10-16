import { Place, Start } from '@mui/icons-material';
import { TimelineTree } from '@/@dront/components';
import type { TimelineData } from '@/@dront/components/TimelineTree/Timeline.types';

const TimelineTreeIcon = () => {
  const data: TimelineData[] = [
    {
      title: '',
      dotIcon: <Start />
    },
    {
      title: <div>Test 2</div>
    },
    {
      title: 'Test 3'
    },
    {
      title: '',
      dotIcon: <Place />
    }
  ];

  return <TimelineTree data={data} />;
};

export default TimelineTreeIcon;
