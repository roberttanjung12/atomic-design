import Table from '@dront/ui/Table';
import { DocView } from '@/@dront/components';
import TableActions from './TableActions';
import tableActionsCode from './TableActions?raw';
import TableActionsMore from './TableActionsMore';
import tableActionsMoreCode from './TableActionsMore?raw';
import TableAdvanceUsage from './TableAdvanceUsage';
import tableAdvanceUsageCode from './TableAdvanceUsage?raw';
import TableBasic from './TableBasic';
import tableBasicCode from './TableBasic?raw';

const TableModule = () => {
  return (
    <DocView
      contributors={['Erghi Imannur Ichsan']}
      overview="The `Table` component is used to display structured data in a tabular format. It supports various configurations and functionalities, including pagination, actions, and advanced usage scenarios."
      sections={[
        {
          title: 'Basic',
          descriptions:
            'This example demonstrates how to display data in a simple tabular format with pagination. This configuration is ideal for scenarios where minimal functionality is required.',
          example: <TableBasic />,
          exampleCode: tableBasicCode
        },
        {
          title: 'Actions',
          descriptions:
            'This example showcases how to define custom actions for each row, such as editing or deleting data. This configuration is useful for scenarios where user interaction with individual rows is required.',
          example: <TableActions />,
          exampleCode: tableActionsCode
        },
        {
          title: '',
          descriptions:
            'The action buttons will automatically collapse into a vertical menu if there are more than three actions, ensuring a clean and organized layout.',
          example: <TableActionsMore />,
          exampleCode: tableActionsMoreCode
        },
        {
          title: 'Advance Usage',
          descriptions:
            'This example demonstrates how to work with dynamic data fetched from an API. It includes features such as pagination, data length, and actions for interacting with the data. This configuration is ideal for scenarios where data needs to be loaded dynamically and updated in real-time.',
          example: <TableAdvanceUsage />,
          exampleCode: tableAdvanceUsageCode
        }
      ]}
      propsDoc={{
        component: Table,
        propDefinitions: {
          actionColumnLabel: {
            type: 'string',
            description: 'Label for actions column.'
          },
          actionColumnSx: {
            type: 'SxProps<Theme>',
            description: 'Styling for actions column.'
          },
          actions: {
            type: 'func',
            description: 'Function to generate actions for each row.'
          },
          data: {
            type: 'Array<any>',
            description: 'Array of data to display.'
          },
          fallback: {
            type: 'ReactNode',
            description: 'Content to show when no data.'
          },
          loading: {
            type: 'boolean',
            default: 'false',
            description: 'Whether table is in loading state.'
          },
          loadingFallback: {
            type: 'ReactNode',
            description: 'Content to show during loading.'
          },
          onPageChange: {
            type: 'func',
            description: 'Callback when page changes.'
          },
          onPerPageRangeChange: {
            type: 'func',
            description: 'Callback when items per page changes.'
          },
          page: {
            type: 'number',
            default: '1',
            description: 'Current page number.'
          },
          perPage: {
            type: 'number',
            default: '5',
            description: 'Number of items per page.'
          },
          rows: {
            type: 'Array<object>',
            description: 'Table row configurations.'
          },
          showNumbering: {
            type: 'boolean',
            default: 'false',
            description: 'Whether to show row numbering.'
          },
          slotProps: {
            type: '{ root?: StackProps }',
            description: 'Props to pass to internal components.'
          },
          totalData: {
            type: 'number',
            default: '0',
            description: 'Total number of data items.'
          }
        }
      }}
    />
  );
};

export default TableModule;
