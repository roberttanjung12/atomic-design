'use client';

import ThemeManager from '@/@dront/components/ThemeManager';
import type { IThemeManager } from '@/@dront/components/ThemeManager/ThemeManager.type.js';

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

  return <ThemeManager onPublish={handlePublish} onCancel={handleCancel} />;
};

export default ThemeManagerStaticExample;
