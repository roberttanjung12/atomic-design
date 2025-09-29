import { useState, type ReactNode } from 'react';
import { Box, Grid } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';
import type { IThemeManager } from './ThemeManager.type';
import ThemeManagerHeader from './ThemeManagerHeader';
import ThemeManagerPreview from './ThemeManagerPreview';
import ThemeManagerSidebar from './ThemeManagerSidebar';

/**
 * @constant {IThemeManager} defaultTheme
 * @description Provides the default theme configuration for the ThemeManager.
 * This object is used as the initial state if no `defaultTheme` prop is provided.
 * It includes default logos for light and dark modes, as well as a comprehensive color palette.
 * The color palette is based on a specific design system (e.g., Material Design color palette).
 */
export const defaultTheme: IThemeManager = {
  logo: {
    dark: {
      url: '/logo/atomic-design/Atomic Design - Main.png',
      file: null
    },
    darkHorizontal: {
      url: '/logo/atomic-design/Atomic Design - Main - Horizontal.png',
      file: null
    },
    darkVertical: {
      url: '/logo/atomic-design/Atomic Design - Main - Vertical.png',
      file: null
    },
    light: {
      url: '/logo/atomic-design/Atomic Design - Light.png',
      file: null
    },
    lightHorizontal: {
      url: '/logo/atomic-design/Atomic Design - Light- Horizontal.png',
      file: null
    },
    lightVertical: {
      url: '/logo/atomic-design/Atomic Design - Light- Vertical.png',
      file: null
    }
  },
  palette: {
    primary: {
      main: '#0052CC', // Brandeis Blue DB 500 (Base) [cite: 11]
      light: '#5E97F6', // Brandeis Blue DB 300 [cite: 9]
      dark: '#003C9A', // Brandeis Blue DB 700 [cite: 13]
      contrastText: '#FFFFFF'
    },
    secondary: {
      main: '#29B6F6', // Picton Blue PB 500 (Base) [cite: 24]
      light: '#81D4FA', // Picton Blue PB 300 [cite: 22]
      dark: '#0288D1', // Picton Blue PB 700 [cite: 26]
      contrastText: '#FFFFFF'
    },
    error: {
      main: '#F44336', // Red PB 500 [cite: 37]
      light: '#E57373', // Red PB 300 [cite: 35]
      dark: '#D32F2F', // Red PB 700 [cite: 39]
      contrastText: '#FFFFFF'
    },
    warning: {
      main: '#FF9800', // Orange PB 500 [cite: 50]
      light: '#FFB74D', // Orange PB 300 [cite: 48]
      dark: '#F57C00', // Orange PB 700 [cite: 52]
      contrastText: '#FFFFFF'
    },
    info: {
      main: '#2196F3', // Blue PB 500 [cite: 77]
      light: '#64B5F6', // Blue PB 300 [cite: 74]
      dark: '#1976D2', // Blue PB 700 [cite: 79]
      contrastText: '#FFFFFF'
    },
    success: {
      main: '#4CAF50', // Green PB 500 [cite: 63]
      light: '#81C784', // Green PB 300 [cite: 61]
      dark: '#388E3C', // Green PB 700 [cite: 65]
      contrastText: '#FFFFFF'
    },
    grey: {
      50: '#FAFAFA', // Neutral 50 [cite: 127]
      100: '#F5F5F5', // Neutral 100 [cite: 128]
      200: '#EEEEEE', // Neutral 200 [cite: 129]
      300: '#E0E0E0', // Neutral 300 [cite: 130]
      400: '#BDBDBD', // Neutral 400 [cite: 131]
      500: '#9E9E9E', // Neutral 500 (Base) [cite: 132]
      600: '#757575', // Neutral 600 [cite: 132]
      700: '#616161', // Neutral 700 [cite: 133]
      800: '#424242', // Neutral 800 [cite: 134]
      900: '#212121', // Neutral 900 [cite: 135]
      // Accent (A) values are not available in the Figma, so we map them to existing greyscale values.
      A100: '#F5F5F5',
      A200: '#EEEEEE',
      A400: '#BDBDBD',
      A700: '#616161'
    },
    text: {
      primary: '#212121', // Neutral 900 [cite: 135]
      secondary: '#616161', // Neutral 700 [cite: 133]
      disabled: '#BDBDBD' // Neutral 400 [cite: 131]
    },
    background: {
      paper: '#FFFFFF',
      default: '#F4F7FE'
    }
  }
};

/**
 * @interface ThemeManagerProps
 * @description Defines the props accepted by the ThemeManager component.
 */
