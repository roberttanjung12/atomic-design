'use client';

import TableCell from '@mui/material/TableCell';
import MuiTableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import clsx from 'clsx';
import uniqueId from 'lodash/uniqueId';
import parseSx from '@/@dront/utils/parseSx';
import type { TableHeadProps } from './types';

/**
 * Table head component that renders the header row
 *
 * @template T - Type of the row data (must have an 'id' property)
 * @param props - TableHeadProps<T>
 * @returns JSX.Element
 *
 * @example
 * ```tsx
 * <TableHead
 *   rows={[
 *     { header: { label: 'Name' }, row: { value: (data) => data.name } },
 *     { header: { label: 'Email' }, row: { value: (data) => data.email } }
 *   ]}
 *   hasActions={true}
 *   actionColumnLabel="Actions"
 * />
 * ```
 */
const TableHead = <T extends object>({ rows, hasActions, actionColumnLabel, actionColumnSx }: TableHeadProps<T>) => {
  return (
    <MuiTableHead className="dront-table__head">
      <TableRow
        className="dront-table__head-row"
        sx={[
          ({ palette }) => ({
            '& th': {
              borderBottom: `1px dashed ${palette.divider}`
            },
            '&:last-child th': {
              borderBottom: `1px dashed  ${palette.divider}`
            }
          })
        ]}
      >
        {rows.map(col => {
          return (
            <TableCell
              key={uniqueId()}
              className="dront-table__head-cell"
              sx={[{ fontWeight: 'bold' }, ...parseSx(col.header.sx)]}
            >
              {col.header.label}
            </TableCell>
          );
        })}

        {hasActions && (
          <TableCell
            className={clsx('dront-table__head-cell', 'dront-table__head-cell--actions')}
            sx={[{ fontWeight: 'bold' }, ...parseSx(actionColumnSx)]}
          >
            {actionColumnLabel}
          </TableCell>
        )}
      </TableRow>
    </MuiTableHead>
  );
};

export default TableHead;
