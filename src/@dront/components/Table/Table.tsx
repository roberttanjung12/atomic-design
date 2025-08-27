'use client';

import Stack from '@mui/material/Stack';
import MuiTable from '@mui/material/Table';
import MuiTableContainer from '@mui/material/TableContainer';
import TableBody from './TableBody';
import TableHead from './TableHead';
import TablePagination from './TablePagination';
import type { TableProps, TableRow } from './types';

/**
 * Comprehensive table component with pagination, actions, and customizable columns
 *
 * @template T - Type of the row data (must have an 'id' property)
 * @param props - TableProps<T>
 * @returns JSX.Element
 *
 * @example
 * ```tsx
 * interface User {
 *   id: string;
 *   name: string;
 *   email: string;
 *   role: string;
 * }
 *
 * const users: User[] = [
 *   { id: '1', name: 'John Doe', email: 'john@example.com', role: 'Admin' },
 *   { id: '2', name: 'Jane Smith', email: 'jane@example.com', role: 'User' }
 * ];
 *
 * const userTableRows: TableRow<User>[] = [
 *   {
 *     header: { label: 'Name', sx: { minWidth: 150 } },
 *     row: { value: (user) => user.name }
 *   },
 *   {
 *     header: { label: 'Email' },
 *     row: { value: (user) => user.email }
 *   },
 *   {
 *     header: { label: 'Role' },
 *     row: { value: (user) => user.role }
 *   }
 * ];
 *
 * <Table
 *   data={users}
 *   rows={userTableRows}
 *   showNumbering={true}
 *   actions={(user) => [
 *     {
 *       label: 'Edit',
 *       icon: <EditIcon />,
 *       onClick: (user) => handleEdit(user)
 *     },
 *     {
 *       label: 'Delete',
 *       icon: <DeleteIcon />,
 *       onClick: (user) => handleDelete(user),
 *       disabled: user.role === 'Admin'
 *     }
 *   ]}
 *   page={1}
 *   perPage={10}
 *   totalData={100}
 *   onPageChange={(page) => setCurrentPage(page)}
 *   onPerPageRangeChange={(perPage) => setItemsPerPage(perPage)}
 *   loading={false}
 *   fallback="No users found"
 *   loadingFallback="Loading users..."
 * />
 * ```
 */
const Table = <T extends object>({
  data,
  rows: initialRows,
  actions,
  actionColumnLabel = 'Action(s)',
  actionColumnSx = { textAlign: 'center', width: 60 },
  perPage = 5,
  showNumbering = false,
  loading = false,
  page = 1,
  totalData = 0,
  fallback,
  loadingFallback,
  slotProps,
  onPageChange,
  onPerPageRangeChange
}: TableProps<T>) => {
  const numberingRow: TableRow<T>[] = showNumbering
    ? [
        {
          header: { label: 'No.', sx: { textAlign: 'center', width: 50 } },
          row: {
            value: (_, index) => {
              const no = page === 1 ? page + index : perPage * (page - 1) + (index + 1);

              return `${no}.`;
            },
            sx: { textAlign: 'center' }
          }
        }
      ]
    : [];

  const rows: TableRow<T>[] = [...numberingRow, ...initialRows];

  const hasActions = !!actions;

  return (
    <Stack spacing={4} className="dront-table" {...slotProps?.root}>
      <MuiTableContainer className="dront-table__container" sx={{ overflowX: 'auto' }}>
        <MuiTable size="small" className="dront-table__main">
          <TableHead
            rows={rows}
            actionColumnLabel={actionColumnLabel}
            actionColumnSx={actionColumnSx}
            hasActions={hasActions}
          />

          <TableBody
            rows={rows}
            data={data}
            actions={actions}
            actionColumnSx={actionColumnSx}
            fallback={fallback}
            loading={loading}
            loadingFallback={loadingFallback}
          />
        </MuiTable>
      </MuiTableContainer>

      <TablePagination
        page={page}
        perPage={perPage}
        totalData={totalData}
        onPageChange={onPageChange}
        onPerPageRangeChange={onPerPageRangeChange}
      />
    </Stack>
  );
};

export default Table;
