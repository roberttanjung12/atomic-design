import type { ReactNode, Dispatch, SetStateAction } from 'react';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Accordion, AccordionDetails, AccordionSummary, Box, Collapse, Typography } from '@mui/material';
import PencilWithRulerIcon from '../components/PencilWithRulerIcon';
import FormLogo from './forms/FormLogo';
import FormPalette from './forms/FormPalette';

type Content = {
  id: string;
  title: string;
  form: ReactNode;
};

const contents: Content[] = [
  {
    id: 'logo',
    title: 'Logo',
    form: <FormLogo />
  },
  {
    id: 'palette',
    title: 'Palette',
    form: <FormPalette />
  }
];

interface SidebarContentProps {
  focusSidebar: string;
  setFocusSidebar: Dispatch<SetStateAction<string>>;
}

/**
 * Renders the sidebar content for the Theme Manager, including collapsible panels for customizing website design.
 *
 * @param focusSidebar - The currently focused sidebar panel's identifier, or an empty string if none is focused.
 * @param setFocusSidebar - Callback to update the focused sidebar panel.
 * @returns The sidebar content as a readonly ReactNode, including introductory information and a list of collapsible accordions for theme customization.
 */
const SidebarContent = ({ focusSidebar, setFocusSidebar }: SidebarContentProps): Readonly<ReactNode> => {
  const handleFocusSidebar = (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
    setFocusSidebar(isExpanded ? panel : '');
  };

  return (
    <>
      <Collapse in={!focusSidebar}>
        <Box sx={{ p: 2 }}>
          <PencilWithRulerIcon />

          <Typography fontWeight="bold" mt={4} variant="body1">
            Theme Manager
          </Typography>
          <Typography variant="body2">
            Customize the design of your website; you can adjust colors to fit your needs.
          </Typography>
        </Box>
      </Collapse>

      <Box sx={{ background: 'salmon', mb: 8 }}>
        {contents.map((content, index) => (
          <Collapse key={content.id} in={focusSidebar === content.id || !focusSidebar}>
            <Accordion
              square
              elevation={0}
              expanded={focusSidebar === content.id}
              id={`${content.id}-accordion`}
              onChange={handleFocusSidebar(content.id)}
            >
              <AccordionSummary
                expandIcon={<ChevronRightIcon />}
                sx={({ palette }) => ({
                  backgroundColor: 'grey.100',
                  border: `1px solid ${palette.divider}`,
                  borderBottom: contents.length !== index + 1 && !focusSidebar ? 'none' : `1px solid ${palette.divider}`
                })}
              >
                {content.title}
              </AccordionSummary>
              <AccordionDetails sx={{ p: '0 !important' }}>{content.form}</AccordionDetails>
            </Accordion>
          </Collapse>
        ))}
      </Box>
    </>
  );
};

export default SidebarContent;
