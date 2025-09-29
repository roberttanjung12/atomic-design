import { Favorite, MoreVert } from '@mui/icons-material';
import {
  Alert,
  Avatar,
  Badge,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Chip,
  CircularProgress,
  Fab,
  IconButton,
  LinearProgress,
  Paper,
  Slider,
  Switch,
  Tooltip,
  Typography,
  Grid,
  alpha
} from '@mui/material';
import { useFormContext } from 'react-hook-form';
import type { IThemeManager } from '../ThemeManager.type';

interface ThemeManagerPreviewProps {
  focusSidebar: string;
  position: 'fixed' | 'static';
}

/**
 * Renders an interactive preview of theme colors and logos for the Theme Manager.
 *
 * This component displays various Material UI elements (buttons, alerts, cards, progress indicators, etc.)
 * styled according to the current palette values from the theme form context. It allows users to visualize
 * how changes to palette colors and logos affect the appearance of UI components in real-time.
 *
 * @param focusSidebar - Indicates if the sidebar should be focused (usage depends on parent context).
 * @param position - The position of the preview container, affects layout spacing.
 *
 * @remarks
 * - Uses `useFormContext<IThemeManager>()` to watch palette and logo values.
 * - Supports dynamic preview of primary, secondary, error, success, info, and warning colors.
 * - Includes a logo preview section for different logo variants (light/dark, horizontal/vertical).
 * - Intended for use within a theme customization workflow.
 */
