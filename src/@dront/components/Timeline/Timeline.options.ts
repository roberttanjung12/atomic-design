import type { EChartsOption } from 'echarts';
import { renderTaskItem, renderDependencyItem } from './Timeline.renderers';
import type { Task } from './Timeline.types';
import { renderTooltip } from './Timeline.utils';

const ONE_DAY = 24 * 60 * 60 * 1000;

export const buildTimelineOptions = (
  data: Task[],
  title: string | undefined,
  range: [number, number],
  colors: { axis: string; text: string; divider: string; title: string },
  fontFamily: string
): EChartsOption => {
  const categories = data.map(t => t.name);
  const seriesData = data.map((t, i) => [i, new Date(t.start).getTime(), new Date(t.end).getTime(), t.color]);
  const dependencyData = data.flatMap((dependent, dependentIndex) =>
    (dependent.dependencies || [])
      .map(prereqId => {
        const prereqIndex = data.findIndex(t => t.id === prereqId);

        return prereqIndex !== -1 ? [prereqIndex, dependentIndex] : null;
      })
      .filter((x): x is [number, number] => x !== null)
  );

  let initialViewStart = range[0];
  let initialViewEnd = initialViewStart + ONE_DAY * 45;

  if (data.length > 0) {
    initialViewStart = new Date(data[0].start).getTime() - ONE_DAY * 2;
    initialViewEnd = Math.min(initialViewStart + ONE_DAY * 45, range[1]);
  }

  return {
    title: {
      text: title,
      left: 'center',
      textStyle: { color: colors.title, fontFamily }
    },
    tooltip: {
      trigger: 'item',
      formatter: (params: any) => renderTooltip(params, data, colors.text, fontFamily)
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
        endValue: initialViewEnd
      },
      {
        type: 'slider',
        yAxisIndex: 0,
        filterMode: 'empty',
        width: 10,
        right: 10,
        start: 0,
        end: Math.min(100, (5 / data.length) * 100)
      }
    ],
    xAxis: {
      type: 'time',
      position: 'top',
      axisLine: { lineStyle: { color: colors.divider } },
      axisLabel: {
        color: colors.axis,
        formatter: (val: number) => new Date(val).toLocaleString('en-US', { month: 'short' })
      },
      splitLine: { lineStyle: { color: colors.divider } },
      min: range[0],
      max: range[1]
    },
    yAxis: {
      inverse: true,
      type: 'category',
      data: categories,
      axisLine: { lineStyle: { color: colors.divider } },
      axisLabel: { color: colors.text }
    },
    series: [
      {
        name: 'Tasks',
        type: 'custom',
        z: 20,
        renderItem: renderTaskItem(data),
        encode: { x: [1, 2], y: 0 },
        data: seriesData
      },
      {
        name: 'Dependencies',
        type: 'custom',
        z: 10,
        renderItem: renderDependencyItem(data),
        encode: { x: [0, 1], y: [0, 1] },
        data: dependencyData
      }
    ] as echarts.CustomSeriesOption[]
  };
};
