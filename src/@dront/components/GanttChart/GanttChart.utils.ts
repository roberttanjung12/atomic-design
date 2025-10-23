import { TaskType, type Task } from './GanttChart.types';

const ONE_DAY = 24 * 60 * 60 * 1000;

/**
 * Compute the visible date range for the chart.
 */
export const computeRange = (data: Task[]): [number, number] => {
  const starts = data.map(t => new Date(t.start).getTime());
  const ends = data.map(t => new Date(t.end).getTime());
  const now = Date.now();

  if (starts.length === 0) return [now - ONE_DAY * 7, now + ONE_DAY * 7];

  const minStart = Math.min(...starts);
  const maxEnd = Math.max(...ends);
  const axisMin = new Date(new Date(minStart).getFullYear(), new Date(minStart).getMonth(), 1).getTime() - ONE_DAY;
  const axisMax = maxEnd + ONE_DAY * 7;

  return [axisMin, axisMax];
};

/**
 * Tooltip renderer for tasks and dependencies.
 */
export const renderTooltip = (params: any, data: Task[], textColor: string, fontFamily: string): string => {
  if (params.seriesType === 'custom' && params.seriesName === 'Dependencies') {
    const [prereqIndex, dependentIndex] = params.value as [number, number];

    return `<div style="color:${textColor}; font-family:${fontFamily}; padding:5px;">
      <b>Dependency</b><br/>
      From: ${data[prereqIndex].name}<br/>
      To: ${data[dependentIndex].name}
    </div>`;
  }

  const [start, end] = params.value.slice(1);
  const task = data[params.value[0]];
  const dependencies = task.dependencies?.join(', ') || 'None';
  const progressColor = task.color?.progress ?? (task.type === TaskType.Task ? '#23BEFC' : '#FCC93C');
  const progressHtml =
    task.progress !== undefined
      ? `<span style="display:inline-block; margin-right:5px; border-radius:50%; width:10px; height:10px; background-color:${progressColor};"></span>
         Progress: ${task.progress}%<br/>`
      : '';

  return `<div style="color:${textColor}; font-family:${fontFamily}; padding:5px;">
    <b>${params.name}</b><br/>
    ${progressHtml}
    Start: ${new Date(start).toLocaleDateString()}<br/>
    End: ${new Date(end).toLocaleDateString()}<br/>
    Depends on: ${dependencies}
  </div>`;
};
