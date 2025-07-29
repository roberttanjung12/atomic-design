import {
  DarkModeOutlined as DarkModeOutlinedIcon,
  LightModeOutlined as LightModeOutlinedIcon
} from '@mui/icons-material';
import { IconButton, Tooltip } from '@mui/material';
import { themeActions, useThemeStore } from '@/@dront/store';

const Mode = () => {
  const [activeMode] = useThemeStore('activeMode');

  const onClick = () => {
    themeActions.toggleActiveMode();
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
