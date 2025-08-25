'use client';

import Paper from '@mui/material/Paper';
import { Table } from '@/@dront/components';

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
        },
        {
          header: {
            label: 'Joined Date'
          },
          row: {
            value: data => data.joinedDate
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
