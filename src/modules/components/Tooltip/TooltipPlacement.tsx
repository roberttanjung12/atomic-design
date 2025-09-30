import { Box, Button, Stack } from '@mui/material';
import Tooltip from '@/@dront/components/Tooltip';

/**
 * Tooltip Placement Examples
 *
 * Demonstrates different placement options for the Tooltip component.
 * Shows how tooltips can be positioned relative to their target element.
 */
const TooltipPlacement = () => {
  return (
    <Stack spacing={3}>
      <Box display="flex" gap={2} flexWrap="wrap">
        <Tooltip title="Top Placement" content="This tooltip appears above the button." placement="top">
          <Button variant="outlined">Top</Button>
        </Tooltip>
        <Tooltip title="Right Placement" content="This tooltip appears to the right of the button." placement="right">
          <Button variant="outlined">Right</Button>
        </Tooltip>
        <Tooltip title="Bottom Placement" content="This tooltip appears below the button." placement="bottom">
          <Button variant="outlined">Bottom</Button>
        </Tooltip>
        <Tooltip title="Left Placement" content="This tooltip appears to the left of the button." placement="left">
          <Button variant="outlined">Left</Button>
        </Tooltip>
      </Box>
    </Stack>
  );
};

export default TooltipPlacement;
