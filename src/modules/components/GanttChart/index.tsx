import { DocView } from '@/@dront/components';
import Timeline from '@/@dront/components/GanttChart';
import GanttChartBasic from './GanttChartBasic';
import basicExampleCode from './GanttChartBasic?raw';
import GanttChartColor from './GanttChartColor';
import colorExampleCode from './GanttChartColor?raw';
import GanttChartDependency from './GanttChartDependency';
import dependencyExampleCode from './GanttChartDependency?raw';
import GanttChartProgress from './GanttChartProgress';
import progressExampleCode from './GanttChartProgress?raw';

const GanttChartModule = () => {
  return (
    <DocView
      contributors={['Rafli Rai Rizky']}
      overview="The Timeline component provides a visual representation of tasks or events arranged chronologically. It supports multiple display styles such as basic, progress tracking, color customization, and dependency mapping between tasks."
      sections={[
        {
          title: 'Basic',
          descriptions:
            'Displays a simple timeline with tasks arranged in chronological order. Ideal for showing basic event or project timelines without additional styling or dependencies.',
          example: <GanttChartBasic />,
          exampleCode: basicExampleCode
        },
        {
          title: 'Progress',
          descriptions:
            'Adds progress indicators to each task, allowing users to track completion levels visually. Useful for project management or milestone tracking.',
          example: <GanttChartProgress />,
          exampleCode: progressExampleCode
        },
        {
          title: 'Color',
          descriptions:
            'Demonstrates how to apply custom colors to tasks or milestones. Each task can be assigned a unique color for better differentiation or status indication.',
          example: <GanttChartColor />,
          exampleCode: colorExampleCode
        },
        {
          title: 'Dependency',
          descriptions:
            'Illustrates how tasks can be connected through dependencies, showing relationships and sequences between activities. Perfect for use cases like Gantt charts or workflow visualization.',
          example: <GanttChartDependency />,
          exampleCode: dependencyExampleCode
        }
      ]}
      propsDoc={{
        component: Timeline,
        propDefinitions: {
          data: {
            type: 'Task[]',
            description:
              'An array of task objects representing each timeline entry. Each task typically includes fields such as `id`, `name`, `start`, `end`, `type`, and optional metadata like color or progress.',
            required: true
          },
          title: {
            type: 'string',
            description:
              'Optional title displayed above the timeline. Useful for labeling the chart or providing context about the dataset.',
            required: false
          },
          height: {
            type: "'string' | 'number'",
            description:
              'Specifies the height of the timeline container. Accepts pixel or percentage values. Helps control the vertical layout of the timeline.',
            required: false,
            default: '400'
          },
          width: {
            type: "'string' | 'number'",
            description:
              'Specifies the width of the timeline container. Accepts pixel or percentage values to make the component responsive.',
            required: false,
            default: '100%'
          }
        }
      }}
    />
  );
};

export default GanttChartModule;
