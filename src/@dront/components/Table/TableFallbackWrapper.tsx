'use client';

import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

interface TableFallbackWrapperProps {
  children: React.ReactNode;
}

const TableFallbackWrapper = ({ children }: TableFallbackWrapperProps) => {
  return (
    <TableRow className="dront-table__fallback-row">
      <TableCell colSpan={9999} className="dront-table__fallback-cell" sx={{ textAlign: 'center', py: 2 }}>
        {children}
      </TableCell>
    </TableRow>
  );
};

export default TableFallbackWrapper;
