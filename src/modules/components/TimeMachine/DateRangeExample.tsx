import { useState } from 'react';
import TimeMachine from '@/@dront/components/TimeMachine';

const DateRangeExample = () => {
  const [date, setDate] = useState<[Date | null, Date | null]>([null, null]);

  return (
    <TimeMachine
      variant="date-range"
      date={date}
      onApply={date => setDate(date)}
      onClear={() => setDate([null, null])}
      showTime
    />
  );
};

export default DateRangeExample;
