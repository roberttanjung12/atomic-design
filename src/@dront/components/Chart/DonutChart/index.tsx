'use client';

import { Box, useTheme } from '@mui/material';
import { type EChartsOption } from 'echarts';
import ReactEcharts from 'echarts-for-react';

export interface DonutChartProps {
  data: Array<{
    name: string;
    value: number;
  }>;
  title?: string;
  height?: string | number;
  width?: string | number;
}

const DonutChart = ({ data, title, height = '400px', width = '100%' }: DonutChartProps) => {
  const theme = useTheme();

  const chartColors = [
    theme.palette.primary.main,
    theme.palette.secondary.main,
    theme.palette.success.main,
    theme.palette.info.main,
    theme.palette.warning.main,
    theme.palette.error.main
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
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
      bottom: 0,
      data: data.map(item => item.name),
      textStyle: {
        color: theme.palette.text.secondary
      }
    },
    series: [
      {
        name: title || 'Data',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: theme.palette.background.paper,
          borderWidth: 2
        },
        label: {
          show: false,
          position: 'center',
          color: theme.palette.text.primary
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '20',
            fontWeight: 'bold',
            color: theme.palette.text.primary
          }
        },
        labelLine: {
          show: false
        },
        data: data.map((item, index) => ({
          ...item,
          itemStyle: {
            color: chartColors[index % chartColors.length]
          }
        }))
      }
    ]
  };

  return (
    <Box sx={{ width, height }}>
      <ReactEcharts option={option} style={{ height: '100%', width: '100%' }} />
    </Box>
  );
};

export default DonutChart;
