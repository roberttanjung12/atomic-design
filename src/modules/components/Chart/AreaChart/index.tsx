import { DocView } from '@/@dront/components';
import Chart from '@/@dront/components/Chart';

import ChartArea from './ChartArea';
import areaExampleCode from './ChartArea?raw';

const ChartModule = () => {
  return (
    <DocView
      contributors={['I Nyoman Arijaya Putra']}
      overview="The Area Chart component is a powerful data visualization tool that excels at showing cumulative totals and proportions over time. It helps transform complex time-series data into meaningful visual representations while maintaining design system compatibility and responsive behavior across different screen sizes."
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
          title: 'Basic Area Chart',
          descriptions: `Area charts are excellent for visualizing cumulative totals and proportions over time. By filling the
area beneath the line, they emphasize volume and help visualize the magnitude of trends. They're particularly
effective for showing how multiple data series contribute to an overall total, making them ideal for
displaying data with stacked or layered components. Area charts enhance the perception of continuity in data
and are perfect for representing time series data, market share evolution, or cumulative growth patterns.`,
          example: <ChartArea />,
          exampleCode: areaExampleCode
        },
        {
          title: 'Use Case',
          descriptions: `Area charts are most effective in the following scenarios:
          
1. \`Time Series Data\`: Perfect for showing how values change over continuous time periods
   - Stock market prices and trading volumes
   - Website traffic patterns over time
   - Sales trends across different periods

2. \`Cumulative Values\`: Ideal for displaying accumulating totals
   - Project progress and completion rates
   - Budget spending over time
   - Resource consumption patterns

3. \`Part-to-Whole Relationships\`: Excellent for showing how individual components contribute to a total
   - Market share distribution over time
   - Team contribution to overall project completion
   - Revenue breakdown by product category

4. \`Multiple Data Series\`: Effective for comparing multiple related datasets
   - Performance metrics across different teams
   - Sales comparison between multiple products
   - Resource utilization across different projects`
        },
        {
          title: 'Best Practices',
          descriptions: `To create effective area charts, consider these best practices:

1. \`Data Organization\`:
   - Sort your time-based data chronologically
   - Use consistent time intervals for better readability
   - Limit the number of data series (3-5 maximum) to avoid visual clutter

2. \`Visual Design\`:
   - Use semi-transparent fills to show overlapping areas
   - Choose contrasting colors for different data series
   - Consider using gradients to add depth to single series
   - Ensure the y-axis starts at zero for accurate visual representation

3. \`Interactivity\`:
   - Implement hover tooltips for precise value reading
   - Add legend toggles to show/hide specific series
   - Consider zoom capabilities for dense datasets

4. \`Accessibility\`:
   - Include alternative text descriptions
   - Use colorblind-friendly palettes
   - Provide data table alternatives when necessary`
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
