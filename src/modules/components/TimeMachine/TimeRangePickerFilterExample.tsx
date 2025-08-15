import TimeMachine from '@/@dront/components/TimeMachine';

const TimeRangePickerFilterExample = () => {
  return <TimeMachine variant="time-range" isFilter filter={{ startName: 'dp-start-time', endName: 'dp-end-time' }} />;
};

export default TimeRangePickerFilterExample;
