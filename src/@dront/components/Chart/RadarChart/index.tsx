'use client';

import { Box, useTheme } from '@mui/material';
import { type EChartsOption } from 'echarts';
import ReactEcharts from 'echarts-for-react';

/**
 * Props for the RadarChart component
 *
 * @interface RadarChartProps
 * @property {object} data - The data configuration for the radar chart
 * @property {Array<{name: string, max: number}>} data.indicator - Array of indicators defining the radar chart axes
 * @property {string} data.indicator[].name - Name of the indicator/axis
 * @property {number} data.indicator[].max - Maximum value for this indicator/axis
 * @property {Array<{name: string, value: number[]}>} data.series - Array of data series to be plotted
 * @property {string} data.series[].name - Name of the data series
 * @property {number[]} data.series[].value - Array of values corresponding to each indicator
 * @property {string} [title] - Optional title for the chart
 * @property {string|number} [height='400px'] - Height of the chart
 * @property {string|number} [width='100%'] - Width of the chart
 */
export interface RadarChartProps {
  data: {
    indicator: Array<{
      name: string;
      max: number;
    }>;
    series: Array<{
      name: string;
      value: number[];
    }>;
  };
  title?: string;
  height?: string | number;
  width?: string | number;
}

/**
 * RadarChart component for visualizing multivariate data on a 2D chart with multiple quantitative variables.
 * Each variable is represented on its own axis, with all axes arranged radially.
 * Excellent for performance comparisons across multiple dimensions or comparing features of different products.
 *
 * @component
 * @param {RadarChartProps} props - The component props
 * @param {object} props.data - The data configuration for the radar chart
 * @param {string} [props.title] - Optional chart title
 * @param {string|number} [props.height='400px'] - Chart height
 * @param {string|number} [props.width='100%'] - Chart width
 * @returns {JSX.Element} Rendered RadarChart component
 *
 * @example
 * // Basic usage
 * const data = {
 *   indicator: [
 *     { name: 'Speed', max: 100 },
 *     { name: 'Power', max: 100 },
 *     { name: 'Range', max: 100 },
 *     { name: 'Durability', max: 100 },
 *     { name: 'Efficiency', max: 100 }
 *   ],
 *   series: [
 *     { name: 'Product A', value: [80, 70, 60, 90, 85] },
 *     { name: 'Product B', value: [70, 80, 65, 70, 90] }
 *   ]
 * };
 *
 * return <RadarChart data={data} title="Product Comparison" height={400} />;
 */
const RadarChart = ({ data, title, height = '400px', width = '100%' }: RadarChartProps) => {
  const theme = useTheme();

  /**
   * Chart color palette derived from theme
   * Uses primary, secondary, success, info, and warning colors from the current theme
   */
  const chartColors = [
    theme.palette.primary.main,
    theme.palette.secondary.main,
    theme.palette.success.main,
    theme.palette.info.main,
    theme.palette.warning.main
  ];

  /**
   * ECharts configuration options for the radar chart
   * Includes title, tooltip, legend, radar configuration, and series data
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
      trigger: 'item'
    },
    legend: {
      bottom: 0,
      data: data.series.map(item => item.name),
      textStyle: {
        color: theme.palette.text.secondary
      }
    },
    /**
     * Radar chart coordinate system configuration
     * Defines the shape, axes, and styling of the radar chart
     */
    radar: {
      indicator: data.indicator,
      axisName: {
        color: theme.palette.text.secondary
      },
      axisLine: {
        lineStyle: {
          color: theme.palette.divider
        }
      },
      splitLine: {
        lineStyle: {
          color: theme.palette.divider
        }
      },
      splitArea: {
        show: true,
        areaStyle: {
          color: [
            theme.palette.mode === 'light' ? 'rgba(250, 250, 250, 0.1)' : 'rgba(50, 50, 50, 0.1)',
            theme.palette.mode === 'light' ? 'rgba(200, 200, 200, 0.1)' : 'rgba(30, 30, 30, 0.1)'
          ]
        }
      }
    },
    /**
     * Series data configuration
     * Each series represents a set of data to be displayed on the radar chart
     * Includes styling for points, lines, and fill areas
     */
    series: [
      {
        type: 'radar',
        data: data.series.map((item, index) => ({
          name: item.name,
          value: item.value,
          /**
           * Style for the data points
           */
          itemStyle: {
            color: chartColors[index % chartColors.length]
          },
          /**
           * Gradient fill style for the radar area
           * Creates a radial gradient from semi-transparent to more transparent
           */
          areaStyle: {
            color: {
              type: 'radial',
              x: 0.5,
              y: 0.5,
              r: 0.5,
              colorStops: [
                {
                  offset: 0,
                  color: `${chartColors[index % chartColors.length]}90` // 56% opacity
                },
                {
                  offset: 1,
                  color: `${chartColors[index % chartColors.length]}30` // 19% opacity
                }
              ]
            }
          },
          /**
           * Style for the connecting lines
           */
          lineStyle: {
            width: 2,
            color: chartColors[index % chartColors.length]
          }
        }))
      }
    ]
  };

  /**
   * Render the RadarChart component
   * Wraps the ReactEcharts component in a Box with specified dimensions
   */
  return (
    <Box sx={{ width, height }}>
      <ReactEcharts option={option} style={{ height: '100%', width: '100%' }} />
    </Box>
  );
};

export default RadarChart;
