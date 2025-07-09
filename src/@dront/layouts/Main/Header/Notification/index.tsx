import { useState } from 'react';
import { NotificationsNoneOutlined as NotificationsNoneOutlinedIcon } from '@mui/icons-material';
import { Avatar, Badge, Box, Button, Chip, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { uniqueId } from 'lodash';
import Link from 'next/link';
import { MainScrollbar } from '@/@dront/components';
import * as data from './notification-seeder';

const Notification = () => {
  const [anchorElement, setAnchorElement] = useState(null);

  return (
    <Box>
      <IconButton
        size="large"
        aria-label={`Show ${data.notifications.length} new notifications`}
        color="inherit"
        aria-controls="notification-menu"
        aria-haspopup="true"
        sx={{ color: anchorElement ? 'primary.main' : 'text.secondary' }}
        onClick={(event: any) => setAnchorElement(event.currentTarget)}
      >
        <Badge variant="dot" color="primary">
          <NotificationsNoneOutlinedIcon />
        </Badge>
      </IconButton>

      <Menu
        id="notification-menu"
        anchorEl={anchorElement}
        keepMounted
        open={Boolean(anchorElement)}
        onClose={() => setAnchorElement(null)}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        sx={{ '& .MuiMenu-paper': { width: '360px' } }}
      >
        <Stack direction="row" py={2} px={4} justifyContent="space-between" alignItems="center">
          <Typography variant="h6">Notifications</Typography>

          <Chip label="5 new" color="primary" size="small" />
        </Stack>

        <MainScrollbar sx={{ height: '350px' }}>
          {data.notifications.map(notification => (
            <Box key={uniqueId()}>
              <MenuItem sx={{ py: 2, px: 4 }}>
                <Stack direction="row" spacing={2}>
                  <Avatar src={notification.avatar} alt={notification.avatar} sx={{ width: 48, height: 48 }} />

                  <Box>
                    <Typography variant="subtitle2" color="textPrimary" fontWeight={600} noWrap sx={{ width: '240px' }}>
                      {notification.title}
                    </Typography>

                    <Typography color="textSecondary" variant="subtitle2" sx={{ width: '240px' }} noWrap>
                      {notification.subtitle}
                    </Typography>
                  </Box>
                </Stack>
              </MenuItem>
            </Box>
          ))}
        </MainScrollbar>

        <Box p={3} pb={1}>
          <Button href="#" variant="outlined" component={Link} color="primary" fullWidth>
            See all Notifications
          </Button>
        </Box>
      </Menu>
    </Box>
  );
};

export default Notification;
