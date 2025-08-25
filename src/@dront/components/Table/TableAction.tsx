'use client';

import { useState } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IconButton, Menu, MenuItem, ListItemIcon, ListItemText, Stack, Tooltip } from '@mui/material';
import clsx from 'clsx';
import uniqueId from 'lodash/uniqueId';
import type { TableActionProps } from './types';

/**
 * Table action component that renders action buttons for each row
 * Shows actions as individual buttons if 3 or fewer, otherwise shows dropdown menu
 *
 * @template T - Type of the row data (must have an 'id' property)
 * @param props - TableActionProps<T>
 * @returns JSX.Element
 *
 * @example
 * ```tsx
 * <TableAction
 *   rowData={user}
 *   rowActions={[
 *     { label: 'Edit', icon: <EditIcon />, onClick: (user) => editUser(user) },
 *     { label: 'Delete', icon: <DeleteIcon />, onClick: (user) => deleteUser(user), disabled: !canDelete }
 *   ]}
 * />
 * ```
 */
const TableAction = <T extends object>({ rowActions, rowData }: TableActionProps<T>) => {
  const [anchorEls, setAnchorEls] = useState<HTMLElement | null>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEls(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEls(null);
  };

  if (rowActions.length <= 3) {
    return (
      <Stack direction="row" spacing={1} justifyContent="center" className="dront-table__actions">
        {rowActions.map(action => {
          return (
            <Tooltip key={`row-actions-${uniqueId()}-${action.label}`} title={action.label} arrow>
              <span>
                <IconButton
                  className={clsx(
                    `dront-table__action-button`,
                    action.disabled && 'dront-table__action-button--disabled'
                  )}
                  size="small"
                  onClick={() => {
                    action.onClick?.(rowData);
                  }}
                  disabled={action.disabled}
                >
                  {action.icon}
                </IconButton>
              </span>
            </Tooltip>
          );
        })}
      </Stack>
    );
  }

  return (
    <div className="dront-table__actions dront-table__actions--dropdown">
      <IconButton
        className="dront-table__action-menu-trigger"
        size="small"
        onClick={e => {
          handleMenuOpen(e);
        }}
      >
        <MoreVertIcon fontSize="small" />
      </IconButton>
      <Menu
        className="dront-table__action-menu"
        anchorEl={anchorEls}
        open={Boolean(anchorEls)}
        onClose={() => {
          handleMenuClose();
        }}
      >
        {rowActions.map(action => {
          return (
            <MenuItem
              key={`row-actions-${uniqueId()}-${action.label}`}
              className={clsx(
                `dront-table__action-menu-item`,
                action.disabled && 'dront-table__action-menu-item--disabled'
              )}
              onClick={() => {
                action.onClick?.(rowData);
                handleMenuClose();
              }}
              disabled={action.disabled}
            >
              {action.icon && <ListItemIcon className="dront-table__action-menu-icon">{action.icon}</ListItemIcon>}
              <ListItemText className="dront-table__action-menu-text">{action.label}</ListItemText>
            </MenuItem>
          );
        })}
      </Menu>
    </div>
  );
};

export default TableAction;
