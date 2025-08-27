'use client';

import MuiTableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import clsx from 'clsx';
import uniqueId from 'lodash/uniqueId';
import parseSx from '@/@dront/utils/parseSx';
import Action from './TableAction';
import TableFallbackWrapper from './TableFallbackWrapper';
import type { TableBodyProps } from './types';

/**
 * Table body component that renders data rows with optional actions
 *
 * @template T - Type of the row data (must have an 'id' property)
 * @param props - TableBodyProps<T>
 * @returns JSX.Element
 *
 * @example
 * ```tsx
 * <TableBody
 *   data={users}
 *   rows={[
 *     { header: { label: 'Name' }, row: { value: (user) => user.name } },
 *     { header: { label: 'Email' }, row: { value: (user) => user.email } }
 *   ]}
 *   actions={(user) => [
 *     { label: 'Edit', icon: <EditIcon />, onClick: (user) => editUser(user) },
 *     { label: 'Delete', icon: <DeleteIcon />, onClick: (user) => deleteUser(user) }
 *   ]}
 *   loading={false}
 *   fallback="No users found"
 * />
 * ```
 */
const TableBody = <T extends object>({
  data,
  rows,
  actions,
  actionColumnSx,
  loading,
  fallback,
  loadingFallback
}: TableBodyProps<T>) => {
  const renderTableCell = () => {
    if (loading) {
      return <TableFallbackWrapper>{loadingFallback ?? 'Loading...'}</TableFallbackWrapper>;
    }

    if (data?.length <= 0) {
      return <TableFallbackWrapper>{fallback ?? 'Data not found.'}</TableFallbackWrapper>;
    }

    return (
      <>
        {data.map((rowData, rowIndex) => {
          const rowActions = actions ? actions(rowData) : [];
          const key = uniqueId();

          return (
            <TableRow
              key={key}
              className="dront-table__body-row"
              sx={[
                ({ palette }) => ({
                  '& td': {
                    borderBottom: `1px dashed ${palette.divider}`
                  },
                  '&:last-child td': {
                    borderBottom: `1px dashed ${palette.divider}`
                  }
                })
              ]}
            >
              {rows.map(col => {
                return (
                  <TableCell
                    key={`cell-${key}-${uniqueId()}`}
                    className="dront-table__body-cell"
                    sx={[...parseSx(col.row.sx)]}
                  >
                    {col.row.value(rowData, rowIndex)}
                  </TableCell>
                );
              })}

              {actions && (
                <TableCell
                  className={clsx('dront-table__body-cell', 'dront-table__body-cell--actions')}
                  sx={[...parseSx(actionColumnSx)]}
                >
                  <Action rowActions={rowActions} rowData={rowData} />
                </TableCell>
              )}
            </TableRow>
          );
        })}
      </>
    );
  };

  return <MuiTableBody className="dront-table__body">{renderTableCell()}</MuiTableBody>;
};

export default TableBody;
