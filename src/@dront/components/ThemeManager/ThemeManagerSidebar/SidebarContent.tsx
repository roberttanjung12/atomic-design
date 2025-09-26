import { type ReactNode, useEffect, useState } from 'react';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Accordion, AccordionDetails, AccordionSummary, Box, Collapse, Typography } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import PencilWithRulerIcon from '../components/PencilWithRulerIcon';
import FormPalette from './forms/FormPalette';

type Content = {
  id: string;
  title: string;
  form: ReactNode;
};

const contents: Content[] = [
  {
    id: 'palette',
    title: 'Palette',
    form: <FormPalette />
  }
];

const SidebarContent = (): Readonly<ReactNode> => {
  const [focusContent, setFocusContent] = useState<string>('');
  const { formState } = useFormContext();

  const handleFocusContent = (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
    setFocusContent(isExpanded ? panel : '');
  };

  useEffect(() => {
    const isErrorBankInfo = formState.errors.email || formState.errors.bankName || formState.errors.contact;

    if (isErrorBankInfo && focusContent !== 'bank-information') {
      setFocusContent('bank-information');
    }
  }, [formState.errors, focusContent]);

  return (
    <>
      <Collapse in={!focusContent}>
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
          <Collapse key={content.id} in={focusContent === content.id || !focusContent}>
            <Accordion
              square
              elevation={0}
              expanded={focusContent === content.id}
              id={`${content.id}-accordion`}
              onChange={handleFocusContent(content.id)}
            >
              <AccordionSummary
                expandIcon={<ChevronRightIcon />}
                sx={({ palette }) => ({
                  backgroundColor: 'grey.100',
                  border: `1px solid ${palette.divider}`,
                  borderBottom: contents.length !== index + 1 && !focusContent ? 'none' : `1px solid ${palette.divider}`
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
