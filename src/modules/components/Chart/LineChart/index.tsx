import { DocView } from '@/@dront/components';
import Chart from '@/@dront/components/Chart';

import ChartLine from './ChartLine';
import lineExampleCode from './ChartLine?raw';

const ChartModule = () => {
  return (
    <DocView
      contributors={['I Nyoman Arijaya Putra']}
      overview="The Line Chart component is a fundamental data visualization tool that excels at showing trends and patterns over continuous intervals. It is particularly effective at demonstrating how values change over time, making it ideal for temporal data analysis while maintaining design system compatibility and responsive behavior across different screen sizes."
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
          title: 'Basic Line Chart',
          descriptions: `Line charts excel at visualizing continuous data and tracking changes over time. They are particularly
effective for showing trends, patterns, and relationships between multiple data series. The connected points
create a clear visual path that makes it easy to follow data progression and identify trends, peaks, and
valleys in your data. Ideal for performance tracking, market analysis, or any time-based data visualization.`,
          example: <ChartLine />,
          exampleCode: lineExampleCode
        },
        {
          title: 'Use Cases',
          descriptions: `Line charts are most effective in the following scenarios:
          
1. \`Trend Analysis\`: Perfect for visualizing data trends over time
   - Stock price movements
   - Temperature variations
   - Sales performance tracking
   - User growth metrics

2. \`Comparative Analysis\`: Ideal for comparing multiple series over time
   - Performance benchmarking
   - Market share evolution
   - Budget vs. actual spending
   - Cross-period comparisons

3. \`Continuous Data\`: Excellent for data with continuous progression
   - Sensor readings
   - Financial metrics
   - Traffic patterns
   - Resource consumption

4. \`Forecasting\`: Useful for projecting trends and patterns
   - Revenue projections
   - Growth predictions
   - Trend extrapolation
   - Seasonal pattern analysis`
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
