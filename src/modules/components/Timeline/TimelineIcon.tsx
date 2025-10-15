import { Place, Start } from '@mui/icons-material';
import { Timeline } from '@/@dront/components';
import type { TimelineData } from '@/@dront/components/Timeline/Timeline.types';

const TimelineIcon = () => {
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

  return <Timeline data={data} />;
};

export default TimelineIcon;
