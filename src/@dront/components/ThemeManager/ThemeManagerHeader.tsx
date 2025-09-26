import type { ReactNode } from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, Button, IconButton, Typography } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import type { IThemeManager } from './ThemeManager.type';

interface ThemeManagerHeaderProps {
  handleToggleSidebar: () => void;
  onCancel?: () => void;
  onPublish?: (values: IThemeManager) => void;
  onReset?: () => void;
  position: 'fixed' | 'static';
}

/**
 * ThemeManagerHeader component renders the header section for the Theme Manager page.
 *
 * @param {ThemeManagerHeaderProps} props - The props for the ThemeManagerHeader component.
 * @param {() => void} props.handleToggleSidebar - Callback to toggle the sidebar visibility.
 * @param {() => void} props.onCancel - Callback to handle cancel action.
 * @param {() => void} props.onPublish - Callback to handle publish action.
 * @param {() => void} props.onReset - Callback to handle reset action.
 * @param {'fixed' | 'static'} props.position - The position of the header.
 *
 * @returns {JSX.Element} The rendered header, including navigation, title, and action buttons.
 *
 * @remarks
 * - Uses React Hook Form's context for form state and submission.
 * - Includes navigation back button, sidebar toggle for mobile, and "Reset" and "Publish" actions.
 * - "Publish" button is enabled only when the form is dirty.
 */
const ThemeManagerHeader = ({
  handleToggleSidebar,
  onCancel,
  onPublish = () => {},
  onReset,
  position
}: ThemeManagerHeaderProps): Readonly<ReactNode> => {
  const { handleSubmit, reset, formState } = useFormContext<IThemeManager>();

  return (
    <>
      <AppBar
        component="nav"
        sx={{
          backgroundColor: 'common.white',
          color: 'common.black',
          boxShadow: '0px 0px 8px #07626E1A',
          zIndex: 9999
        }}
        position={position}
      >
        <Box alignItems="center" display="flex" flexWrap="wrap" gap={4} px={6} py={2}>
          <IconButton size="small" onClick={onCancel}>
            <ArrowBackIosNewIcon />
          </IconButton>

          <Box sx={{ display: { xs: 'block', lg: 'none' } }}>
            <IconButton
              aria-label="open drawer"
              className="menu-btn"
              color="inherit"
              edge="start"
              size="large"
              sx={{ color: 'text.secondary' }}
              onClick={handleToggleSidebar}
            >
              <MenuIcon />
            </IconButton>
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'block' }, flexGrow: 1 }}>
            <Typography variant="h3">Theme Manager</Typography>
          </Box>

          <Box display="flex" gap={2} justifyContent="center" sx={{ flexGrow: { xs: 1, md: 0 } }}>
            <Button
              id="reset-design"
              variant="outlined"
              color="error"
              onClick={() => {
                if (onReset) onReset();
                reset();
              }}
            >
              Reset
            </Button>

            <Button
              disabled={!formState.isDirty}
              loading={formState.isSubmitting}
              id="submit-design"
              type="submit"
              variant="contained"
              onClick={handleSubmit(onPublish)}
            >
              Publish
            </Button>
          </Box>
        </Box>
      </AppBar>
    </>
  );
};

export default ThemeManagerHeader;
