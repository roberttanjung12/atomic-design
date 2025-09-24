import Chart from '@/@dront/components/Chart';

const ChartSankey = () => {
  const data = {
    nodes: [
      { name: 'Website' },
      { name: 'Social Media' },
      { name: 'Email' },
      { name: 'Direct' },
      { name: 'Free Trial' },
      { name: 'Demo' },
      { name: 'Purchase' }
    ],
    links: [
      { source: 'Website', target: 'Free Trial', value: 50 },
      { source: 'Website', target: 'Demo', value: 30 },
      { source: 'Social Media', target: 'Free Trial', value: 40 },
      { source: 'Social Media', target: 'Demo', value: 20 },
      { source: 'Email', target: 'Free Trial', value: 25 },
      { source: 'Email', target: 'Demo', value: 25 },
      { source: 'Direct', target: 'Free Trial', value: 10 },
      { source: 'Direct', target: 'Demo', value: 15 },
      { source: 'Free Trial', target: 'Purchase', value: 45 },
      { source: 'Demo', target: 'Purchase', value: 55 }
    ]
  };

  return <Chart type="sankey" data={data} title="Engineer Acquisition Flow" height={350} />;
};

export default ChartSankey;
