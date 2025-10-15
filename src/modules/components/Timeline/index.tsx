import { DocView } from '@/@dront/components';
import TimelineBasic from './TimelineBasic';
import basicExampleCode from './TimelineBasic?raw';

const TimelineModule = () => {
  return (
    <DocView
      contributors={['Rafli Rai Rizky']}
      overview="example overview"
      sections={[
        {
          title: 'Basic',
          descriptions: 'example timeline basic',
          example: <TimelineBasic />,
          exampleCode: basicExampleCode
        }
      ]}
    />
  );
};

export default TimelineModule;
