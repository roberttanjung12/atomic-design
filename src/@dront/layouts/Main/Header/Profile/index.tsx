import { useState } from 'react';
import {
  Avatar,
  Box,
  Button,
  Divider,
  Menu,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography
} from '@mui/material';
import { Stack } from '@mui/system';
import { uniqueId } from 'lodash';
import { useAuthentication } from '@/context/AuthenticationProvider';
import * as data from './profile-seeder';

const Profile = () => {
  const [anchorElement, setAnchorElement] = useState(null);

  const { logout, user } = useAuthentication();

  return (
    <Box>
      <IconButton
        aria-label="profile"
        color="inherit"
        aria-controls="profile-menu"
        aria-haspopup="true"
        sx={{ ...(typeof anchorElement === 'object' && { color: 'primary.main' }) }}
        onClick={(event: any) => setAnchorElement(event.currentTarget)}
      >
        <Avatar sx={{ width: 35, height: 35 }} />
      </IconButton>

      <Menu
        id="profile-menu"
        anchorEl={anchorElement}
        keepMounted
        open={Boolean(anchorElement)}
        onClose={() => setAnchorElement(null)}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        sx={{ '& .MuiMenu-paper': { width: '360px', p: 4 } }}
      >
        <Stack direction={'column'} gap={2} alignItems="center">
          <Avatar sx={{ width: '80px', height: '80px' }} />
          <Box textAlign={'center'}>
            <Typography variant="h6">{user?.name}</Typography>
            <Typography variant="caption">{user?.title}</Typography>
          </Box>
        </Stack>

        <Divider sx={{ mt: 3 }} />

        <List>
          {data.profile.map(profile => (
            <ListItemButton component="a" href={profile.href} key={uniqueId()}>
              <ListItemIcon sx={{ minWidth: 40 }}>
                <profile.icon />
              </ListItemIcon>
              <ListItemText primary={profile.title} />
            </ListItemButton>
          ))}
        </List>

        <Box mt={2}>
          <Button variant="outlined" color="error" fullWidth onClick={logout}>
            Logout
          </Button>
        </Box>
      </Menu>
    </Box>
  );
};

export default Profile;
