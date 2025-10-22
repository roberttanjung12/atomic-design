'use client';

import React, { useMemo } from 'react';
import ReactEcharts from 'echarts-for-react';
import { buildTimelineOptions } from './Timeline.options';
import type { TimelineProps } from './Timeline.types';
import { computeRange } from './Timeline.utils';

const TIMELINE_COLORS = {
  axis: '#999',
  text: '#333',
  divider: '#eee',
  title: '#222'
};

const Timeline = ({ data, title, height = 400, width = '100%' }: TimelineProps) => {
  const fontFamily = 'sans-serif';

  const range = useMemo(() => computeRange(data), [data]);
  const option = useMemo(
    () => buildTimelineOptions(data, title, range, TIMELINE_COLORS, fontFamily),
    [data, title, range, fontFamily]
  );

  return (
    <div style={{ width, height }}>
      <ReactEcharts option={option} style={{ width: '100%', height: '100%' }} />
    </div>
  );
};

export default Timeline;
