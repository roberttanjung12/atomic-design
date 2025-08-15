import { useState } from 'react';
import TimeMachine from '@/@dront/components/TimeMachine';
import type { DateValueWithMode } from '@/@dront/components/TimeMachine/UltimateDatepicker/main/types/date-value-with-mode';

const UltimatePickerExample = () => {
  const [date, setDate] = useState<DateValueWithMode>({
    mode: 'custom-range',
    value: [null, null]
  });

  return (
    <TimeMachine
      variant="ultimate"
      date={date}
      onApply={date => setDate(date)}
      onClear={() => {
        setDate({
          mode: 'custom-range',
          value: [null, null]
        });
      }}
      showTime
    />
  );
};

export default UltimatePickerExample;
