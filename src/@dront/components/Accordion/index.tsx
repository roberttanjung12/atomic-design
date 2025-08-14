import { useMemo, type ReactNode } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Accordion as TheAccordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  AccordionActions,
  Box
} from '@mui/material';
import { Stack } from '@mui/system';
import type { AccordionPropVariant, TheAccordionProps } from './type-props';

const Accordion = ({
  id = 'accordion',
  list,
  variant = 'contained',
  accordion,
  summary,
  details,
  actions
}: TheAccordionProps): Readonly<ReactNode> => {
  const styles = useMemo(() => {
    const set: {
      variant: AccordionPropVariant['variant'];
      bgcolor: string;
      border: number;
      borderRadius: number | string;
      color: string;
    }[] = [
      { variant: 'contained', bgcolor: 'primary.main', border: 0, borderRadius: '5px', color: 'primary.contrastText' },
      { variant: 'outlined', bgcolor: 'transparent', border: 1, borderRadius: 0, color: 'text.primary' }
    ];

    return (
      set.find(item => item.variant === variant) || {
        variant: 'contained',
        bgcolor: 'primary.main',
        border: 0,
        borderRadius: '5px',
        color: 'primary.contrastText'
      }
    );
  }, [variant]);

  return (
    <Stack data-testid="Accordion" spacing={4}>
      {list
        .map((item, index) => ({ ...item, key: `K-${index}` }))
        .map((item, index) => (
          <TheAccordion
            key={item.key}
            sx={{
              bgcolor: styles.bgcolor,
              borderRadius: `${styles.borderRadius} !important`,
              boxShadow: 'unset',
              borderBottomColor: ({ palette }) => palette.grey[400],
              borderBottomStyle: 'solid',
              borderBottomWidth: styles.border
            }}
            {...accordion}
          >
            <AccordionSummary
              aria-controls={`panel-${id}-${index + 1}-content`}
              id={`panel-${id}-${index + 1}-header`}
              expandIcon={<ExpandMoreIcon />}
              sx={{ color: styles.color, '.MuiSvgIcon-root': { color: styles.color } }}
              {...summary}
            >
              <Typography component="span">{item.title}</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ color: styles.color }} {...details}>
              <Box pl={2}>{item.detail}</Box>
            </AccordionDetails>
            {item.actions && <AccordionActions {...actions}>{item.actions}</AccordionActions>}
          </TheAccordion>
        ))}
    </Stack>
  );
};

export default Accordion;
