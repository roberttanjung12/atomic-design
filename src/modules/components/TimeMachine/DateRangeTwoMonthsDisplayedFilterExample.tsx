import TimeMachine from '@/@dront/components/TimeMachine';

const DateRangeTwoMonthsDisplayedFilterExample = () => {
  return (
    <TimeMachine variant="date-range-two-months" isFilter filter={{ startName: 'drtm-start', endName: 'drtm-end' }} />
  );
};

export default DateRangeTwoMonthsDisplayedFilterExample;
