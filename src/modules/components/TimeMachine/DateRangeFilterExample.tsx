import TimeMachine from '@/@dront/components/TimeMachine';

const DateRangeFilterExample = () => {
  return <TimeMachine variant="date-range" showTime isFilter filter={{ startName: 'dr-start', endName: 'dr-end' }} />;
};

export default DateRangeFilterExample;
