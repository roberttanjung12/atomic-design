import Chart from '@/@dront/components/Chart';

const ChartHeatmap = () => {
  const data = {
    xAxis: ['12a', '2a', '4a', '6a', '8a', '10a', '12p', '2p', '4p', '6p', '8p', '10p'],
    yAxis: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    values: [
      [1, 1, 3, 1, 1, 2, 1, 3, 4, 6, 2, 6],
      [2, 1, 3, 2, 4, 1, 5, 5, 5, 3, 4, 2],
      [1, 3, 1, 4, 2, 4, 2, 4, 5, 3, 7, 3],
      [7, 3, 0, 0, 1, 5, 4, 7, 5, 10, 6, 4],
      [1, 1, 0, 0, 0, 3, 2, 1, 8, 5, 7, 2],
      [7, 0, 0, 0, 0, 5, 2, 2, 9, 5, 5, 2],
      [5, 1, 0, 0, 0, 2, 4, 1, 4, 6, 3, 5]
    ]
  };

  return <Chart type="heatmap" color="primary" data={data} title="Weekly Activity Heatmap" height={400} />;
};

export default ChartHeatmap;
