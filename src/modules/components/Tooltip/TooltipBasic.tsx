import { Button } from '@mui/material';
import Tooltip from '@/@dront/components/Tooltip';

/**
 * Basic Tooltip Example
 *
 * Demonstrates how to use the Tooltip component to wrap a child element.
 * The tooltip displays helpful context when users hover over or focus on the button.
 */
const TooltipBasic = () => {
  return (
    <Tooltip title="Save Changes" content="Click this button to save all your edits." placement="top">
      <Button variant="contained">Save</Button>
    </Tooltip>
  );
};

export default TooltipBasic;
