import Chart from '@/@dront/components/Chart';

const ChartSunburst = () => {
  const data = {
    name: 'Root',
    children: [
      {
        name: 'Category 1',
        children: [
          {
            name: 'Sub A',
            value: 15,
            children: [
              { name: 'Item 1', value: 8 },
              { name: 'Item 2', value: 7 }
            ]
          },
          {
            name: 'Sub B',
            value: 10
          }
        ]
      },
      {
        name: 'Category 2',
        children: [
          { name: 'Sub C', value: 20 },
          { name: 'Sub D', value: 15 }
        ]
      },
      {
        name: 'Category 3',
        value: 25
      }
    ]
  };

  return <Chart type="sunburst" data={data} title="Project Allocation Breakdown" height={300} />;
};

export default ChartSunburst;
