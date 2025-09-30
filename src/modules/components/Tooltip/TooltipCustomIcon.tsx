import { HelpOutline, Warning, Star } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import Tooltip from '@/@dront/components/Tooltip';

/**
 * Tooltip Custom Icon Examples
 *
 * Demonstrates how to use custom icons with the Tooltip component.
 * Shows different icon types providing contextual help.
 */
const TooltipCustomIcon = () => {
  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <Box display="flex" alignItems="center" gap={1}>
        <Typography variant="body1">Need help with this feature?</Typography>
        <Tooltip
          title="Help Information"
          content="Click here to access our comprehensive help documentation and tutorials."
          placement="top"
          icon={<HelpOutline />}
        />
      </Box>

      <Box display="flex" alignItems="center" gap={1}>
        <Typography variant="body1">Important notice</Typography>
        <Tooltip
          title="Warning"
          content="This action cannot be undone. Please proceed with caution."
          placement="top"
          icon={<Warning color="warning" />}
        />
      </Box>

      <Box display="flex" alignItems="center" gap={1}>
        <Typography variant="body1">Premium feature</Typography>
        <Tooltip
          title="Premium Feature"
          content="This feature is available for Pro and Enterprise subscribers only."
          placement="top"
          icon={<Star color="primary" />}
        />
      </Box>
    </Box>
  );
};

export default TooltipCustomIcon;
