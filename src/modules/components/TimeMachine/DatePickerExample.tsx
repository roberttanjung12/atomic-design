import { useState } from 'react';
import TimeMachine from '@/@dront/components/TimeMachine';

const DatePickerExample = () => {
  const [date, setDate] = useState<Date | null>(null);

  return (
    <TimeMachine date={date} variant="date-picker" onApply={date => setDate(date)} onClear={() => setDate(null)} />
  );
};

export default DatePickerExample;
