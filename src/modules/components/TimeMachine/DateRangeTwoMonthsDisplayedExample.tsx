import { useState } from 'react';
import TimeMachine from '@/@dront/components/TimeMachine';

const DateRangeTwoMonthsDisplayedExample = () => {
  const [date, setDate] = useState<[Date | null, Date | null]>([null, null]);

  return (
    <TimeMachine
      variant="date-range-two-months"
      date={date}
      onApply={date => setDate(date)}
      onClear={() => setDate([null, null])}
    />
  );
};

export default DateRangeTwoMonthsDisplayedExample;
