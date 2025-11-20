import { ProgrammaticContainer } from '@dront/ui/programmatic';
import { DocView } from '@/@dront/components';
import BasicAlert from './BasicAlert';
import myAlertRaw from './BasicAlert/myAlert?raw';
import theAlertRaw from './BasicAlert/TheAlert?raw';
import basicAlertRaw from './BasicAlert?raw';
import BasicDialog from './BasicDialog';
import myDialogRaw from './BasicDialog/myDialog?raw';
import theDialogRaw from './BasicDialog/TheDialog?raw';
import basicDialogRaw from './BasicDialog?raw';
import ModalWithAutoClose from './ModalWithAutoClose';
import myModalRaw from './ModalWithAutoClose/myModal?raw';
import theModalRaw from './ModalWithAutoClose/TheModal?raw';
import modalWithAutoCloseRaw from './ModalWithAutoClose?raw';
import programmaticRootPageRaw from './ProgrammaticRootPage?raw';

const ProgrammaticModule = () => {
  return (
    <>
      <ProgrammaticContainer />

      <DocView
        contributors={['Erghi Imannur Ichsan']}
        overview={[
          'The `programmatic` feature allows you to open and close React components (like `modals`, `dialogs`, `alerts`, etc.) globally from anywhere in your app, without having to manually manage state in each component.',
          'This is useful for showing `notifications`, `alerts`, or `dialogs` in response to actions that occur outside the current component tree.'
        ]}
        sections={[
          {
            title: 'Installation',
            descriptions:
              'First, you need to setup `ProgrammaticContainer`at the root of your app (e.g., in _app.tsx or layout.tsx). Ensure to include it in the MUI ThemeProvider section for the theme to work.',
            exampleCode: programmaticRootPageRaw
          },
          {
            descriptions:
              'Create your component. Please extends to `ProgrammaticComponentProps` to avoid props conflicts.',
            exampleCode: theAlertRaw
          },
          {
            descriptions:
              'Define your component as programmatic. The `initialState` should match the props of the component you register. For example, if your component expects `message` and `severity`, provide default values for those in `initialState`.',
            exampleCode: myAlertRaw
          },
          {
            descriptions:
              'Use the programmatic API from any component or event handler in your app. Simply call the `open` method with the desired props to display your component globally, without needing to manage its state locally.',
            exampleCode: basicAlertRaw
          },
          {
            title: 'Basic Alert',
            descriptions:
              'This example demonstrates how to use the programmatic API to open an alert from anywhere in your application. Clicking the "Open Alert" button triggers a global alert with a success message. The alert can be closed, and an `onClose` callback is executed.',
            example: <BasicAlert />,
            exampleCode: [
              {
                label: './BasicAlert.tsx',
                code: basicAlertRaw
              },
              {
                label: './myAlert.ts',
                code: myAlertRaw
              },
              {
                label: './TheAlert.tsx',
                code: theAlertRaw
              }
            ]
          },
          {
            title: 'Basic Dialog',
            descriptions:
              'This example shows how to use the programmatic API to open a dialog from anywhere in your application. The dialog can be triggered globally and supports custom content and actions.',
            example: <BasicDialog />,
            exampleCode: [
              {
                label: './BasicDialog.tsx',
                code: basicDialogRaw
              },
              {
                label: './myDialog.ts',
                code: myDialogRaw
              },
              {
                label: './TheDialog.tsx',
                code: theDialogRaw
              }
            ]
          },
          {
            title: 'Modal with Auto Close',
            descriptions:
              'This example demonstrates a modal that automatically closes after a set delay. The modal can be opened programmatically and will close itself after a timeout, which is useful for transient notifications or confirmations.',
            example: <ModalWithAutoClose />,
            exampleCode: [
              {
                label: './ModalWithAutoClose.tsx',
                code: modalWithAutoCloseRaw
              },
              {
                label: './myModal.ts',
                code: myModalRaw
              },
              {
                label: './TheModal.tsx',
                code: theModalRaw
              }
            ]
          }
        ]}
        apiDoc={{
          name: 'programmatic',
          docType: 'utility',
          definitions: {
            ProgrammaticContainer: {
              type: 'React.FC',
              required: true,
              default: '-',
              description:
                'Global container that renders all active programmatic components. Place this at the `root` of your app.'
            },
            createProgrammatic: {
              type: '<T extends React.ComponentType<any>>(Component: T, options?: { initialState?: Partial<Props> }) => { open(props: Partial<Props>): string | undefined; close(id?: string): void }',
              required: true,
              default: '-',
              description:
                'Creates a programmatic factory for a React component, allowing you to `open`/`close` instances globally.'
            },
            disposeProgrammaticManager: {
              type: '() => void',
              required: false,
              default: '-',
              description:
                'Optionally disposes the global programmatic manager, clearing all listeners and registry. Useful for cleanup on app `unmount` or `hot reload`.'
            }
          }
        }}
        dependencies={{
          react: {
            version: '>= 18',
            description:
              'Required because `programmatic` uses `useSyncExternalStore`, which is only available in `React 18` or above.'
          }
        }}
      />
    </>
  );
};

export default ProgrammaticModule;
