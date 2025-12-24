import { DocView } from '@/@dront/components';
import UseBroadcastChannelExample from './UseBroadcastChannelExample';
import useBroadcastChannelExampleRaw from './UseBroadcastChannelExample?raw';

const UseBroadcastChannelModule = () => {
  return (
    <DocView
      contributors={['Erghi Imannur Ichsan']}
      overview={
        'The `useBroadcastChannel` hook provides a simple interface for sending and receiving messages between browser tabs or windows using the Broadcast Channel API. This enables real-time communication and state synchronization across different parts of your application running in separate browser contexts.'
      }
      sections={[
        {
          title: 'Basic',
          descriptions:
            'This example demonstrates how to use the `useBroadcastChannel` hook to send and receive messages between tabs. Open this page in multiple tabs and interact with the example to see how messages are broadcast and received in real time.',
          example: <UseBroadcastChannelExample />,
          exampleCode: useBroadcastChannelExampleRaw
        }
      ]}
      dependencies={{
        'broadcast-channel': {
          version: '^7.0.0',
          description:
            'A library that provides a simple abstraction over the Broadcast Channel API, enabling communication between browser tabs or windows. Used here to implement the core functionality of the `useBroadcastChannel` hook.'
        }
      }}
    />
  );
};

export default UseBroadcastChannelModule;
