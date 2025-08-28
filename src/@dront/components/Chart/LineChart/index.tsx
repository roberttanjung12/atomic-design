'use client';

import { Box, useTheme } from '@mui/material';
import { type EChartsOption } from 'echarts';
import ReactEcharts from 'echarts-for-react';

export interface LineChartProps {
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

const LineChart = ({ data, title, height = '400px', width = '100%' }: LineChartProps) => {
  const theme = useTheme();

  const chartColors = [
    theme.palette.primary.main,
    theme.palette.secondary.main,
    theme.palette.success.main,
    theme.palette.info.main,
    theme.palette.warning.main
  ];

  const option: EChartsOption = {
    title: {
      text: title,
      left: 'center',
      textStyle: {
        color: theme.palette.text.primary
      }
    },
    tooltip: {
      trigger: 'axis'
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
      data: item.data,
      smooth: true,
      lineStyle: {
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

export default LineChart;
