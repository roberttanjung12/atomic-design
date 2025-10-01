import Chart from '@/@dront/components/Chart';

const ChartArea = () => {
  const data = {
    xAxis: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    series: [
      {
        name: 'Sprint 1',
        data: [120, 132, 101, 134, 90, 230, 210, 182, 191, 234, 290, 330]
      },
      {
        name: 'Sprint 2',
        data: [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149]
      },
      {
        name: 'Sprint 3',
        data: [150, 232, 201, 154, 190, 330, 410, 182, 191, 234, 290, 330]
      }
    ]
  };

  return <Chart type="area" data={data} title="Task & Weight Distribution" height={400} />;
};

export default ChartArea;
