import Alert from '@dront/ui/Alert';
import { DocView } from '@/@dront/components';
import AlertActionExample from './AlertActionExample';
import alertActionExampleCode from './AlertActionExample?raw';
import AlertBasicExample from './AlertBasicExample';
import alertBasicExampleCode from './AlertBasicExample?raw';
import AlertSnackbarExample from './AlertSnackbarExample';
import alertSnackbarExampleCode from './AlertSnackbarExample?raw';

const AlertModule = () => {
  return (
    <DocView
      contributors={['Agmar Putra']}
      overview="The <Alert /> component is used for rendering static, inline feedback messages directly within the UI layout. It's ideal for form validation messages, banners, or any persistent notification that is part of the page content."
      sections={[
        {
          title: 'Basic Usage',
          descriptions:
            'The component can be used declaratively with different severity levels to convey various messages.',
          example: <AlertBasicExample />,
          exampleCode: alertBasicExampleCode
        },
        {
          title: 'Snackbar Variant',
          descriptions:
            'The `snackbar` variant provides a more compact, filled style. While visually similar to a snackbar, when used this way it remains a static part of the component tree.',
          example: <AlertSnackbarExample />,
          exampleCode: alertSnackbarExampleCode
        },
        {
          title: 'Alert with Action',
          descriptions:
            'You can add interactive elements like buttons to an alert by passing them through the `slotProps.alert.action` prop. This is useful for actions like "Undo" or "Retry".',
          example: <AlertActionExample />,
          exampleCode: alertActionExampleCode
        }
      ]}
      propsDoc={{
        component: Alert,
        propDefinitions: {
          title: {
            type: 'string',
            description: 'Required. The main title text to display at the top of the alert.'
          },
          message: {
            type: 'string | ReactNode',
            description: 'The main content of the alert. Can be a simple string or complex JSX.'
          },
          severity: {
            type: "'success' | 'error' | 'info' | 'warning'",
            description: "The severity level, which determines the alert's color and icon.",
            default: "'info'"
          },
          variant: {
            type: "'standard' | 'snackbar'",
            description: "The visual style of the alert. 'standard' is outlined, while 'snackbar' is filled.",
            default: "'standard'"
          },
          slotProps: {
            type: '{ alert?: Omit<MuiAlertProps, "severity"> }',
            description:
              'Additional props to pass to the underlying MUI Alert component, allowing for further customization.'
          }
        }
      }}
    />
  );
};

export default AlertModule;
