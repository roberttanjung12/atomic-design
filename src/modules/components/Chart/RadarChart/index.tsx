import { DocView } from '@/@dront/components';
import Chart from '@/@dront/components/Chart';

import ChartRadar from './ChartRadar';
import radarExampleCode from './ChartRadar?raw';

const ChartModule = () => {
  return (
    <DocView
      contributors={['I Nyoman Arijaya Putra']}
      overview="The Radar Chart component (also known as Spider or Web chart) is a powerful visualization tool that excels at displaying multivariate data across multiple variables. It enables effective comparison of multiple metrics simultaneously, making it ideal for performance analysis, skill assessment, and feature comparison while maintaining design system compatibility and responsive behavior across different screen sizes."
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
          title: 'Basic Radar Chart',
          descriptions: `Radar charts are specialized visualizations that display multivariate data across multiple axes arranged 
radially. Each variable is represented on its own axis, with all axes connecting at the center point. This 
arrangement allows for easy comparison of aggregate values and identification of patterns across multiple 
metrics simultaneously. Perfect for comparing features, evaluating performance across multiple dimensions, 
or analyzing balanced scorecards.`,
          example: <ChartRadar />,
          exampleCode: radarExampleCode
        },
        {
          title: 'Use Cases',
          descriptions: `Radar charts are most effective in the following scenarios:
          
1. \`Performance Analysis\`: Perfect for multi-dimensional performance evaluation
   - Employee skill assessment
   - Department performance metrics
   - Project success criteria
   - Team capabilities evaluation

2. \`Product Comparison\`: Ideal for comparing features across multiple items
   - Product feature comparison
   - Competitive analysis
   - Service level evaluation
   - Technology stack assessment

3. \`Resource Distribution\`: Excellent for showing allocation patterns
   - Budget distribution
   - Resource allocation
   - Effort distribution
   - Time investment analysis

4. \`Quality Assessment\`: Useful for evaluating multiple quality metrics
   - Service quality metrics
   - Product characteristics
   - Customer satisfaction factors
   - Performance indicators`
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
