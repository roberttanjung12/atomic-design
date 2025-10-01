'use client';

import { Box, useTheme } from '@mui/material';
import { type EChartsOption } from 'echarts';
import ReactEcharts from 'echarts-for-react';

/**
 * Props for the HeatmapChart component
 *
 * @interface HeatmapChartProps
 * @property {object} data - The data configuration for the heatmap chart
 * @property {string[]} data.xAxis - Array of labels for the X axis
 * @property {string[]} data.yAxis - Array of labels for the Y axis
 * @property {Array<Array<number>>} data.values - 2D array of values where values[i][j] corresponds to the value at yAxis[i], xAxis[j]
 * @property {string} [color='primary'] - Color for the heatmap gradient. Can be a theme color ('primary', 'secondary', 'info', etc.) or a custom color code
 * @property {string} [title] - Optional title for the chart
 * @property {string|number} [height='400px'] - Height of the chart
 * @property {string|number} [width='100%'] - Width of the chart
 */
export interface HeatmapChartProps {
  data: {
    xAxis: string[];
    yAxis: string[];
    values: Array<Array<number>>;
  };
  color?: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'error' | string;
  title?: string;
  height?: string | number;
  width?: string | number;
}

/**
 * HeatmapChart component for visualizing data intensity across two categorical dimensions
 *
 * @component
 * @param {HeatmapChartProps} props - The component props
 * @returns {JSX.Element} Rendered heatmap chart
 */
const HeatmapChart = ({ data, color = 'primary', title, height = '400px', width = '100%' }: HeatmapChartProps) => {
  const theme = useTheme();

  const chartColor = (() => {
    const paletteColors = ['primary', 'secondary', 'success', 'info', 'warning', 'error'] as const;

    if (paletteColors.includes(color as any) && theme.palette[color as (typeof paletteColors)[number]]) {
      const themeColor = theme.palette[color as (typeof paletteColors)[number]];

      if (themeColor && typeof themeColor === 'object' && 'main' in themeColor) {
        return themeColor.main;
      }
    }

    return color;
  })();

  let minValue = Infinity;
  let maxValue = -Infinity;

  for (const row of data.values) {
    for (const value of row) {
      minValue = Math.min(minValue, value);
      maxValue = Math.max(maxValue, value);
    }
  }

  const formattedData = data.values.flatMap((row, rowIndex) =>
    row.map((value, colIndex) => [colIndex, rowIndex, value])
  );

  /**
   * ECharts configuration options for the heatmap chart
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
      position: 'top',
      formatter: (params: any) => {
        const { value } = params;

        return `${data.yAxis[value[1]]}, ${data.xAxis[value[0]]}: ${value[2]}`;
      }
    },
    grid: {
      top: title ? 60 : 20,
      bottom: 80,
      left: '3%',
      right: '7%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: data.xAxis,
      splitArea: {
        show: true
      },
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
      type: 'category',
      data: data.yAxis,
      splitArea: {
        show: true
      },
      axisLine: {
        lineStyle: {
          color: theme.palette.text.secondary
        }
      },
      axisLabel: {
        color: theme.palette.text.secondary
      }
    },
    visualMap: {
      min: minValue,
      max: maxValue,
      calculable: true,
      orient: 'horizontal',
      left: 'center',
      bottom: 10,
      inRange: {
        color: [`${chartColor}10`, `${chartColor}90`]
      },
      textStyle: {
        color: theme.palette.text.primary
      }
    },
    series: [
      {
        type: 'heatmap',
        data: formattedData,
        label: {
          show: true,
          color: theme.palette.getContrastText(theme.palette.background.paper)
        },
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };

  return (
    <Box sx={{ width, height }}>
      <ReactEcharts option={option} style={{ height: '100%', width: '100%' }} />
    </Box>
  );
};

export default HeatmapChart;
