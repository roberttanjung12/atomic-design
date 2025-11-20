import type { EChartsOption, SeriesOption } from 'echarts';
import { renderTaskItem, renderDependencyItem } from './GanttChart.renderers';
import type { Task } from './GanttChart.types';
import { renderTooltip } from './GanttChart.utils';

/**
 * Builds the ECharts option object for rendering a Gantt chart.
 *
 * @param data - Array of task objects to be displayed in the Gantt chart.
 * @param title - Optional chart title.
 * @param range - Tuple specifying the minimum and maximum time range for the x-axis.
 * @param colors - Object specifying colors for axis, text, divider, and title.
 * @param fontFamily - Font family to use for chart text.
 * @returns EChartsOption object configured for a Gantt chart with tasks and dependencies.
 */
export const buildGanttChartOptions = (
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

  const option: EChartsOption = {
    title: { text: title, left: 'center', textStyle: { color: colors.title, fontFamily } },
    tooltip: { trigger: 'item', formatter: (params: any) => renderTooltip(params, data, colors.text, fontFamily) },
    grid: { top: 80, right: 40, left: 200, bottom: 60 },
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
      axisLabel: {
        color: colors.text,
        formatter: (val: string) => {
          const task = data.find(t => t.name === val);

          if (task?.children?.length) {
            return `${task.collapsed ? '▶' : '▼'} ${val}`;
          }

          return val;
        }
      },
      triggerEvent: true
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
    ] as SeriesOption[]
  };

  return option;
};
