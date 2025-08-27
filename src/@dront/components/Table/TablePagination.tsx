'use client';

import { KeyboardArrowDown, KeyboardDoubleArrowLeft, KeyboardDoubleArrowRight } from '@mui/icons-material';
import { MenuItem, Stack, Pagination, PaginationItem, Select, Typography } from '@mui/material';
import type { TablePaginationProps } from './types';

/**
 * Table pagination component that provides page navigation and items per page selection
 *
 * @param props - TablePaginationProps
 * @returns JSX.Element
 *
 * @example
 * ```tsx
 * <TablePagination
 *   page={1}
 *   perPage={10}
 *   totalData={100}
 *   perPageRange={[5, 10, 20, 50]}
 *   onPageChange={(page) => console.log('Page changed:', page)}
 *   onPerPageRangeChange={(perPage) => console.log('Per page changed:', perPage)}
 * />
 * ```
 */
const TablePagination = ({
  page,
  perPage,
  totalData,
  perPageRange: initialPerPageRange,
  onPageChange,
  onPerPageRangeChange
}: TablePaginationProps) => {
  const totalPage = Math.ceil(totalData / perPage);
  const perPageRange = initialPerPageRange ?? [5, 10, 20, 50, 100];

  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center" className="dront-table__pagination">
      <Pagination
        className="dront-table__pagination-nav"
        color="primary"
        page={page}
        onChange={(_, value) => {
          onPageChange?.(value);
        }}
        count={totalPage}
        renderItem={item => (
          <PaginationItem
            className="dront-table__pagination-item"
            slots={{
              previous: props => (
                <KeyboardDoubleArrowLeft {...props} sx={({ palette }) => ({ color: palette.primary.main })} />
              ),
              next: props => (
                <KeyboardDoubleArrowRight {...props} sx={({ palette }) => ({ color: palette.primary.main })} />
              )
            }}
            {...item}
          />
        )}
      />

      <Stack direction="row" alignItems="center" spacing={2} className="dront-table__pagination-controls">
        <Select
          className="dront-table__pagination-select"
          value={perPage}
          onChange={event => {
            onPerPageRangeChange?.(event.target.value);
          }}
          sx={({ palette }) => ({
            backgroundColor: palette.primary.main,
            color: '#fff',
            minWidth: '66px',
            borderRadius: '10px'
          })}
          IconComponent={props => <KeyboardArrowDown {...props} style={{ color: '#fff' }} />}
        >
          {perPageRange.map(pageRange => {
            return (
              <MenuItem key={`${pageRange}-per-page`} value={pageRange} className="dront-table__pagination-option">
                {pageRange}
              </MenuItem>
            );
          })}
        </Select>

        <Typography className="dront-table__pagination-info">
          Showing {perPage} of {totalData} data
        </Typography>
      </Stack>
    </Stack>
  );
};

export default TablePagination;
