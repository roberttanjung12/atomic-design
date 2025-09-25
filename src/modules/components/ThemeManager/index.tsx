import { Typography } from '@mui/material';
import Link from 'next/link';
import { DocView, TextHighlighter } from '@/@dront/components';
import ThemeManager from '@/@dront/components/ThemeManager';
import ThemeManagerAsyncPublishExample from './ThemeManagerAsyncPublishExample';
import themeManagerAsyncPublishExampleCode from './ThemeManagerAsyncPublishExample?raw';
import ThemeManagerCustomDefaultExample from './ThemeManagerCustomDefaultExample';
import themeManagerCustomDefaultExampleCode from './ThemeManagerCustomDefaultExample?raw';
import ThemeManagerCustomPreviewExample from './ThemeManagerCustomPreviewExample';
import themeManagerCustomPreviewExampleCode from './ThemeManagerCustomPreviewExample?raw';
import ThemeManagerStaticExample from './ThemeManagerStaticExample';
import themeManagerStaticExampleCode from './ThemeManagerStaticExample?raw';

const ThemeManagerModule = () => {
  return (
    <DocView
      contributors={['Agmar Putra']}
      overview="The `ThemeManager` is a comprehensive, real-time tool for customizing and previewing Material-UI theme settings. It provides a user-friendly interface with a header for actions, a sidebar with theme controls (e.g., color palette pickers), and a live preview area, making it an ideal developer tool for designing and establishing an application's visual identity."
      sections={[
        {
          title: 'Basic Usage & Layouts',
          descriptions: (
            <>
              <TextHighlighter
                text=" This is the default implementation of the ThemeManager. It renders in a `static` position, meaning it is
              part of the normal document flow and will scroll with the page. For a fixed overlay experience that stays
              visible during scroll, change the `layoutPosition` prop to `'fixed'`. To see the full effect of the fixed
              layout, please view the example on a full page."
              />{' '}
              <Link href="/theme-manager-basic-example" target="_blank">
                <Typography color="primary.main" my={1}>
                  View Full Page
                </Typography>
              </Link>
            </>
          ),
          example: <ThemeManagerStaticExample />,
          exampleCode: themeManagerStaticExampleCode
        },
        {
          title: 'Handling Asynchronous Publish',
          descriptions: (
            <>
              <TextHighlighter
                text="The `onPublish` callback can be an `async` function. `ThemeManager` is integrated with `react-hook-form`,
                so the 'Publish' button will automatically enter a loading state while the promise is pending. This is
                ideal for scenarios like saving the theme to a server via an API call."
              />
              <Link href="/theme-manager-async-example" target="_blank">
                <Typography color="primary.main" my={1}>
                  View Full Page
                </Typography>
              </Link>
            </>
          ),
          example: <ThemeManagerAsyncPublishExample />,
          exampleCode: themeManagerAsyncPublishExampleCode
        },
        {
          title: 'Providing a Custom Default Theme',
          descriptions: (
            <>
              <TextHighlighter
                text="You can initialize the manager with your own specific theme by passing a theme object to the
              `defaultTheme` prop. This is perfect for editing an existing theme rather than starting from the
              component's built-in default."
              />{' '}
              <Link href="/theme-manager-custom-default-example" target="_blank">
                <Typography color="primary.main" my={1}>
                  View Full Page
                </Typography>
              </Link>
            </>
          ),
          example: <ThemeManagerCustomDefaultExample />,
          exampleCode: themeManagerCustomDefaultExampleCode
        },
        {
          title: 'Custom Preview (Render Prop)',
          descriptions: (
            <>
              <TextHighlighter
                text="For ultimate flexibility, you can pass a function as the component's `children`. This function, known as a
              render prop, receives the current theme `values` as an argument. This allows you to render a custom
              preview of your own components and see how they respond to theme changes instantly."
              />{' '}
              <Link href="/theme-manager-custom-preview-example" target="_blank">
                <Typography color="primary.main" my={1}>
                  View Full Page
                </Typography>
              </Link>
            </>
          ),
          example: <ThemeManagerCustomPreviewExample />,
          exampleCode: themeManagerCustomPreviewExampleCode
        }
      ]}
      propsDoc={{
        component: ThemeManager,
        propDefinitions: {
          children: {
            type: 'ReactNode | ((props: { values: IThemeManager }) => ReactNode)',
            description:
              'The content for the preview area. Can be a standard ReactNode or a render prop function that receives the current theme values for dynamic styling.'
          },
          defaultTheme: {
            type: 'IThemeManager',
            description: 'An object with the initial theme values. If omitted, the built-in default theme is used.'
          },
          layoutPosition: {
            type: "'fixed' | 'static'",
            default: "'fixed'",
            description:
              "Determines the positioning of the header and sidebar. 'fixed' keeps them in place on scroll, while 'static' allows them to scroll with the page."
          },
          onCancel: {
            type: '() => void',
            description: 'Callback function triggered when the "Cancel" button in the header is clicked.'
          },
          onReset: {
            type: '() => void',
            description:
              'Callback function triggered when the "Reset" button is clicked, which should handle reverting theme changes.'
          },
          onPublish: {
            type: '(values: IThemeManager) => void | Promise<void>',
            description:
              'Callback function triggered when the "Publish" button is clicked. It receives the final theme values as its argument. Can be an async function to trigger a loading state.'
          }
        }
      }}
    />
  );
};

export default ThemeManagerModule;
