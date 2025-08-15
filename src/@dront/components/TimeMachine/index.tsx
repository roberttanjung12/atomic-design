import { id } from 'date-fns/locale';
import { registerLocale } from 'react-datepicker';
import { useTranslation } from 'react-i18next';
import TimeMachineDatePicker, { type TimeMachineDatePickerProps } from './DatePicker';
import TimeMachineDateRange, { type TimeMachineDateRangeProps } from './DateRange';
import TimeMachineDateRangeTwoMonths, { type TimeMachineDateRangeTwoMonthsProps } from './DateRangeTwoMonths';
import TimeMachineQuarterPicker, { type TimeMachineQuarterPickerProps } from './QuarterPicker';
import TimeMachineTimeRange, { type TimeMachineTimeRangeProps } from './TimeRange';
import TimeMachineUltimate, { type TimeMachineUltimateProps } from './UltimateDatepicker';

import 'moment/locale/id';
import 'react-datepicker/dist/react-datepicker.css';

registerLocale('id', id);

type TimeMachineProps =
  | TimeMachineDatePickerProps
  | TimeMachineDateRangeProps
  | TimeMachineDateRangeTwoMonthsProps
  | TimeMachineTimeRangeProps
  | TimeMachineQuarterPickerProps
  | TimeMachineUltimateProps;

/**
 * Time Machine - Ultimate date picker for your website
 *
 * @component
 *
 *
 * @example
 *
 * const FeatureTimeMachineStandard = () => {
 * const [date, setDate] = useState<Date | null>(null);
 *
 * return (
 *  <TimeMachine date={date} variant="date-picker" onApply={date => setDate(date)} onClear={() => setDate(null)} />
 * );
 * };
 */

const TimeMachine = (props: TimeMachineProps) => {
  const { '1': language } = useTranslation();

  const locale = (['id', 'en'].includes(language.language) ? language.language : 'en') as 'en' | 'id';

  if (props.variant === 'date-range') {
    return <TimeMachineDateRange locale={locale} {...props} />;
  }

  if (props.variant === 'date-range-two-months') {
    return <TimeMachineDateRangeTwoMonths locale={locale} {...props} />;
  }

  if (props.variant === 'time-range') {
    return <TimeMachineTimeRange locale={locale} {...props} />;
  }

  if (props.variant === 'quarter-picker') {
    return <TimeMachineQuarterPicker locale={locale} {...props} />;
  }

  if (props.variant === 'ultimate') {
    return <TimeMachineUltimate locale={locale} {...props} />;
  }

  return <TimeMachineDatePicker locale={locale} {...props} />;
};

export default TimeMachine;
