import type { MouseEventHandler } from 'react';
import { Menu as MenuIcon } from '@mui/icons-material';
import { AppBar, Box, Button, Container, IconButton, Toolbar, styled, useMediaQuery, type Theme } from '@mui/material';
import Link from 'next/link';
import { useAuthentication } from '@/context/AuthenticationProvider';

const DRONTBar = styled(AppBar)(({ theme }) => ({
  justifyContent: 'center',
  [theme.breakpoints.up('md')]: {
    height: '100px'
  },
  [theme.breakpoints.down('md')]: {
    height: '80px'
  },
  backgroundColor: '#202124'
}));

const DRONTToolbar = styled(Toolbar)(() => ({
  width: '100%',
  paddingLeft: '0 !important',
  paddingRight: '0 !important'
}));

const DRONTAnchor = styled(Button)(() => ({
  textTransform: 'uppercase',
  letterSpacing: 3,
  px: '50px !important'
}));

const Header = ({ handleToggle }: { handleToggle: MouseEventHandler }) => {
  const lgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'));

  const { user } = useAuthentication();

  return (
    <DRONTBar>
      <Container>
        <DRONTToolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Link href="/" style={{ lineHeight: 0 }}>
            <img src="/logo/dront.svg" alt="DRONT V5" width="155" />
          </Link>
          <Box flexGrow={1} />
          {lgUp && (
            <>
              <DRONTAnchor color="inherit" variant="text" href="/">
                Home
              </DRONTAnchor>
              <DRONTAnchor color="inherit" variant="text" href="/about">
                About
              </DRONTAnchor>
              <DRONTAnchor
                color="inherit"
                variant="text"
                href={user ? '/dashboard/overview' : '/login'}
                sx={{ border: '1px solid #fff', ml: 3, px: 5 }}
              >
                {user ? 'Dashboard' : 'Login'}
              </DRONTAnchor>
            </>
          )}
        </DRONTToolbar>
      </Container>
    </DRONTBar>
  );
};

export default Header;
