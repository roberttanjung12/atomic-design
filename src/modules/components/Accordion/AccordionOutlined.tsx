import { Accordion } from '@/@dront/components';

const AccordionOutlined = () => {
  const accordionItems = [
    {
      title: 'FAQ - Getting Started',
      detail:
        'Learn how to set up your account, navigate the interface, and get started with the basic features of our platform.'
    },
    {
      title: 'FAQ - Troubleshooting',
      detail:
        'Find solutions to common issues, error messages, and technical problems you might encounter while using the application.'
    },
    {
      title: 'FAQ - Advanced Features',
      detail:
        'Discover advanced functionality, integration options, and expert tips to maximize your productivity with our tools.'
    }
  ];

  return <Accordion id="outlined-accordion" list={accordionItems} variant="outlined" />;
};

export default AccordionOutlined;
