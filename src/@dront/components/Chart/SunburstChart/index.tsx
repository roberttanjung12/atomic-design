'use client';

import { Box, useTheme } from '@mui/material';
import { type EChartsOption } from 'echarts';
import ReactEcharts from 'echarts-for-react';

/**
 * Props for the SunburstChart component
 *
 * @interface SunburstChartProps
 * @property {object} data - The hierarchical data configuration for the sunburst chart
 * @property {string} data.name - Name of the root node
 * @property {Array<object>} data.children - First level child nodes
 * @property {string} data.children[].name - Name of the child node
 * @property {number} [data.children[].value] - Optional value for the child node
 * @property {Array<object>} [data.children[].children] - Optional second level child nodes
 * @property {string} data.children[].children[].name - Name of the second level node
 * @property {number} data.children[].children[].value - Value for the second level node
 * @property {Array<object>} [data.children[].children[].children] - Optional third level child nodes
 * @property {string} data.children[].children[].children[].name - Name of the third level node
 * @property {number} data.children[].children[].children[].value - Value for the third level node
 * @property {string} [title] - Optional title for the chart
 * @property {string|number} [height='400px'] - Height of the chart
 * @property {string|number} [width='100%'] - Width of the chart
 */
export interface SunburstChartProps {
  data: {
    name: string;
    children: Array<{
      name: string;
      value?: number;
      children?: Array<{
        name: string;
        value: number;
        children?: Array<{
          name: string;
          value: number;
        }>;
      }>;
    }>;
  };
  title?: string;
  height?: string | number;
  width?: string | number;
}

/**
 * SunburstChart component for visualizing hierarchical data as a series of concentric rings.
 * Each ring corresponds to a level in the hierarchy, with segments sized according to their values.
 * Excellent for showing part-to-whole relationships at multiple levels simultaneously.
 * Ideal for visualizing organizational structures, file system storage, or nested categorical data.
 *
 * @component
 * @param {SunburstChartProps} props - The component props
 * @param {object} props.data - The hierarchical data configuration
 * @param {string} [props.title] - Optional chart title
 * @param {string|number} [props.height='400px'] - Chart height
 * @param {string|number} [props.width='100%'] - Chart width
 * @returns {JSX.Element} Rendered SunburstChart component
 *
 * @example
 * // Basic usage
 * const data = {
 *   name: 'Budget',
 *   children: [
 *     {
 *       name: 'Development',
 *       children: [
 *         { name: 'Frontend', value: 30 },
 *         { name: 'Backend', value: 35 },
 *         { name: 'Testing', value: 15 }
 *       ]
 *     },
 *     {
 *       name: 'Operations',
 *       children: [
 *         { name: 'Infrastructure', value: 25 },
 *         { name: 'Support', value: 15 }
 *       ]
 *     }
 *   ]
 * };
 *
 * return <SunburstChart data={data} title="Budget Allocation" height={350} />;
 */
const SunburstChart = ({ data, title, height = '400px', width = '100%' }: SunburstChartProps) => {
  const theme = useTheme();

  /**
   * Chart color palette derived from theme
   * Uses a variety of colors from the theme palette to ensure visual distinction
   * between different segments in the sunburst chart
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
   * ECharts configuration options for the sunburst chart
   * Includes title, tooltip, styling, and data visualization settings
   */
  const option: EChartsOption = {
    title: {
      text: title,
      left: 'center',
      textStyle: {
        color: theme.palette.text.primary
      }
    },
    /**
     * Tooltip configuration
     * Shows hierarchical path and value information when hovering over segments
     */
    tooltip: {
      trigger: 'item',
      /**
       * Custom formatter function for tooltip content
       * Displays the full hierarchical path to the hovered segment
       * and its value if available
       *
       * @param {any} params - Parameters passed by ECharts containing data about the hovered item
       * @returns {string} Formatted tooltip HTML content
       */
      formatter: function (params: any) {
        const { name, value } = params.data;

        // Build path by traversing parent references
        const path = [];
        let current = params.data;

        while (current && current.name) {
          path.unshift(current.name);
          current = current.parent;
        }

        const fullPath = path.length > 0 ? path.join(' > ') : name;

        return `${fullPath}${value ? `<br/>Value: ${value}` : ''}`;
      },
      backgroundColor: theme.palette.background.paper,
      borderColor: theme.palette.divider,
      textStyle: {
        color: theme.palette.text.primary
      }
    },
    /**
     * Series configuration for the sunburst chart
     * Contains all visualization settings for the hierarchical data
     */
    series: {
      type: 'sunburst',
      data: [data],
      /**
       * Radius settings for the sunburst chart
       * Inner radius is 20% of container, outer radius is 85%
       */
      radius: ['20%', '85%'],
      /**
       * Level-specific configurations for different hierarchy depths
       * Each level can have custom label formatting and positioning
       */
      levels: [
        {}, // Root level - empty configuration uses global settings
        {
          /**
           * Level 1 label configuration (first ring)
           * Larger font and no rotation for better readability
           */
          label: {
            position: 'inside',
            fontSize: 12,
            overflow: 'truncate',
            minAngle: 18,
            align: 'center',
            rotate: 0
          }
        },
        {
          /**
           * Level 2 label configuration (second ring)
           * Medium font size with default rotation
           */
          label: {
            position: 'inside',
            fontSize: 11,
            overflow: 'truncate',
            minAngle: 15,
            align: 'center'
          }
        },
        {
          /**
           * Level 3 label configuration (third ring)
           * Smaller font and higher minimum angle to prevent overcrowding
           */
          label: {
            position: 'inside',
            fontSize: 10,
            overflow: 'truncate',
            minAngle: 20,
            align: 'center'
          }
        }
      ],
      /**
       * Styling for individual sunburst segments
       * Adds subtle rounding and thin borders for better visual separation
       */
      itemStyle: {
        borderRadius: 2,
        borderWidth: 1,
        borderColor: theme.palette.background.paper
      },
      /**
       * Global label configuration for all sunburst segments
       * These settings apply to all levels unless overridden in the levels configuration
       */
      label: {
        rotate: 'tangential', // Labels follow the arc of the segment
        color: theme.palette.text.primary,
        minAngle: 15, // Only show labels for segments larger than 15 degrees
        fontSize: 11,
        align: 'center',
        overflow: 'truncate', // Truncate text that doesn't fit
        silent: false, // Allow click events on labels
        ellipsis: '...', // Show ellipsis for truncated text
        width: 50, // Maximum label width in pixels
        height: 15 // Maximum label height in pixels
      },
      /**
       * Emphasis effect when hovering over segments
       * Highlights the ancestors of the hovered segment for better context
       */
      emphasis: {
        focus: 'ancestor', // Highlight the path from root to the hovered segment
        itemStyle: {
          shadowBlur: 10, // Add shadow for visual depth
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    },
    color: chartColors
  };

  /**
   * Render the SunburstChart component
   * Wraps the ReactEcharts component in a Box with specified dimensions
   */
  return (
    <Box sx={{ width, height }}>
      <ReactEcharts option={option} style={{ height: '100%', width: '100%' }} />
    </Box>
  );
};

export default SunburstChart;
