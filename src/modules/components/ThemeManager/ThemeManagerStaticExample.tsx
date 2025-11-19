import ThemeManager, { type IThemeManager } from '@dront/ui/ThemeManager';
import { Box } from '@mui/material';

/**
 * An example demonstrating the ThemeManager with its default 'static' layout.
 * In this mode, the component is part of the normal document flow and will scroll with the page.
 */
const ThemeManagerStaticExample = () => {
  const handlePublish = (values: IThemeManager) => {
    alert('Theme Published! Check the console for the theme object.');
    console.log('Published Theme:', values);
  };

  const handleCancel = () => {
    alert('Cancel action triggered!');
  };

  return (
    <Box sx={{ maxHeight: '480px', overflow: 'auto', border: '1px solid #eee' }}>
      <ThemeManager layoutPosition="static" onPublish={handlePublish} onCancel={handleCancel} />
    </Box>
  );
};

export default ThemeManagerStaticExample;
