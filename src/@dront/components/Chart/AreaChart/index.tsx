'use client';

import { Box, useTheme } from '@mui/material';
import { type EChartsOption } from 'echarts';
import ReactEcharts from 'echarts-for-react';

/**
 * Props for the AreaChart component
 *
 * @interface AreaChartProps
 * @property {object} data - The data configuration for the area chart
 * @property {string[]} data.xAxis - Array of labels for the X axis
 * @property {Array<{name: string, data: number[]}>} data.series - Array of data series to be plotted
 * @property {string} [title] - Optional title for the chart
 * @property {string|number} [height='400px'] - Height of the chart
 * @property {string|number} [width='100%'] - Width of the chart
 */
export interface AreaChartProps {
  data: {
    xAxis: string[];
    series: Array<{
      name: string;
      data: number[];
    }>;
  };
  title?: string;
  height?: string | number;
  width?: string | number;
}

/**
 * AreaChart component for visualizing data trends with filled areas below the line
 *
 * @component
 * @param {AreaChartProps} props - The component props
 * @returns {JSX.Element} Rendered area chart
 */
const AreaChart = ({ data, title, height = '400px', width = '100%' }: AreaChartProps) => {
  const theme = useTheme();

  const chartColors = [
    theme.palette.primary.main,
    theme.palette.secondary.main,
    theme.palette.success.main,
    theme.palette.info.main,
    theme.palette.warning.main,
    theme.palette.error.main
  ];

  /**
   * ECharts configuration options for the area chart
   */
  const option: EChartsOption = {
    title: {
      text: title,
      left: 'center',
      textStyle: {
        color: theme.palette.text.primary
      }
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: theme.palette.primary.main
        }
      }
    },
    legend: {
      data: data.series.map(item => item.name),
      bottom: 0,
      textStyle: {
        color: theme.palette.text.secondary
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '10%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: data.xAxis,
      axisLine: {
        lineStyle: {
          color: theme.palette.text.secondary
        }
      },
      axisLabel: {
        color: theme.palette.text.secondary
      }
    },
    yAxis: {
      type: 'value',
      axisLine: {
        lineStyle: {
          color: theme.palette.text.secondary
        }
      },
      axisLabel: {
        color: theme.palette.text.secondary
      },
      splitLine: {
        lineStyle: {
          color: theme.palette.divider
        }
      }
    },
    series: data.series.map((item, index) => ({
      name: item.name,
      type: 'line',
      stack: 'Total',
      smooth: true,
      data: item.data,
      areaStyle: {
        opacity: 0.5,
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: chartColors[index % chartColors.length]
            },
            {
              offset: 1,
              color: theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255, 255, 255, 0.2)'
            }
          ]
        }
      },
      lineStyle: {
        width: 2,
        color: chartColors[index % chartColors.length]
      },
      itemStyle: {
        color: chartColors[index % chartColors.length]
      }
    }))
  };

  return (
    <Box sx={{ width, height }}>
      <ReactEcharts option={option} style={{ height: '100%', width: '100%' }} />
    </Box>
  );
};

export default AreaChart;
