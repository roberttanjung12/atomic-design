import { Button, ButtonGroup } from '@mui/material';
import { Accordion } from '@/@dront/components';

const AccordionWithActions = () => {
  const accordionItems = [
    {
      title: 'Project Alpha',
      detail:
        'A comprehensive web application for managing customer relationships and sales pipelines. This project includes user authentication, dashboard analytics, and reporting features.',
      actions: (
        <ButtonGroup variant="outlined" size="small">
          <Button>Edit</Button>
          <Button>View</Button>
          <Button color="error">Delete</Button>
        </ButtonGroup>
      )
    },
    {
      title: 'Project Beta',
      detail:
        'Mobile application development project focused on creating a cross-platform solution for inventory management and tracking.',
      actions: (
        <ButtonGroup variant="outlined" size="small">
          <Button>Edit</Button>
          <Button>View</Button>
          <Button color="error">Delete</Button>
        </ButtonGroup>
      )
    },
    {
      title: 'Project Gamma',
      detail:
        'Data analytics platform that processes large datasets and provides real-time insights through interactive visualizations and automated reporting.',
      actions: (
        <ButtonGroup variant="outlined" size="small">
          <Button>Edit</Button>
          <Button>View</Button>
          <Button color="error">Delete</Button>
        </ButtonGroup>
      )
    }
  ];

  return <Accordion id="actions-accordion" list={accordionItems} variant="contained" />;
};

export default AccordionWithActions;
