import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import { CodeViewer, Section, TextHighlighter } from '@/@dront/components';

import ChartBar from './ChartBar';
import barExampleCode from './ChartBar?raw';
import ChartDonut from './ChartDonut';
import donutExampleCode from './ChartDonut?raw';
import ChartLine from './ChartLine';
import lineExampleCode from './ChartLine?raw';

const ChartModule = () => {
  return (
    <Stack spacing={4}>
      <TextHighlighter text="The `Chart` component is a powerful data visualization tool that helps transform complex data into meaningful visual representations. It provides a consistent interface for creating various types of charts while maintaining design system compatibility and responsive behavior across different screen sizes." />

      {/* Bar Chart */}
      <Section title="Bar Chart">
        <Typography mb={2}>
          Bar charts are ideal for comparing values across different categories or groups. They excel at showing
          relative differences between discrete items and are particularly effective when you need to compare quantities
          side by side. Perfect for visualizing survey results, comparing sales across regions, or showing resource
          distribution.
        </Typography>
        <Typography component="div" sx={{ mb: 2 }}>
          <strong>Data Structure:</strong>
          <pre>
            {`{
    xAxis: string[];
    series: number[];
}`}
          </pre>
        </Typography>
        <CodeViewer code={barExampleCode}>
          <ChartBar />
        </CodeViewer>
      </Section>

      {/* Line Chart */}
      <Section title="Line Chart">
        <Typography mb={2}>
          Line charts excel at visualizing continuous data and tracking changes over time. They are particularly
          effective for showing trends, patterns, and relationships between multiple data series. Ideal for performance
          tracking, market analysis, or any time-based data visualization.
        </Typography>
        <Typography component="div" sx={{ mb: 2 }}>
          <strong>Data Structure:</strong>
          <pre>
            {`{
    xAxis: string[];
    series: Array<{
        name: string;
        data: number[];
    }>;
}`}
          </pre>
        </Typography>
        <CodeViewer code={lineExampleCode}>
          <ChartLine />
        </CodeViewer>
      </Section>

      {/* Donut Chart */}
      <Section title="Donut Chart">
        <Typography mb={2}>
          Donut charts are specialized visualizations that excel at showing proportional relationships within a dataset.
          They are perfect for displaying part-to-whole relationships while maintaining a clear visual hierarchy. Common
          uses include market share analysis, budget allocation, or demographic breakdowns.
        </Typography>
        <Typography component="div" sx={{ mb: 2 }}>
          <strong>Data Structure:</strong>
          <pre>
            {`Array
<{
    name: string;
    value: number;
}>`}
          </pre>
        </Typography>
        <CodeViewer code={donutExampleCode}>
          <ChartDonut />
        </CodeViewer>
      </Section>

      {/* Props Documentation */}
      <Section title="Common Props">
        <Typography variant="subtitle1" gutterBottom>
          All chart types share these fundamental properties for consistency and ease of use:
        </Typography>
        <ul>
          <li>
            <Typography>
              <code>type</code> (string) - Specifies the chart visualization type
            </Typography>
          </li>
          <li>
            <Typography>
              <code>data</code> (object | array) - The data to be visualized, structure varies by chart type
            </Typography>
          </li>
          <li>
            <Typography>
              <code>title</code> (string) - Optional title displayed at the top of the chart
            </Typography>
          </li>
          <li>
            <Typography>
              <code>height</code> (string | number) - Controls chart height (default: '400px')
            </Typography>
          </li>
          <li>
            <Typography>
              <code>width</code> (string | number) - Controls chart width (default: '100%')
            </Typography>
          </li>
        </ul>
      </Section>
    </Stack>
  );
};

export default ChartModule;
