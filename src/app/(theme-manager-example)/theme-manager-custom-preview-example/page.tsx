'use client';

import { ThemeProvider, createTheme, Typography, Box, Button } from '@mui/material';
import ThemeManager from '@/@dront/components/ThemeManager';

/**
 * A custom component to demonstrate how the render prop works.
 * This component will be styled by the theme being edited in real-time.
 */
const CustomAppPreview = () => (
  <Box sx={{ p: 3, textAlign: 'center' }}>
    <Typography variant="h4" color="primary" gutterBottom>
      My Custom Application Preview
    </Typography>
    <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
      The colors and styles of this content are controlled by the theme editor.
    </Typography>
    <Button variant="contained" color="primary" sx={{ mr: 1 }}>
      Primary Action
    </Button>
    <Button variant="outlined" color="secondary">
      Secondary Action
    </Button>
  </Box>
);

/**
 * An example demonstrating how to use a custom preview component.
 * We pass a render prop function as children to the ThemeManager.
 * This function receives the current theme values and applies them using MUI's ThemeProvider.
 */
const ThemeManagerCustomPreviewExample = () => {
  return (
    <Box sx={{ maxHeight: '480px', overflow: 'auto', border: '1px solid #eee' }}>
      <ThemeManager layoutPosition="static">
        {({ values }) => {
          // Create a theme on-the-fly from the values in the editor
          const liveTheme = createTheme(values);

          return (
            <ThemeProvider theme={liveTheme}>
              <CustomAppPreview />
            </ThemeProvider>
          );
        }}
      </ThemeManager>
    </Box>
  );
};

export default ThemeManagerCustomPreviewExample;