const ThemeManagerPreview = ({ focusSidebar, position }: ThemeManagerPreviewProps) => {
  const { watch } = useFormContext<IThemeManager>();

  return (
    <Box sx={{ p: 2, bgcolor: watch('palette.background.default') }}>
      {focusSidebar !== 'logo' && (
        <>
          <Box sx={{ mt: position === 'fixed' ? 3 : 0, mb: 3 }}>
            <Typography variant="h4" component="h1" gutterBottom sx={{ color: watch('palette.text.primary') }}>
              Interactive Preview
            </Typography>
            <Typography variant="body1" sx={{ color: watch('palette.text.secondary') }}>
              Change the palette colors to see components update in real-time.
            </Typography>
          </Box>

          {/* Buttons and FAB */}
          <Paper
            sx={{
              display: 'flex',
              gap: 2,
              alignItems: 'center',
              flexWrap: 'wrap',
              mb: 3,
              p: 2,
              background: watch('palette.background.paper')
            }}
          >
            <Button
              variant="contained"
              color="primary"
              sx={{
                background: watch('palette.primary.main'),
                color: watch('palette.primary.contrastText'),
                '&:hover': {
                  background: watch('palette.primary.dark')
                }
              }}
            >
              Primary
            </Button>
            <Button
              variant="contained"
              color="secondary"
              sx={{
                background: watch('palette.secondary.main'),
                color: watch('palette.secondary.contrastText'),
                '&:hover': {
                  background: watch('palette.secondary.dark')
                }
              }}
            >
              Secondary
            </Button>
            <Button
              variant="outlined"
              color="error"
              sx={{
                borderColor: watch('palette.error.main'),
                color: watch('palette.error.main'),
                '&:hover': {
                  background: watch('palette.error.main'),
                  color: watch('palette.error.contrastText')
                }
              }}
            >
              Error
            </Button>
            <Fab
              color="primary"
              aria-label="like"
              size="small"
              sx={{
                background: watch('palette.primary.main'),
                '&:hover': { background: watch('palette.primary.dark') }
              }}
            >
              <Favorite />
            </Fab>
            <Badge
              badgeContent={4}
              color="secondary"
              sx={{
                '& .MuiBadge-badge': {
                  background: watch('palette.primary.main'),
                  color: watch('palette.primary.contrastText')
                }
              }}
            >
              <Chip
                label="Chip"
                color="success"
                sx={{
                  background: watch('palette.secondary.main'),
                  color: watch('palette.secondary.contrastText')
                }}
              />
            </Badge>
          </Paper>

          {/* Alerts */}
          <Paper
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              mb: 3,
              p: 2,
              background: watch('palette.background.paper')
            }}
          >
            <Alert
              severity="success"
              sx={{
                background: alpha(watch('palette.success.light') ?? '', 0.2),
                color: watch('palette.success.main')
              }}
              onClose={() => {}}
            >
              This is a success alert — check it out!
            </Alert>
            <Alert
              severity="info"
              sx={{ background: alpha(watch('palette.info.light') ?? '', 0.2), color: watch('palette.info.main') }}
            >
              This is an info alert.
            </Alert>
            <Alert
              severity="warning"
              sx={{
                background: alpha(watch('palette.warning.light') ?? '', 0.2),
                color: watch('palette.warning.main')
              }}
            >
              This is a warning alert.
            </Alert>
            <Alert
              severity="error"
              sx={{ background: alpha(watch('palette.error.light') ?? '', 0.2), color: watch('palette.error.main') }}
            >
              This is an error alert.
            </Alert>
          </Paper>

          {/* Card and other components */}
          <Grid container spacing={2}>
            <Card sx={{ maxWidth: 400, background: watch('palette.background.paper'), p: 0 }}>
              <CardHeader
                avatar={
                  <Avatar
                    sx={{ bgcolor: watch('palette.primary.main'), color: watch('palette.primary.contrastText') }}
                    aria-label="recipe"
                  >
                    P
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVert />
                  </IconButton>
                }
                title="Card with Primary Color"
                subheader="September 24, 2025"
                sx={{
                  color: watch('palette.text.primary'),
                  '& .MuiCardHeader-subheader': { color: watch('palette.text.secondary') }
                }}
              />
              <CardContent>
                <Typography variant="body2" color={watch('palette.text.primary')}>
                  This card demonstrates how primary, secondary, and text colors are applied to complex components. The
                  avatar background uses `primary.main`.
                </Typography>
              </CardContent>
            </Card>

            {/* Progress and Controls */}
            <Paper sx={{ width: '100%', maxWidth: 400, p: 2, background: watch('palette.background.paper') }}>
              <Typography gutterBottom color={watch('palette.text.primary')} sx={{ mb: 2 }}>
                Progress Indicators
              </Typography>
              <CircularProgress sx={{ mb: 2, mr: 2, color: watch('palette.error.main') }} />
              <CircularProgress sx={{ mb: 2, color: watch('palette.success.main') }} />
              <LinearProgress sx={{ mb: 2, color: watch('palette.info.main') }} />
              <Slider defaultValue={30} sx={{ color: watch('palette.primary.main') }} />
              <Box>
                <Tooltip title="Toggle me!">
                  <Switch
                    defaultChecked
                    sx={{
                      '& .Mui-checked': {
                        '& .MuiSwitch-thumb': { backgroundColor: watch('palette.warning.main') }
                      },
                      '& .MuiSwitch-track': {
                        backgroundColor: `${watch('palette.warning.light')} !important`
                      }
                    }}
                  />
                </Tooltip>
              </Box>
            </Paper>

            {/* Text & Divider Preview Section */}
            <Card sx={{ maxWidth: 400, background: watch('palette.background.paper'), p: 0 }}>
              <CardHeader title="Text & Divider Colors" sx={{ color: watch('palette.text.primary') }} />
              <CardContent>
                <Typography variant="body1" sx={{ color: watch('palette.text.primary') }}>
                  This is the primary text color. It's used for main content and titles.
                </Typography>
                <Typography variant="body2" sx={{ color: watch('palette.text.secondary'), mt: 1 }}>
                  This is the secondary text color. Ideal for subtitles and supplementary information.
                </Typography>
                <Typography variant="body2" sx={{ color: watch('palette.text.disabled'), mt: 1 }}>
                  This is the disabled text color, used for inactive or placeholder text.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </>
      )}

      {/* Logo Section */}
      {focusSidebar !== 'palette' && (
        <Paper
          sx={{
            width: '100%',
            p: 2,
            mt: 2,
            background: watch('palette.background.paper')
          }}
        >
          <Typography variant="h6" gutterBottom sx={{ color: watch('palette.text.primary') }}>
            Logo Previews
          </Typography>
          <Grid container spacing={2}>
            {[
              { key: 'light', label: 'Light', bg: watch('palette.primary.dark') },
              { key: 'dark', label: 'Dark', bg: '#FFFFFF' },
              { key: 'lightHorizontal', label: 'Light Horizontal', bg: watch('palette.primary.dark') },
              { key: 'darkHorizontal', label: 'Dark Horizontal', bg: '#FFFFFF' },
              { key: 'lightVertical', label: 'Light Vertical', bg: watch('palette.primary.dark') },
              { key: 'darkVertical', label: 'Dark Vertical', bg: '#FFFFFF' }
            ].map(logoInfo => {
              const logoData = watch(`logo.${logoInfo.key as keyof IThemeManager['logo']}`);
              const logoUrl = logoData?.url;

              return (
                <Grid size={{ xs: 12, md: 6 }} key={logoInfo.key}>
                  <Typography
                    variant="caption"
                    sx={{
                      color: watch('palette.text.secondary'),
                      display: 'block',
                      mb: 0.5
                    }}
                  >
                    {logoInfo.label}
                  </Typography>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: 80,
                      p: 2,
                      borderRadius: 1,
                      backgroundColor: logoInfo.bg,
                      border: `1px solid ${watch('palette.grey.A400')}`
                    }}
                  >
                    {logoUrl ? (
                      <Box
                        component="img"
                        src={logoUrl}
                        alt={`${logoInfo.label} Preview`}
                        sx={{
                          maxWidth: '100%',
                          maxHeight: '100%',
                          objectFit: 'contain'
                        }}
                      />
                    ) : (
                      <Typography
                        variant="body2"
                        sx={{ color: logoInfo.key.includes('light') ? '#FFFFFF' : watch('palette.primary.dark') }}
                      >
                        Not Set
                      </Typography>
                    )}
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Paper>
      )}
    </Box>
  );
};

export default ThemeManagerPreview;