interface ThemeManagerProps {
  /**
   * @property {ReactNode | ((props: { values: IThemeManager, focusSidebar: string }) => ReactNode)} [children]
   * @description The content to be displayed within the theme manager's preview area.
   * It can be a standard ReactNode or a render prop function that receives the current theme values and the focused sidebar state.
   * This allows the preview content to be dynamically styled by the theme being edited.
   * If not provided, a default preview component (`ThemeManagerPreview`) is rendered.
   */
  children?: ReactNode | ((props: { values: IThemeManager; focusSidebar: string }) => ReactNode);
  /**
   * @property {IThemeManager} [defaultTheme]
   * @description An object representing the initial theme values. If not provided,
   * the `defaultTheme` constant exported from this file will be used.
   */
  defaultTheme?: IThemeManager;
  /**
   * @property {'fixed' | 'static'} [layoutPosition='fixed']
   * @default 'fixed'
   * @description Determines the positioning of the header and sidebar.
   * 'fixed' keeps them visible on screen during scroll, while 'static' lets them scroll with the page.
   */
  layoutPosition?: 'fixed' | 'static';
  /**
   * @property {() => void} [onCancel]
   * @description Callback function triggered when the user clicks the "Cancel" button in the header.
   */
  onCancel?: () => void;
  /**
   * @property {() => void} [onReset]
   * @description Callback function triggered when the user clicks the "Reset" button.
   * This function should handle the logic for reverting the theme to its initial state.
   */
  onReset?: () => void;
  /**
   * @property {(values: IThemeManager) => void} [onPublish]
   * @description Callback function triggered when the user clicks the "Publish" button.
   * It receives the current theme values as an argument.
   */
  onPublish?: (values: IThemeManager) => void;
}

/**
 * The main component for managing and live-previewing theme configurations.
 *
 * It provides a complete interface with a header for actions (publish, reset, cancel),
 * a collapsible sidebar with theme controls (e.g., color pickers), and a preview area.
 * The component's state is managed internally using `react-hook-form` for performance and scalability.
 *
 * @param {ThemeManagerProps} props - The props for the ThemeManager component.
 * @returns {Readonly<ReactNode>} The rendered theme management interface.
 *
 * @example
 * // Basic usage with the default preview component
 * <ThemeManager
 * onPublish={(theme) => console.log('Published theme:', theme)}
 * onCancel={() => console.log('Cancelled')}
 * />
 *
 * @example
 * // Usage with a custom preview component via a render prop
 * <ThemeManager>
 * {({ values }) => (
 * // Assuming you have a way to apply the theme, e.g., using MUI's ThemeProvider
 * <ThemeProvider theme={createTheme(values)}>
 * <YourAppPreview />
 * </ThemeProvider>
 * )}
 * </ThemeManager>
 */
const ThemeManager = ({
  children,
  defaultTheme: initialValues,
  layoutPosition = 'fixed',
  onCancel,
  onPublish,
  onReset
}: ThemeManagerProps): Readonly<ReactNode> => {
  const methods = useForm({ defaultValues: initialValues || defaultTheme });

  const [openSidebar, setOpenSidebar] = useState<boolean>(true);
  const [focusSidebar, setFocusSidebar] = useState<string>('');

  const handleToggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  const renderChildren = () => {
    if (typeof children === 'function') {
      return children({ values: methods.watch(), focusSidebar });
    }

    return children;
  };

  return (
    <FormProvider {...methods}>
      <ThemeManagerHeader
        position={layoutPosition}
        onCancel={onCancel}
        onPublish={onPublish}
        onReset={onReset}
        handleToggleSidebar={handleToggleSidebar}
      />

      {layoutPosition === 'static' ? (
        <Grid container>
          <Grid size={{ xs: 12, md: 3 }}>
            <ThemeManagerSidebar
              position={layoutPosition}
              openSidebar={openSidebar}
              handleToggleSidebar={handleToggleSidebar}
              focusSidebar={focusSidebar}
              setFocusSidebar={setFocusSidebar}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 9 }}>
            {children ? (
              renderChildren()
            ) : (
              <ThemeManagerPreview focusSidebar={focusSidebar} position={layoutPosition} />
            )}
          </Grid>
        </Grid>
      ) : (
        <>
          <ThemeManagerSidebar
            position={layoutPosition}
            openSidebar={openSidebar}
            handleToggleSidebar={handleToggleSidebar}
            focusSidebar={focusSidebar}
            setFocusSidebar={setFocusSidebar}
          />

          <Box sx={{ ml: { xs: 0, md: '180px', lg: '240px' }, mt: 8 }}>
            {children ? (
              renderChildren()
            ) : (
              <ThemeManagerPreview focusSidebar={focusSidebar} position={layoutPosition} />
            )}
          </Box>
        </>
      )}
    </FormProvider>
  );
};

export default ThemeManager;
