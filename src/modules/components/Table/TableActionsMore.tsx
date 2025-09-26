'use client';

import Table from '@dront/ui/Table';
import ContentCopy from '@mui/icons-material/ContentCopy';
import Delete from '@mui/icons-material/Delete';
import Edit from '@mui/icons-material/Edit';
import Visibility from '@mui/icons-material/Visibility';
import Paper from '@mui/material/Paper';

const TableBasic = () => {
  return (
    <Table
      perPage={5}
      totalData={1}
      data={[
        {
          id: 1,
          name: 'John Doe',
          role: 'Administrator',
          joinedDate: '19 Aug 2024, 9:23 pm'
        }
      ]}
      rows={[
        {
          header: {
            label: 'User ID'
          },
          row: {
            value: data => `user-${data.id}`
          }
        },
        {
          header: {
            label: 'Name'
          },
          row: {
            value: data => data.name
          }
        },
        {
          header: {
            label: 'Role'
          },
          row: {
            value: data => data.role
          }
        }
      ]}
      actions={() => [
        {
          label: 'View',
          icon: <Visibility />,
          onClick: data => {
            window.alert(`Viewed ${data.name}`);
          }
        },
        {
          label: 'Copy',
          icon: <ContentCopy />,
          onClick: data => {
            window.alert(`Copied ${data.name}`);
          }
        },
        {
          label: 'Edit',
          icon: <Edit />,
          onClick: data => {
            window.alert(`Edited ${data.name}`);
          }
        },
        {
          label: 'Delete',
          icon: <Delete />,
          onClick: data => {
            window.alert(`Deleted ${data.name}`);
          }
        }
      ]}
      slotProps={{
        root: {
          component: props => <Paper {...props} variant="outlined" sx={{ p: 5 }} />
        }
      }}
    />
  );
};

export default TableBasic;
