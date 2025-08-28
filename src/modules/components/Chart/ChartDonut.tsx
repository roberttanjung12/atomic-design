import Chart from '@/@dront/components/Chart';

const ChartDonut = () => {
  const data = [
    { name: 'CRING', value: 335 },
    { name: 'QRISAN', value: 310 },
    { name: 'Vena V2', value: 234 },
    { name: 'Spectrum', value: 135 },
    { name: 'BNI QRIS', value: 1548 }
  ];

  return <Chart type="donut" data={data} title="Project Results" height={300} />;
};

export default ChartDonut;
