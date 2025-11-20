import { DocView } from '@/@dront/components';
import Chart from '@/@dront/components/Chart';

import ChartDonut from './ChartDonut';
import donutExampleCode from './ChartDonut?raw';

const ChartModule = () => {
  return (
    <DocView
      contributors={['I Nyoman Arijaya Putra']}
      overview="The Donut Chart component is a circular statistical visualization tool that excels at displaying proportional relationships within a dataset. Similar to a pie chart but with a hollow center, it provides enhanced readability and design flexibility while maintaining design system compatibility and responsive behavior across different screen sizes."
      dependencies={{
        echarts: {
          version: '^6.0.0',
          description: 'Core charting library used for rendering visualizations.'
        },
        'echarts-for-react': {
          version: '^3.0.2',
          description: 'React wrapper for ECharts library providing component-based integration.'
        }
      }}
      sections={[
        {
          title: 'Basic Donut Chart',
          descriptions: `Donut charts are specialized visualizations that excel at showing proportional relationships within a dataset.
They are perfect for displaying part-to-whole relationships while maintaining a clear visual hierarchy. The hollow
center can be utilized to display total values or additional information, making them more versatile than traditional
pie charts. Common uses include market share analysis, budget allocation, or demographic breakdowns.`,
          example: <ChartDonut />,
          exampleCode: donutExampleCode
        },
        {
          title: 'Use Cases',
          descriptions: `Donut charts are most effective in the following scenarios:
          
1. \`Part-to-Whole Analysis\`: Perfect for showing how parts contribute to a total
   - Market share distribution
   - Budget allocation breakdown
   - Resource utilization
   - Revenue sources analysis

2. \`Category Distribution\`: Ideal for showing proportional division among categories
   - Customer segments breakdown
   - Product mix composition
   - Demographic distribution
   - Vote or survey results

3. \`Portfolio Composition\`: Excellent for financial and investment contexts
   - Investment portfolio allocation
   - Asset distribution
   - Risk exposure breakdown
   - Fund composition

4. \`Progress and Completion\`: Useful for showing completion rates and progress
   - Project completion status
   - Goal achievement metrics
   - Task completion rates
   - Milestone progress tracking`
        }
      ]}
      propsDoc={{
        component: Chart,
        propDefinitions: {
          type: {
            type: "'area' | 'bar' | 'line' | 'donut' | 'sunburst' | 'radar' | 'sankey' | 'heatmap'",
            description: 'Specifies the chart visualization type'
          },
          data: {
            type: 'object | array',
            description: 'The data to be visualized, structure varies by chart type'
          },
          title: {
            type: 'string',
            description: 'Optional title displayed at the top of the chart'
          },
          color: {
            type: "'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'error' | string",
            description:
              'Color for gradient-based charts (used by heatmap). Can be a theme color key or a custom color code'
          },
          height: {
            type: 'string | number',
            default: '400px',
            description: 'Controls chart height'
          },
          width: {
            type: 'string | number',
            default: '100%',
            description: 'Controls chart width'
          }
        }
      }}
    />
  );
};

export default ChartModule;
