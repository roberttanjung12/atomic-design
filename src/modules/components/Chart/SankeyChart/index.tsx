import { DocView } from '@/@dront/components';
import Chart from '@/@dront/components/Chart';

import ChartSankey from './ChartSankey';
import sankeyExampleCode from './ChartSankey?raw';

const ChartModule = () => {
  return (
    <DocView
      contributors={['I Nyoman Arijaya Putra']}
      overview="The Sankey Chart component is a powerful flow diagram visualization tool that excels at displaying the movement of resources, energy, or values between different stages or nodes. It helps in understanding complex systems, process flows, and resource distributions while maintaining design system compatibility and responsive behavior across different screen sizes."
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
          title: 'Basic Sankey Chart',
          descriptions: `Sankey charts are specialized diagrams that visualize the flow of resources, information, or values 
through a system. The width of the flow lines represents the quantity or magnitude of the flow between nodes. 
This makes them particularly effective at showing both the direction and volume of flow between different 
stages or entities in a process. Perfect for visualizing user journeys, resource allocation, energy transfer, 
or any system with inputs and outputs.`,
          example: <ChartSankey />,
          exampleCode: sankeyExampleCode
        },
        {
          title: 'Use Cases',
          descriptions: `Sankey charts are most effective in the following scenarios:
          
1. \`User Flow Analysis\`: Perfect for visualizing user journeys and navigation paths
   - Website navigation flows
   - Conversion funnels
   - User acquisition paths
   - Customer journey mapping

2. \`Resource Flow Tracking\`: Ideal for showing movement of resources
   - Budget allocation flows
   - Material processing
   - Energy distribution
   - Supply chain mapping

3. \`Process Analysis\`: Excellent for visualizing complex processes
   - Manufacturing workflows
   - Data transformation pipelines
   - Business process flows
   - Decision tree outcomes

4. \`Transfer Mapping\`: Useful for showing movement between states
   - State transitions
   - Value transfers
   - System interactions
   - Migration patterns`
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
