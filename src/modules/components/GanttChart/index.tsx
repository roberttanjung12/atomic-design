// GanttChartModule.tsx

import { DocView } from '@/@dront/components';
import Timeline from '@/@dront/components/GanttChart';
import GanttChartBasic from './GanttChartBasic';
import basicExampleCode from './GanttChartBasic?raw';
import GanttChartColor from './GanttChartColor';
import colorExampleCode from './GanttChartColor?raw';
import GanttChartDependency from './GanttChartDependency';
import dependencyExampleCode from './GanttChartDependency?raw';
import GanttChartNested from './GanttChartNested';
import nestedExampleCode from './GanttChartNested?raw';
import GanttChartOnClick from './GanttChartOnClick';
import onClickGanttChart from './GanttChartOnClick?raw';
import GanttChartProgress from './GanttChartProgress';
import progressExampleCode from './GanttChartProgress?raw';

const GanttChartModule = () => {
  return (
    <DocView
      contributors={['Rafli Rai Rizky']}
      overview="The Gantt Chart component is a powerful visualization tool, designed to display project schedules, task dependencies, and progress over time. It supports hierarchical data structure, custom colors, and interactive expand/collapse functionality for nested tasks."
      sections={[
        {
          title: 'Basic',
          descriptions:
            'A straightforward implementation of the Gantt chart showing the start and end dates of simple tasks.',
          example: <GanttChartBasic />,
          exampleCode: basicExampleCode
        },
        {
          title: 'Progress',
          descriptions:
            'Demonstrates how to display the completion status of each task using the `progress` property, visualized as a colored overlay on the task bar.',
          example: <GanttChartProgress />,
          exampleCode: progressExampleCode
        },
        {
          title: 'Color',
          descriptions:
            'Shows how to customize the visual appearance of task bars and their progress indicators using the `color` property for fine-grained control.',
          example: <GanttChartColor />,
          exampleCode: colorExampleCode
        },
        {
          title: 'Dependency',
          descriptions:
            'Illustrates linking tasks together using the `dependencies` property, represented by dashed arrows indicating flow and required predecessors.',
          example: <GanttChartDependency />,
          exampleCode: dependencyExampleCode
        },
        {
          title: 'On Item Click',
          descriptions:
            'Enables interaction by defining a function via the `onItemClick` prop, which is triggered when individual task bars (excluding expandable groups) are clicked.',
          example: <GanttChartOnClick />,
          exampleCode: onClickGanttChart
        },
        {
          title: 'Nested',
          descriptions:
            'Shows hierarchical task structure using the `children` property. Group tasks can be interactively expanded or collapsed by clicking their name on the Y-axis.',
          example: <GanttChartNested />,
          exampleCode: nestedExampleCode
        }
      ]}
      propsDoc={{
        component: Timeline,
        propDefinitions: {
          data: {
            type: 'Task[]',
            description:
              'The array of primary task objects defining the project timeline. Supports nested tasks via the `children` property.',
            required: true
          },
          title: {
            type: 'string',
            description: 'The title displayed at the top of the Gantt chart.',
            required: false
          },
          height: {
            type: "'string' | 'number'",
            description: 'The height of the chart container.',
            required: false,
            default: '400'
          },
          width: {
            type: "'string' | 'number'",
            description: 'The width of the chart container.',
            required: false,
            default: '100%'
          },
          onItemClick: {
            type: '(task: Task) => void',
            description:
              'Callback function triggered when a non-expandable task bar or label is clicked. Receives the clicked `Task` object as an argument.',
            required: false
          }
        }
      }}
    />
  );
};

export default GanttChartModule;
