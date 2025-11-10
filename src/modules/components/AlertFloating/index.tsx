import { DocView } from '@/@dront/components';

// Import examples and their raw code
import FloatingAlertPositioningExample from './FloatingAlertPositioningExample';
import floatingAlertPositioningExampleCode from './FloatingAlertPositioningExample?raw';
import FloatingAlertProgrammaticExample from './FloatingAlertProgrammaticExample';
import floatingAlertProgrammaticExampleCode from './FloatingAlertProgrammaticExample?raw';

const FloatingAlertModule = () => {
  return (
    <DocView
      contributors={['Agmar Putra']}
      overview="The `alertFloating` utility provides a way to programmatically trigger snackbar-style notifications that float above the UI. It's perfect for providing feedback on asynchronous actions, like API requests, without disrupting the page layout. The utility dynamically injects the alert into the DOM."
      sections={[
        {
          title: 'Programmatic Usage',
          descriptions:
            'The `alertFloating.open()` function allows you to trigger alerts imperatively from anywhere in your code. You can control the content, severity, and auto-hide duration.',
          example: <FloatingAlertProgrammaticExample />,
          exampleCode: floatingAlertProgrammaticExampleCode
        },
        {
          title: 'Positioning',
          descriptions:
            "When using `alertFloating.open()`, you can easily specify the alert's position on the screen using the `position` option.",
          example: <FloatingAlertPositioningExample />,
          exampleCode: floatingAlertPositioningExampleCode
        }
      ]}
      apiDoc={{
        name: 'alertFloating',
        docType: 'object',
        definitions: {
          'alertFloating.open(options)': {
            type: 'function',
            description:
              'A utility function to programmatically display an alert. It accepts an options object with all the standard `AlertProps` plus additional ones for controlling behavior.'
          },
          'options.title': {
            type: 'string',
            required: true,
            description: 'Required. The main title for the floating alert.'
          },
          'options.message': {
            type: 'string | ReactNode',
            description: 'The content body of the floating alert.'
          },
          'options.severity': {
            type: "'success' | 'error' | 'info' | 'warning'",
            description: "Determines the alert's color and icon.",
            default: "'info'"
          },
          'options.duration': {
            type: 'number',
            description:
              'The time in milliseconds before the alert automatically closes. Set to `0` or omit to disable auto-close.',
            default: '3000'
          },
          'options.position': {
            type: "'top-right' | 'top-left' | 'top-center' | 'bottom-right' | 'bottom-left' | 'bottom-center'",
            description: 'The position on the screen where the programmatic alert will appear.',
            default: "'top-right'"
          },
          'options.offset': {
            type: '{ left?: string; top?: string; right?: string; bottom?: string }',
            description: 'An object to fine-tune the spacing from the screen edges.'
          }
        }
      }}
    />
  );
};

export default FloatingAlertModule;
