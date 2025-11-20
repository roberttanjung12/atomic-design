import { DocView } from '@/@dront/components';
import Chart from '@/@dront/components/Chart';

import ChartHeatmap from './ChartHeatmap';
import heatmapExampleCode from './ChartHeatmap?raw';

const ChartModule = () => {
  return (
    <DocView
      contributors={['I Nyoman Arijaya Putra']}
      overview="The Heatmap Chart component is a sophisticated visualization tool that represents data through color intensity variations in a two-dimensional grid. It excels at revealing patterns, correlations, and anomalies in complex datasets while maintaining design system compatibility and responsive behavior across different screen sizes."
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
          title: 'Basic Heatmap Chart',
          descriptions: `Heatmap charts are powerful visualizations for displaying data density and patterns across two categorical 
dimensions. Each cell's color intensity represents a value, making it easy to spot trends and outliers. 
They're ideal for displaying time-based patterns, correlation matrices, or any data where you need to show 
relationships between two categorical variables. The color gradient provides an intuitive way to interpret 
relative values across your dataset.`,
          example: <ChartHeatmap />,
          exampleCode: heatmapExampleCode
        },
        {
          title: 'Use Cases',
          descriptions: `Heatmap charts are most effective in the following scenarios:
          
1. \`Time-Based Patterns\`: Perfect for analyzing temporal patterns and trends
   - User activity by hour and day
   - Website traffic patterns
   - System load monitoring
   - Service usage analysis

2. \`Correlation Analysis\`: Ideal for showing relationships between variables
   - Performance correlation matrices
   - Customer behavior analysis
   - Feature interaction patterns
   - Data dependencies visualization

3. \`Density Mapping\`: Excellent for showing concentration and distribution
   - Geographic data distribution
   - Resource utilization maps
   - Population density visualization
   - Event frequency analysis

4. \`Performance Monitoring\`: Useful for tracking metrics across dimensions
   - Server performance monitoring
   - System health indicators
   - Service level agreements
   - Resource consumption patterns`
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
