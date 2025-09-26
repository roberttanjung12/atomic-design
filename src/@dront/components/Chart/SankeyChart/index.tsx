'use client';

import { Box, useTheme } from '@mui/material';
import { type EChartsOption } from 'echarts';
import ReactEcharts from 'echarts-for-react';

/**
 * Props for the SankeyChart component
 *
 * @interface SankeyChartProps
 * @property {object} data - The data configuration for the Sankey chart
 * @property {Array<{name: string}>} data.nodes - Array of nodes in the Sankey diagram
 * @property {string} data.nodes[].name - Name of the node
 * @property {Array<{source: string, target: string, value: number}>} data.links - Array of links between nodes
 * @property {string} data.links[].source - Name of the source node
 * @property {string} data.links[].target - Name of the target node
 * @property {number} data.links[].value - Value representing the link width/magnitude
 * @property {string} [title] - Optional title for the chart
 * @property {string|number} [height='400px'] - Height of the chart
 * @property {string|number} [width='100%'] - Width of the chart
 */
export interface SankeyChartProps {
  data: {
    nodes: Array<{
      name: string;
    }>;
    links: Array<{
      source: string;
      target: string;
      value: number;
    }>;
  };
  title?: string;
  height?: string | number;
  width?: string | number;
}

/**
 * SankeyChart component for visualizing flows and their quantities in a system.
 * The width of the flow represents its magnitude, making it easy to identify dominant contributors.
 * Perfect for mapping energy transfers, website navigation paths, or material flows through a process.
 *
 * @component
 * @param {SankeyChartProps} props - The component props
 * @param {object} props.data - The data configuration for the Sankey chart
 * @param {string} [props.title] - Optional chart title
 * @param {string|number} [props.height='400px'] - Chart height
 * @param {string|number} [props.width='100%'] - Chart width
 * @returns {JSX.Element} Rendered SankeyChart component
 *
 * @example
 * // Basic usage
 * const data = {
 *   nodes: [
 *     { name: 'Category A' },
 *     { name: 'Category B' },
 *     { name: 'Category C' },
 *     { name: 'Target X' },
 *     { name: 'Target Y' }
 *   ],
 *   links: [
 *     { source: 'Category A', target: 'Target X', value: 5 },
 *     { source: 'Category A', target: 'Target Y', value: 3 },
 *     { source: 'Category B', target: 'Target X', value: 8 },
 *     { source: 'Category C', target: 'Target Y', value: 6 }
 *   ]
 * };
 *
 * return <SankeyChart data={data} title="Resource Distribution" height={350} />;
 */
const SankeyChart = ({ data, title, height = '400px', width = '100%' }: SankeyChartProps) => {
  const theme = useTheme();

  /**
   * Chart color palette derived from theme
   * Uses a variety of colors from the theme palette to ensure visual distinction
   * between different nodes and links in the Sankey diagram
   */
  const chartColors = [
    theme.palette.primary.main,
    theme.palette.primary.light,
    theme.palette.secondary.main,
    theme.palette.secondary.light,
    theme.palette.success.main,
    theme.palette.success.light,
    theme.palette.info.main,
    theme.palette.info.light,
    theme.palette.warning.main,
    theme.palette.warning.light,
    theme.palette.error.main,
    theme.palette.error.light
  ];

  /**
   * ECharts configuration options for the Sankey chart
   * Includes title, tooltip, series data, and styling options
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
      trigger: 'item',
      triggerOn: 'mousemove'
    },
    /**
     * Series data configuration for the Sankey diagram
     * Defines nodes, links, and styling options for the diagram elements
     */
    series: [
      {
        type: 'sankey',
        data: data.nodes,
        links: data.links,
        /**
         * Emphasis effect when hovering over elements
         * 'adjacency' highlights the connected nodes and links
         */
        emphasis: {
          focus: 'adjacency'
        },
        /**
         * Styling for the nodes in the diagram
         */
        itemStyle: {
          borderWidth: 1,
          borderColor: theme.palette.background.paper
        },
        /**
         * Styling for the links/flows between nodes
         * Uses source node color with partial transparency and slight curve
         */
        lineStyle: {
          color: 'source',
          curveness: 0.5,
          opacity: 0.5
        },
        /**
         * Styling for the node labels
         * Uses the theme's text color and font family for consistency
         */
        label: {
          color: theme.palette.text.primary,
          fontFamily: theme.typography.fontFamily
        }
      }
    ],
    color: chartColors
  };

  /**
   * Render the SankeyChart component
   * Wraps the ReactEcharts component in a Box with specified dimensions
   */
  return (
    <Box sx={{ width, height }}>
      <ReactEcharts option={option} style={{ height: '100%', width: '100%' }} />
    </Box>
  );
};

export default SankeyChart;
