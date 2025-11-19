import ThemeManager, { type IThemeManager } from '@dront/ui/ThemeManager';
import { Box } from '@mui/material';

/**
 * An example demonstrating how to handle asynchronous operations with the onPublish callback.
 * The 'Publish' button will automatically enter a loading state while the promise is pending.
 */
const ThemeManagerAsyncPublishExample = () => {
  const handlePublish = async (values: IThemeManager) => {
    console.log('Publishing started...');

    // Simulate an API call that takes 2 seconds
    await new Promise(resolve => setTimeout(resolve, 2000));

    alert('Theme successfully published! Check the console for the theme object.');
    console.log('Published Theme:', values);
  };

  return (
    <Box sx={{ maxHeight: '480px', overflow: 'auto', border: '1px solid #eee' }}>
      <ThemeManager
        layoutPosition="static"
        onPublish={handlePublish}
        onCancel={() => alert('Cancel action triggered!')}
      />
    </Box>
  );
};

export default ThemeManagerAsyncPublishExample;
