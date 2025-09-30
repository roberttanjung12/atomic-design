import { Box, Typography } from '@mui/material';
import Tooltip from '@/@dront/components/Tooltip';

/**
 * Tooltip with Icon Example
 *
 * Demonstrates the standalone icon mode of the Tooltip component.
 * When no children are provided, the component renders an informational icon
 * that displays the tooltip content on hover.
 */
const TooltipIcon = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      <Typography variant="body1">Your current plan: Pro</Typography>
      <Tooltip
        title="Billing Details"
        content="The Pro plan includes unlimited project access and priority support."
        placement="right"
      />
    </Box>
  );
};

export default TooltipIcon;
