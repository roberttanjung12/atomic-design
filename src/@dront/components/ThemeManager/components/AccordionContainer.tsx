import type { ReactNode } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';

interface AccordionContainerProps {
  title: ReactNode;
  children: ReactNode;
}

/**
 * Renders an accordion container with a customizable title and content.
 *
 * @param {AccordionContainerProps} props - The props for the AccordionContainer component.
 * @param {ReactNode} props.title - The title displayed in the accordion summary.
 * @param {ReactNode} props.children - The content to be rendered inside the accordion details.
 * @returns {Readonly<ReactNode>} The rendered Accordion component.
 *
 * @remarks
 * - Uses Material UI's Accordion, AccordionSummary, and AccordionDetails components.
 * - The accordion is expanded by default, has no elevation, and uses a square style.
 * - The summary section includes a customizable background color and border styling.
 */
const AccordionContainer = ({ title, children }: AccordionContainerProps): Readonly<ReactNode> => {
  return (
    <Accordion defaultExpanded={false} square elevation={0}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        sx={({ palette }) => ({
          backgroundColor: 'grey.100',
          border: `1px solid ${palette.divider}`,
          borderBottom: `1px solid ${palette.divider}`
        })}
      >
        {title}
      </AccordionSummary>
      <AccordionDetails sx={{ p: 1 }}>{children}</AccordionDetails>
    </Accordion>
  );
};

export default AccordionContainer;
