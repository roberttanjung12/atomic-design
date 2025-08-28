'use client';

import { Box } from '@mui/material';
import BarChart, { type BarChartProps } from './BarChart';
import DonutChart, { type DonutChartProps } from './DonutChart';
import LineChart, { type LineChartProps } from './LineChart';

export type ChartType = 'bar' | 'line' | 'donut';

export interface ChartProps {
  type: ChartType;
  data: BarChartProps['data'] | LineChartProps['data'] | DonutChartProps['data'];
  title?: string;
  height?: string | number;
  width?: string | number;
}

const Chart = ({ type, data, title, height, width }: ChartProps) => {
  const renderChart = () => {
    switch (type) {
      case 'bar':
        return <BarChart data={data as BarChartProps['data']} title={title} height={height} width={width} />;
      case 'line':
        return <LineChart data={data as LineChartProps['data']} title={title} height={height} width={width} />;
      case 'donut':
        return <DonutChart data={data as DonutChartProps['data']} title={title} height={height} width={width} />;
      default:
        return null;
    }
  };

  return <Box>{renderChart()}</Box>;
};

export default Chart;

export { BarChart, LineChart, DonutChart };
