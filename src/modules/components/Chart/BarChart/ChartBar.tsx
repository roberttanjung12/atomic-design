import Chart from '@/@dront/components/Chart';

const ChartBar = () => {
  const data = {
    xAxis: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    series: [120, 200, 150, 80, 170, 220]
  };

  return <Chart type="bar" data={data} title="Monthly Performace 2025" height={300} />;
};

export default ChartBar;
