import TimeMachine from '@/@dront/components/TimeMachine';

const UltimatePickerFilterExample = () => {
  return (
    <TimeMachine
      variant="ultimate"
      showTime
      isFilter
      filter={{ modeName: 'up-mode', startName: 'up-start', endName: 'up-end' }}
    />
  );
};

export default UltimatePickerFilterExample;
