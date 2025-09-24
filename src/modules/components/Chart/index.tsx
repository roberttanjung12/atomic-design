import { DocView } from '@/@dront/components';
import Chart from '@/@dront/components/Chart';

import ChartBar from './ChartBar';
import barExampleCode from './ChartBar?raw';
import ChartDonut from './ChartDonut';
import donutExampleCode from './ChartDonut?raw';
import ChartLine from './ChartLine';
import lineExampleCode from './ChartLine?raw';
import ChartRadar from './ChartRadar';
import radarExampleCode from './ChartRadar?raw';
import ChartSankey from './ChartSankey';
import sankeyExampleCode from './ChartSankey?raw';
import ChartSunburst from './ChartSunburst';
import sunburstExampleCode from './ChartSunburst?raw';

const ChartModule = () => {
  return (
    <DocView
      contributors={['I Nyoman Arijaya Putra']}
      overview="The `Chart` component is a powerful data visualization tool that helps transform complex data into meaningful visual representations. It provides a consistent interface for creating various types of charts while maintaining design system compatibility and responsive behavior across different screen sizes."
      sections={[
        {
          title: 'Bar Chart',
          descriptions: `Bar charts are ideal for comparing values across different categories or groups. They excel at showing
relative differences between discrete items and are particularly effective when you need to compare quantities
side by side. Perfect for visualizing survey results, comparing sales across regions, or showing resource
distribution.`,
          example: <ChartBar />,
          exampleCode: barExampleCode
        },
        {
          title: 'Line Chart',
          descriptions: `Line charts excel at visualizing continuous data and tracking changes over time. They are particularly
effective for showing trends, patterns, and relationships between multiple data series. Ideal for performance
tracking, market analysis, or any time-based data visualization.`,
          example: <ChartLine />,
          exampleCode: lineExampleCode
        },
        {
          title: 'Donut Chart',
          descriptions: `Donut charts are specialized visualizations that excel at showing proportional relationships within a dataset.
They are perfect for displaying part-to-whole relationships while maintaining a clear visual hierarchy. Common
uses include market share analysis, budget allocation, or demographic breakdowns.`,
          example: <ChartDonut />,
          exampleCode: donutExampleCode
        },
        {
          title: 'Sunburst Chart',
          descriptions: `Sunburst charts display hierarchical data as a series of concentric rings. Each ring corresponds to a level 
in the hierarchy, with segments sized according to their values. They excel at showing part-to-whole relationships 
at multiple levels simultaneously. Ideal for visualizing organizational structures, file system storage, or nested 
categorical data.`,
          example: <ChartSunburst />,
          exampleCode: sunburstExampleCode
        },
        {
          title: 'Radar Chart',
          descriptions: `Radar charts (also known as spider or web charts) display multivariate data as a two-dimensional chart 
with three or more quantitative variables. Each variable is represented on its own axis, with all axes arranged 
radially. Excellent for performance comparisons across multiple dimensions or comparing features of different products.`,
          example: <ChartRadar />,
          exampleCode: radarExampleCode
        },
        {
          title: 'Sankey Chart',
          descriptions: `Sankey charts visualize flows and their quantities in a system. The width of the flow represents its 
magnitude, making it easy to identify dominant contributors. Perfect for mapping energy transfers, website navigation 
paths, or material flows through a process.`,
          example: <ChartSankey />,
          exampleCode: sankeyExampleCode
        }
      ]}
      propsDoc={{
        component: Chart,
        propDefinitions: {
          type: {
            type: "'bar' | 'line' | 'donut' | 'sunburst' | 'radar' | 'sankey'",
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
