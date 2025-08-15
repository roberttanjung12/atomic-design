import { useState } from 'react';
import TimeMachine from '@/@dront/components/TimeMachine';

const TimeRangePickerExample = () => {
  const [date, setDate] = useState<[Date | null, Date | null]>([null, null]);

  return (
    <TimeMachine
      variant="time-range"
      date={date}
      onApply={date => setDate(date)}
      onClear={() => setDate([null, null])}
    />
  );
};

export default TimeRangePickerExample;
