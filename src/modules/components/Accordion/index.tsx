import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import { CodeViewer, Section, TextHighlighter } from '@/@dront/components';
import AccordionBasic from './AccordionBasic';
import accordionBasicCode from './AccordionBasic?raw';
import AccordionOutlined from './AccordionOutlined';
import accordionOutlinedCode from './AccordionOutlined?raw';
import AccordionWithActions from './AccordionWithActions';
import accordionWithActionsCode from './AccordionWithActions?raw';

const AccordionModule = () => {
  return (
    <Stack spacing={4}>
      <TextHighlighter text="The `Accordion` component is a collapsible content container that allows users to toggle the visibility of sections. It supports multiple items, custom styling variants, and optional action buttons for enhanced user interaction." />

      <Section title="Basic">
        <Typography mb={2}>
          This example demonstrates a basic accordion with the default 'contained' variant. It features a clean design
          with a primary background color and expandable sections that reveal detailed content when clicked.
        </Typography>

        <CodeViewer code={accordionBasicCode}>
          <AccordionBasic />
        </CodeViewer>
      </Section>

      <Section title="Outlined Variant">
        <Typography mb={2}>
          This example shows the accordion using the 'outlined' variant. It provides a more minimal appearance with
          transparent background and border styling, suitable for interfaces that require a lighter visual treatment.
        </Typography>

        <CodeViewer code={accordionOutlinedCode}>
          <AccordionOutlined />
        </CodeViewer>
      </Section>

      <Section title="With Actions">
        <Typography mb={2}>
          This example demonstrates an accordion with action buttons in the accordion items. Actions provide additional
          functionality like edit, delete, or other operations that can be performed on each accordion item.
        </Typography>

        <CodeViewer code={accordionWithActionsCode}>
          <AccordionWithActions />
        </CodeViewer>
      </Section>
    </Stack>
  );
};

export default AccordionModule;
