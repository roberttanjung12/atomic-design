import { DocView } from '@/@dront/components';
import Chart from '@/@dront/components/Chart';

import ChartSunburst from './ChartSunburst';
import sunburstExampleCode from './ChartSunburst?raw';

const ChartModule = () => {
  return (
    <DocView
      contributors={['I Nyoman Arijaya Putra']}
      overview="The Sunburst Chart component is a hierarchical data visualization tool that displays nested data in a radial layout. It excels at showing relationships between parent and child categories, making it perfect for visualizing hierarchical structures, file systems, organizational charts, and other tree-like data structures while maintaining design system compatibility and responsive behavior."
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
          title: 'Basic Sunburst Chart',
          descriptions: `Sunburst charts are radial, hierarchical visualizations that show relationships between parent and 
child elements through concentric rings. Each ring represents a level in the hierarchy, with segments sized 
proportionally to their values. The innermost circle represents the root node, with hierarchy levels 
radiating outward. This makes them particularly effective at displaying multi-level hierarchical data where 
understanding both structure and proportions is important.`,
          example: <ChartSunburst />,
          exampleCode: sunburstExampleCode
        },
        {
          title: 'Use Cases',
          descriptions: `Sunburst charts are most effective in the following scenarios:
          
1. \`File System Visualization\`: Perfect for displaying directory structures
   - Disk space usage analysis
   - File type distribution
   - Folder hierarchy exploration
   - Storage allocation views

2. \`Organizational Structure\`: Ideal for showing hierarchical relationships
   - Company org charts
   - Department breakdowns
   - Project team structures
   - Resource allocation

3. \`Category Analysis\`: Excellent for nested categorization
   - Product hierarchies
   - Market segmentation
   - Taxonomic classification
   - Budget distributions

4. \`Hierarchical Data\`: Useful for any tree-structured data
   - Website sitemaps
   - Knowledge hierarchies
   - Population demographics
   - Nested classifications`
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
