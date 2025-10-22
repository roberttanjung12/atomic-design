'use client';

import React, { useMemo } from 'react';
import * as echarts from 'echarts';
import type { EChartsOption, CustomSeriesRenderItemParams, CustomSeriesRenderItemAPI } from 'echarts';
import ReactEcharts from 'echarts-for-react';

// --- Type Definitions ---
export const enum TaskType {
  Task = 'task',
  Milestone = 'milestone'
}

export interface Task {
  id: string;
  name: string;
  start: string | Date;
  end: string | Date;
  type: TaskType;
  color?: { bar: string; progress: string };
  progress?: number;
  dependencies?: string[];
}

export interface GanttChartProps {
  data: {
    task: Task[];
  };
  title?: string;
  height?: string | number;
  width?: string | number;
}

// --- Component Implementation ---
const GanttChart = ({ data, title, height = 400, width = '100%' }: GanttChartProps) => {
  const axisColor = '#999';
  const textColor = '#333';
  const dividerColor = '#eee';
  const titleColor = '#222';
  const fontFamily = 'sans-serif';
  const ONE_DAY = 24 * 60 * 60 * 1000;
  const BAR_HEIGHT = 20;
  const ARROW_HEAD_SIZE = 6;
  const ARROW_COLOR = '#888';
  const HORIZONTAL_OFFSET = -10;
  const START_TIME_BUFFER_DAYS = 1;

  const range = useMemo(() => {
    const starts = data.task.map(t => new Date(t.start).getTime());
    const ends = data.task.map(t => new Date(t.end).getTime());

    const minStart = starts.length > 0 ? Math.min(...starts) : Date.now();
    const maxEnd = ends.length > 0 ? Math.max(...ends) : Date.now();

    if (starts.length === 0) {
      const now = Date.now();

      return [now - ONE_DAY * 7, now + ONE_DAY * 7];
    }

    let axisMin = new Date(new Date(minStart).getFullYear(), new Date(minStart).getMonth(), 1).getTime();
    const axisMax = new Date(maxEnd).getTime() + ONE_DAY * 7;

    axisMin = axisMin - ONE_DAY * START_TIME_BUFFER_DAYS;

    return [axisMin, axisMax];
  }, [data.task, ONE_DAY]);

  const option: EChartsOption = useMemo(() => {
    const categories = data.task.map(task => task.name);

    const seriesData = data.task.map((task, idx) => [
      idx,
      new Date(task.start).getTime(),
      new Date(task.end).getTime(),
      task.color
    ]);

    const dependencyData = data.task.flatMap((dependentTask, dependentIndex) => {
      if (!dependentTask.dependencies) return [];

      return dependentTask.dependencies
        .map(prereqId => {
          const prereqIndex = data.task.findIndex(t => t.id === prereqId);

          return prereqIndex !== -1 ? [prereqIndex, dependentIndex] : null;
        })
        .filter((item): item is [number, number] => item !== null);
    });

    let initialViewStart = range[0];
    let initialViewEnd = range[0] + ONE_DAY * 45;

    if (data.task.length > 0) {
      initialViewStart = new Date(data.task[0].start).getTime() - ONE_DAY * 2;
      initialViewEnd = initialViewStart + ONE_DAY * 45;
      if (initialViewEnd > range[1]) initialViewEnd = range[1];
    }

    return {
      title: {
        text: title,
        left: 'center',
        textStyle: { color: titleColor, fontFamily }
      },
      tooltip: {
        trigger: 'item',
        formatter: (params: any) => {
          if (params.seriesType === 'custom' && params.seriesName === 'Dependencies') {
            const [prereqIndex, dependentIndex] = params.value as [number, number];

            return `
              <div style="color:${textColor}; font-family:${fontFamily}; padding:5px;">
                <b>Dependency</b><br/>
                From: ${data.task[prereqIndex].name}<br/>
                To: ${data.task[dependentIndex].name}
              </div>
            `;
          }

          const [start, end] = params.value.slice(1);
          const task = data.task[params.value[0]];
          const dependencies = task.dependencies?.join(', ') || 'None';

          const progressColor = task.color?.progress ?? (task.type === TaskType.Task ? '#23BEFC' : '#FCC93C');

          const progressHtml =
            task.progress !== undefined
              ? `<span style="display:inline-block; margin-right:5px; border-radius:50%; width:10px; height:10px; background-color:${progressColor};"></span>
                 Progress: ${task.progress}%<br/>`
              : '';

          return `
            <div style="color:${textColor}; font-family:${fontFamily}; padding:5px;">
              <b>${params.name}</b><br/>
              ${progressHtml}
              Start: ${new Date(start).toLocaleDateString()}<br/>
              End: ${new Date(end).toLocaleDateString()}<br/>
              Depends on: ${dependencies}
            </div>
          `;
        }
      },
      grid: { top: 80, right: 40, left: 200, bottom: 60 },
      dataZoom: [
        {
          type: 'slider',
          xAxisIndex: 0,
          filterMode: 'weakFilter',
          height: 10,
          bottom: 10,
          startValue: initialViewStart,
          endValue: initialViewEnd,
          zoomLock: false,
          moveOnMouseMove: false
        },
        {
          type: 'slider',
          yAxisIndex: 0,
          filterMode: 'empty',
          width: 10,
          right: 10,
          start: 0,
          end: Math.min(100, (5 / data.task.length) * 100),
          zoomLock: false,
          moveOnMouseMove: false
        }
      ],
      xAxis: {
        type: 'time',
        position: 'top',
        scale: true,
        axisLine: { lineStyle: { color: dividerColor } },
        axisLabel: {
          color: axisColor,
          formatter: (val: number) => new Date(val).toLocaleString('en-US', { month: 'short' })
        },
        splitLine: { lineStyle: { color: dividerColor } },
        min: range[0],
        max: range[1]
      },
      yAxis: {
        inverse: true,
        type: 'category',
        data: categories,
        axisLine: { lineStyle: { color: dividerColor } },
        axisLabel: { color: textColor }
      },
      series: [
        // --- Tasks ---
        {
          name: 'Tasks',
          type: 'custom',
          z: 20,
          renderItem: (params: CustomSeriesRenderItemParams, api: CustomSeriesRenderItemAPI) => {
            const categoryIndex = api.value(0) as number;
            const startPoint = api.coord([api.value(1), categoryIndex]);
            const endPoint = api.coord([api.value(2), categoryIndex]);
            const task = data.task[categoryIndex];
            const barWidth = endPoint[0] - startPoint[0];
            const progressWidth = task.progress !== undefined ? barWidth * (task.progress / 100) : 0;

            const barColor = task.color?.bar ?? (task.type === TaskType.Task ? '#7AEAFE' : '#FEE589');
            const progressColor = task.color?.progress ?? (task.type === TaskType.Task ? '#23BEFC' : '#FCC93C');

            const coordSys = params.coordSys as any;

            const mainBar = {
              type: 'rect',
              shape: echarts.graphic.clipRectByRect(
                { x: startPoint[0], y: startPoint[1] - BAR_HEIGHT / 2, width: barWidth, height: BAR_HEIGHT },
                { x: coordSys.x, y: coordSys.y, width: coordSys.width, height: coordSys.height }
              ),
              style: { fill: barColor }
            };

            const progressOverlay =
              task.progress !== undefined
                ? {
                    type: 'rect',
                    shape: echarts.graphic.clipRectByRect(
                      { x: startPoint[0], y: startPoint[1] - BAR_HEIGHT / 2, width: progressWidth, height: BAR_HEIGHT },
                      { x: coordSys.x, y: coordSys.y, width: coordSys.width, height: coordSys.height }
                    ),
                    style: { fill: progressColor }
                  }
                : null;

            return { type: 'group', children: progressOverlay ? [mainBar, progressOverlay] : ([mainBar] as any) };
          },
          encode: { x: [1, 2], y: 0 },
          data: seriesData
        },
        // --- Dependencies ---
        {
          name: 'Dependencies',
          type: 'custom',
          z: 10,
          renderItem: (params: CustomSeriesRenderItemParams, api: CustomSeriesRenderItemAPI) => {
            const prereqIndex = api.value(0) as number;
            const dependentIndex = api.value(1) as number;
            const prereqStartTime = new Date(data.task[prereqIndex].start).getTime();
            const dependentStartTime = new Date(data.task[dependentIndex].start).getTime();

            const P1_X = api.coord([prereqStartTime, prereqIndex])[0];
            const P1_Y = api.coord([prereqStartTime, prereqIndex])[1];
            const P4_X = api.coord([dependentStartTime, dependentIndex])[0];
            const P4_Y = api.coord([dependentStartTime, dependentIndex])[1];

            if (!isFinite(P4_X) || !isFinite(P4_Y)) return { type: 'group', children: [] };

            const coordSys = params.coordSys as any;
            const ARROW_HEAD_ATTACH_X = P4_X;
            const verticalRunX =
              dependentIndex > prereqIndex
                ? Math.min(P1_X, P4_X) - HORIZONTAL_OFFSET
                : coordSys.x - HORIZONTAL_OFFSET * 2;

            const path = [
              'M',
              P1_X,
              P1_Y,
              'L',
              verticalRunX,
              P1_Y,
              'L',
              verticalRunX,
              P4_Y,
              'L',
              ARROW_HEAD_ATTACH_X,
              P4_Y
            ].join(' ');

            const CLIP_BUFFER = 100;
            const clipRect = {
              type: 'rect',
              shape: {
                x: coordSys.x - CLIP_BUFFER,
                y: coordSys.y,
                width: coordSys.width + CLIP_BUFFER,
                height: coordSys.height
              }
            };

            return {
              type: 'group',
              clipPath: clipRect as any,
              children: [
                {
                  type: 'path',
                  shape: { pathData: path, x: 0, y: 0 },
                  style: { stroke: ARROW_COLOR, lineWidth: 1.5, fill: 'none', lineDash: [4, 2] }
                },
                {
                  type: 'path',
                  shape: {
                    pathData: `M${ARROW_HEAD_ATTACH_X},${P4_Y} L${ARROW_HEAD_ATTACH_X - ARROW_HEAD_SIZE},${P4_Y - ARROW_HEAD_SIZE / 2} L${ARROW_HEAD_ATTACH_X - ARROW_HEAD_SIZE},${P4_Y + ARROW_HEAD_SIZE / 2} Z`,
                    x: 0,
                    y: 0
                  },
                  style: { fill: ARROW_COLOR, stroke: ARROW_COLOR, lineWidth: 1 }
                }
              ] as any
            };
          },
          encode: { x: [0, 1], y: [0, 1] },
          data: dependencyData
        }
      ]
    };
  }, [data.task, title, range, ONE_DAY, HORIZONTAL_OFFSET]);

  return (
    <div style={{ width, height }}>
      <ReactEcharts option={option} style={{ height: '100%', width: '100%' }} />
    </div>
  );
};

export default GanttChart;
