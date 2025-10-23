import * as echarts from 'echarts';
import type { CustomSeriesRenderItemParams, CustomSeriesRenderItemAPI } from 'echarts';
import { TaskType, type Task } from './GanttChart.types';

const BAR_HEIGHT = 20;
const ARROW_HEAD_SIZE = 6;
const ARROW_COLOR = '#888';
const HORIZONTAL_OFFSET = -10;

/**
 * Custom renderer for task bars and progress overlay.
 */
export const renderTaskItem =
  (data: Task[]) => (params: CustomSeriesRenderItemParams, api: CustomSeriesRenderItemAPI) => {
    const categoryIndex = api.value(0) as number;
    const startPoint = api.coord([api.value(1), categoryIndex]);
    const endPoint = api.coord([api.value(2), categoryIndex]);
    const task = data[categoryIndex];

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

    const progressOverlay = {
      type: 'rect',
      shape: echarts.graphic.clipRectByRect(
        {
          x: startPoint[0],
          y: startPoint[1] - BAR_HEIGHT / 2,
          width: task.progress !== undefined ? progressWidth : barWidth,
          height: BAR_HEIGHT
        },
        { x: coordSys.x, y: coordSys.y, width: coordSys.width, height: coordSys.height }
      ),
      style: { fill: progressColor }
    };

    return {
      type: 'group',
      children: [mainBar, progressOverlay]
    } as echarts.CustomSeriesRenderItemReturn;
  };

/**
 * Custom renderer for dependency arrows between tasks.
 */
export const renderDependencyItem =
  (data: Task[]) => (params: CustomSeriesRenderItemParams, api: CustomSeriesRenderItemAPI) => {
    const prereqIndex = api.value(0) as number;
    const dependentIndex = api.value(1) as number;
    const prereqStart = new Date(data[prereqIndex].start).getTime();
    const dependentStart = new Date(data[dependentIndex].start).getTime();

    const P1_X = api.coord([prereqStart, prereqIndex])[0];
    const P1_Y = api.coord([prereqStart, prereqIndex])[1];
    const P4_X = api.coord([dependentStart, dependentIndex])[0];
    const P4_Y = api.coord([dependentStart, dependentIndex])[1];

    if (!isFinite(P4_X) || !isFinite(P4_Y)) return { type: 'group', children: [] };

    const coordSys = params.coordSys as any;
    const verticalRunX =
      dependentIndex > prereqIndex ? Math.min(P1_X, P4_X) - HORIZONTAL_OFFSET : coordSys.x - HORIZONTAL_OFFSET * 2;

    const path = `M${P1_X},${P1_Y} L${verticalRunX},${P1_Y} L${verticalRunX},${P4_Y} L${P4_X},${P4_Y}`;

    const clipRect = {
      type: 'rect',
      shape: {
        x: coordSys.x - 100,
        y: coordSys.y,
        width: coordSys.width + 100,
        height: coordSys.height
      }
    };

    return {
      type: 'group',
      clipPath: clipRect as any,
      children: [
        {
          type: 'path',
          shape: { pathData: path },
          style: { stroke: ARROW_COLOR, lineWidth: 1.5, fill: 'none', lineDash: [4, 2] }
        },
        {
          type: 'path',
          shape: {
            pathData: `M${P4_X},${P4_Y} L${P4_X - ARROW_HEAD_SIZE},${P4_Y - ARROW_HEAD_SIZE / 2} L${P4_X - ARROW_HEAD_SIZE},${P4_Y + ARROW_HEAD_SIZE / 2} Z`
          },
          style: { fill: ARROW_COLOR, stroke: ARROW_COLOR, lineWidth: 1 }
        }
      ] as any
    };
  };
