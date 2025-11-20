import { DocView } from '@/@dront/components';
import Chart from '@/@dront/components/Chart';

import ChartBar from './ChartBar';
import barExampleCode from './ChartBar?raw';

const ChartModule = () => {
  return (
    <DocView
      contributors={['I Nyoman Arijaya Putra']}
      overview="The Bar Chart component is a fundamental data visualization tool that excels at comparing values across different categories. It provides an intuitive way to display discrete data points while maintaining design system compatibility and responsive behavior across different screen sizes."
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
          title: 'Basic Bar Chart',
          descriptions: `Bar charts are ideal for comparing values across different categories or groups. They excel at showing
relative differences between discrete items and are particularly effective when you need to compare quantities
side by side. Perfect for visualizing survey results, comparing sales across regions, or showing resource
distribution.`,
          example: <ChartBar />,
          exampleCode: barExampleCode
        },
        {
          title: 'Use Cases',
          descriptions: `Bar charts are most effective in the following scenarios:
          
1. \`Categorical Comparisons\`: Perfect for comparing values across different categories
   - Sales comparison by product category
   - Survey response distribution
   - Performance metrics by department
   - Resource allocation across projects

2. \`Ranking and Distribution\`: Ideal for showing relative sizes or importance
   - Market share by company
   - Employee headcount by department
   - Budget allocation by category
   - Customer satisfaction scores

3. \`Time-Based Analysis\`: Effective for showing discrete time period comparisons
   - Monthly revenue comparison
   - Yearly performance metrics
   - Quarterly sales figures
   - Weekly activity statistics

4. \`Benchmark Comparisons\`: Excellent for comparing actual vs target values
   - KPI achievements vs goals
   - Actual vs budgeted expenses
   - Performance vs industry standards`
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
