'use client';

import { Box } from '@mui/material';
import AreaChart, { type AreaChartProps } from './AreaChart';
import BarChart, { type BarChartProps } from './BarChart';
import DonutChart, { type DonutChartProps } from './DonutChart';
import GanttChart, { type GanttChartProps } from './GanttChart';
import HeatmapChart, { type HeatmapChartProps } from './HeatmapChart';
import LineChart, { type LineChartProps } from './LineChart';
import RadarChart, { type RadarChartProps } from './RadarChart';
import SankeyChart, { type SankeyChartProps } from './SankeyChart';
import SunburstChart, { type SunburstChartProps } from './SunburstChart';

/**
 * Supported chart types in the Chart component
 * @typedef {('area'|'bar'|'line'|'donut'|'sunburst'|'radar'|'sankey'|'heatmap'|'gantt')} ChartType
 */
export type ChartType = 'area' | 'bar' | 'line' | 'donut' | 'sunburst' | 'radar' | 'sankey' | 'heatmap' | 'gantt';

/**
 * Props for the unified Chart component
 *
 * @interface ChartProps
 * @property {ChartType} type - The type of chart to render ('bar', 'line', 'donut', 'sunburst', 'radar', or 'sankey')
 * @property {object} data - The data structure for the selected chart type
 * @property {string} [title] - Optional title for the chart
 * @property {string|number} [height] - Optional height for the chart
 * @property {string|number} [width] - Optional width for the chart
 */
export interface ChartProps {
  type: ChartType;
  data:
    | AreaChartProps['data']
    | BarChartProps['data']
    | LineChartProps['data']
    | DonutChartProps['data']
    | SunburstChartProps['data']
    | RadarChartProps['data']
    | SankeyChartProps['data']
    | HeatmapChartProps['data']
    | GanttChartProps['data'];
  title?: string;
  height?: string | number;
  width?: string | number;
  color?: string;
}

/**
 * Unified Chart component that renders different chart types based on the 'type' prop.
 * This component serves as a centralized entry point for all chart visualizations,
 * delegating rendering to specialized chart components based on the specified type.
 *
 * @component
 * @param {ChartProps} props - The component props
 * @param {ChartType} props.type - The type of chart to render
 * @param {object} props.data - The data structure for the selected chart type
 * @param {string} [props.title] - Optional chart title
 * @param {string|number} [props.height] - Optional chart height
 * @param {string|number} [props.width] - Optional chart width
 * @returns {JSX.Element} Rendered chart component of the specified type
 *
 * @example
 * // Bar chart example
 * const barData = {
 *   labels: ['Jan', 'Feb', 'Mar'],
 *   datasets: [
 *     { name: 'Sales', data: [30, 40, 35] },
 *     { name: 'Revenue', data: [50, 60, 55] }
 *   ]
 * };
 * return <Chart type="bar" data={barData} title="Monthly Performance" />;
 */
const Chart = ({ type, data, title, height, width, color }: ChartProps) => {
  /**
   * Renders the appropriate chart component based on the 'type' prop
   * @returns {JSX.Element|null} The chart component or null if type is invalid
   */
  const renderChart = () => {
    switch (type) {
      case 'area':
        return <AreaChart data={data as AreaChartProps['data']} title={title} height={height} width={width} />;
      case 'bar':
        return <BarChart data={data as BarChartProps['data']} title={title} height={height} width={width} />;
      case 'line':
        return <LineChart data={data as LineChartProps['data']} title={title} height={height} width={width} />;
      case 'donut':
        return <DonutChart data={data as DonutChartProps['data']} title={title} height={height} width={width} />;
      case 'sunburst':
        return <SunburstChart data={data as SunburstChartProps['data']} title={title} height={height} width={width} />;
      case 'radar':
        return <RadarChart data={data as RadarChartProps['data']} title={title} height={height} width={width} />;
      case 'sankey':
        return <SankeyChart data={data as SankeyChartProps['data']} title={title} height={height} width={width} />;
      case 'heatmap':
        return (
          <HeatmapChart
            data={data as HeatmapChartProps['data']}
            color={color}
            title={title}
            height={height}
            width={width}
          />
        );
      case 'gantt':
        return <GanttChart data={data as GanttChartProps['data']} title={title} height={height} width={width} />;
      default:
        return null;
    }
  };

  return <Box>{renderChart()}</Box>;
};

export default Chart;

/**
 * Export individual chart components for direct use when needed
 */
export { AreaChart, BarChart, LineChart, DonutChart, SunburstChart, RadarChart, SankeyChart, HeatmapChart, GanttChart };
