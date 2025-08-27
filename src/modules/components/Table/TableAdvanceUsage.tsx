'use client';

import { useEffect, useState } from 'react';
import ContentCopy from '@mui/icons-material/ContentCopy';
import Delete from '@mui/icons-material/Delete';
import Edit from '@mui/icons-material/Edit';
import Visibility from '@mui/icons-material/Visibility';
import Paper from '@mui/material/Paper';
import { Table, type TableActions, type TableRow } from '@/@dront/components';

interface Users {
  id: number;
  firstName: string;
  role: string;
}

interface FetchResponse {
  limit: number;
  skip: number;
  total: number;
  users: Users[];
}

const rows: TableRow<Users>[] = [
  {
    header: {
      label: 'ID'
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
      value: data => data.firstName
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
];

const actions: TableActions<Users> = data => [
  {
    label: 'View',
    icon: <Visibility />,
    onClick: () => {
      window.alert(`Viewed ${data.firstName}`);
    }
  },
  {
    label: 'Copy',
    icon: <ContentCopy />,
    onClick: () => {
      window.alert(`Copied ${data.firstName}`);
    }
  },
  {
    label: 'Edit',
    icon: <Edit />,
    onClick: () => {
      console.log(`Edited ${data.firstName}`);
    }
  },
  {
    label: 'Delete',
    icon: <Delete />,
    disabled: data.id === 2,
    onClick: () => {
      console.log(`Deleted ${data.firstName}`);
    }
  }
];

const TableAdvanceUsage = () => {
  const [perPage, setPerPage] = useState<number>(5);
  const [page, setPage] = useState<number>(1);
  const [data, setData] = useState<FetchResponse | null>(null);
  const [loading, setLoading] = useState(true);

  const userData = data?.users ?? [];
  const totalData = data?.total ?? 0;

  const fetchData = async (perPageValue: number, skipValue?: number) => {
    const data = await fetch(`https://dummyjson.com/users?limit=${perPageValue}&skip=${skipValue}`)
      .then(res => res.json())
      .then(data => {
        return data;
      })
      .catch(error => {
        console.error(error);

        return null;
      });

    return data;
  };

  const handleFetchData = async (perPageValue: number, skipValue = 0) => {
    setLoading(true);

    const data = await fetchData(perPageValue, skipValue);

    setData(data);
    setLoading(false);
  };

  const handlePageChange = (pageValue: number) => {
    const countSkip = (pageValue - 1) * perPage;

    setPage(pageValue);
    handleFetchData(perPage, countSkip);
  };

  const handlePerPageChange = (perPageValue: number) => {
    setPage(1);
    setPerPage(perPageValue);
    handleFetchData(perPageValue, 0);
  };

  useEffect(() => {
    handleFetchData(perPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Table
      showNumbering
      loading={loading}
      page={page}
      perPage={perPage}
      totalData={totalData}
      data={userData}
      rows={rows}
      actions={actions}
      onPageChange={handlePageChange}
      onPerPageRangeChange={handlePerPageChange}
      slotProps={{
        root: {
          component: props => <Paper {...props} variant="outlined" sx={{ p: 5 }} />
        }
      }}
    />
  );
};

export default TableAdvanceUsage;
