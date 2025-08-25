import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import { CodeViewer, Section, TextHighlighter } from '@/@dront/components';
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
    <Stack spacing={4}>
      <TextHighlighter text="The `Table` component is used to display structured data in a tabular format. It supports various configurations and functionalities, including pagination, actions, and advanced usage scenarios." />

      <Section title="Basic">
        <Typography mb={2}>
          This example demonstrates how to display data in a simple tabular format with pagination. This configuration
          is ideal for scenarios where minimal functionality is required.
        </Typography>

        <CodeViewer code={tableBasicCode}>
          <TableBasic />
        </CodeViewer>
      </Section>

      <Section title="Actions">
        <Typography mb={2}>
          This example showcases how to define custom actions for each row, such as editing or deleting data. This
          configuration is useful for scenarios where user interaction with individual rows is required.
        </Typography>

        <CodeViewer code={tableActionsCode}>
          <TableActions />
        </CodeViewer>

        <Typography my={2}>
          The action buttons will automatically collapse into a vertical menu if there are more than three actions,
          ensuring a clean and organized layout.
        </Typography>

        <CodeViewer code={tableActionsMoreCode}>
          <TableActionsMore />
        </CodeViewer>
      </Section>

      <Section title="Advance Usage">
        <Typography mb={2}>
          This example demonstrates how to work with dynamic data fetched from an API. It includes features such as
          pagination, data length, and actions for interacting with the data. This configuration is ideal for scenarios
          where data needs to be loaded dynamically and updated in real-time.
        </Typography>

        <CodeViewer code={tableAdvanceUsageCode}>
          <TableAdvanceUsage />
        </CodeViewer>
      </Section>
    </Stack>
  );
};

export default TableModule;
