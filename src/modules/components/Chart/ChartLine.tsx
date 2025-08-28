import Chart from '@/@dront/components/Chart';

const ChartLine = () => {
  const data = {
    xAxis: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    series: [
      {
        name: 'Last Week',
        data: [820, 932, 901, 934, 1290, 1330, 1320]
      },
      {
        name: 'This Week',
        data: [720, 832, 801, 834, 1190, 1230, 1220]
      }
    ]
  };

  return <Chart type="line" data={data} title="Weekly Performance Comparison" height={300} />;
};

export default ChartLine;
