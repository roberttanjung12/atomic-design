'use client';

import { Box, useTheme } from '@mui/material';
import { type EChartsOption } from 'echarts';
import ReactEcharts from 'echarts-for-react';

export interface BarChartProps {
  data: {
    xAxis: string[];
    series: number[];
  };
  title?: string;
  height?: string | number;
  width?: string | number;
}

const BarChart = ({ data, title, height = '400px', width = '100%' }: BarChartProps) => {
  const theme = useTheme();

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
        type: 'shadow'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: data.xAxis,
      axisTick: {
        alignWithLabel: true
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
    series: [
      {
        type: 'bar',
        data: data.series,
        barWidth: '60%',
        itemStyle: {
          color: theme.palette.primary.main
        },
        emphasis: {
          itemStyle: {
            color: theme.palette.primary.dark
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

export default BarChart;
