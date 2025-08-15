import { useState } from 'react';
import TimeMachine from '@/@dront/components/TimeMachine';

const QuarterPickerExample = () => {
  const [date, setDate] = useState<[Date | null, Date | null]>([null, null]);

  return (
    <TimeMachine
      variant="quarter-picker"
      date={date}
      onApply={date => setDate(date)}
      onClear={() => setDate([null, null])}
    />
  );
};

export default QuarterPickerExample;
