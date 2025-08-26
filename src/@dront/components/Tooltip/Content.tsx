import { Box, Typography } from '@mui/material';
import type { TooltipContentProps } from './types';

/**
 * Renders the content of a tooltip, displaying a title and additional content.
 *
 * @param title - The main title to display in the tooltip.
 * @param content - The supplementary content to display below the title.
 */
const TooltipContent = ({ title, content }: TooltipContentProps) => {
  return (
    <Box p={1}>
      <Typography fontWeight={600} component={Box}>
        {title}
      </Typography>
      <Typography component={Box}>{content}</Typography>
    </Box>
  );
};

export default TooltipContent;
