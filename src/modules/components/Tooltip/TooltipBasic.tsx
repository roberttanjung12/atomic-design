import { Button } from '@mui/material';
import Tooltip from '@/@dront/components/Tooltip';

const TooltipBasic = () => {
  return (
    <Tooltip title="Save Changes" content="Click this button to save all your edits." placement="top">
      <Button variant="contained">Save</Button>
    </Tooltip>
  );
};

export default TooltipBasic;
