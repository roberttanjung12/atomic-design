import Chart from '@/@dront/components/Chart';

const ChartRadar = () => {
  const data = {
    indicator: [
      { name: 'Sales', max: 10000 },
      { name: 'Marketing', max: 20000 },
      { name: 'Development', max: 20000 },
      { name: 'Customer Support', max: 20000 },
      { name: 'HR', max: 10000 },
      { name: 'Administration', max: 10000 }
    ],
    series: [
      {
        name: 'Budget',
        value: [5000, 14000, 18000, 9000, 7000, 6000]
      },
      {
        name: 'Actual',
        value: [4500, 12000, 17000, 9500, 6000, 4000]
      }
    ]
  };

  return <Chart type="radar" data={data} title="Department Budget vs. Actual" height={350} />;
};

export default ChartRadar;
