import {
  DarkModeOutlined as DarkModeOutlinedIcon,
  LightModeOutlined as LightModeOutlinedIcon
} from '@mui/icons-material';
import { IconButton, Tooltip } from '@mui/material';
import { setAppearance, useAppearance } from '@/@dront/context/AppearanceProvider';

const Mode = () => {
  const { appearanceState, appearanceDispatch } = useAppearance();
  const { activeMode } = appearanceState;

  const onClick = () => {
    appearanceDispatch(setAppearance('activeMode', activeMode === 'light' ? 'dark' : 'light'));
  };

  const Icon = activeMode === 'light' ? DarkModeOutlinedIcon : LightModeOutlinedIcon;
  const tooltipTitle = activeMode === 'light' ? 'Dark Mode' : 'Light Mode';

  return (
    <IconButton size="large" color="inherit" onClick={onClick}>
      <Tooltip title={tooltipTitle} arrow>
        <Icon />
      </Tooltip>
    </IconButton>
  );
};

export default Mode;
