'use client';

import ThemeManager, { type IThemeManager } from '@dront/ui/ThemeManager';

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

  return <ThemeManager onPublish={handlePublish} onCancel={() => alert('Cancel action triggered!')} />;
};

export default ThemeManagerAsyncPublishExample;
