import React from 'react';
import { Box, Stack } from '@mui/material';
import { CodeViewer, Section, TextHighlighter } from '@/@dront/components';
import ParagraphWrapper from '@/@dront/components/ParagraphWrapper';
import TooltipBasic from './TooltipBasic';
import tooltipBasicCode from './TooltipBasic?raw';
import TooltipIcon from './TooltipIcon';
import tooltipIconCode from './TooltipIcon?raw';

const TooltipComp = () => {
  return (
    <Stack spacing={4}>
      <TextHighlighter text="`Tooltip` is a customable tooltip component built on top of Material UI’s Tooltip. It provides a flexible way to display rich content on hover or focus, with options for a standalone icon or wrapping a child element." />

      <Section title="Basic">
        <ParagraphWrapper>
          <TextHighlighter text="The component can be used to wrap a child element, providing a rich title and content. This is the primary use case for attaching a tooltip to an interactive element like a button or a link." />
          <TextHighlighter text="Renders a basic tooltip attached to a button, showing a title and descriptive content." />
        </ParagraphWrapper>

        <CodeViewer code={tooltipBasicCode}>
          <TooltipBasic />
        </CodeViewer>
      </Section>

      <Section title="With Icon">
        <ParagraphWrapper>
          <TextHighlighter text="The `Tooltip` also functions as a standalone component by rendering an informational icon. This is useful for providing inline context or help text without needing to wrap another element." />
          <TextHighlighter text="Renders a simple info icon that displays the tooltip on hover." />
        </ParagraphWrapper>

        <CodeViewer code={tooltipIconCode}>
          <TooltipIcon />
        </CodeViewer>
      </Section>

      <Section title="Props">
        <Box mb={2}>
          <TextHighlighter text="The `Tooltip` component accepts a set of custom props to control its content and appearance." />
        </Box>
        <ParagraphWrapper>
          <TextHighlighter text="&#8226; `title`: The main heading for the tooltip's content." />
          <TextHighlighter text="&#8226; `content`: The main body text of the tooltip." />
          <TextHighlighter text="&#8226; `icon`: Optional. A custom icon to display when no children are provided." />
          <TextHighlighter text="&#8226; `placement`: The position of the tooltip relative to its children." />
        </ParagraphWrapper>
      </Section>
    </Stack>
  );
};

export default TooltipComp;
