'use client';

import React, { useMemo } from 'react';
import ReactEcharts from 'echarts-for-react';
import { buildGanttChartOptions } from './GanttChart.options';
import type { GanttChartProps } from './GanttChart.types';
import { computeRange } from './GanttChart.utils';

const GANTT_CHART_COLORS = {
  axis: '#999',
  text: '#333',
  divider: '#eee',
  title: '#222'
};

const GanttChart = ({ data, title, height = 400, width = '100%' }: GanttChartProps) => {
  const fontFamily = 'sans-serif';

  const range = useMemo(() => computeRange(data), [data]);
  const option = useMemo(
    () => buildGanttChartOptions(data, title, range, GANTT_CHART_COLORS, fontFamily),
    [data, title, range, fontFamily]
  );

  return (
    <div style={{ width, height }}>
      <ReactEcharts option={option} style={{ width: '100%', height: '100%' }} />
    </div>
  );
};

export default GanttChart;
