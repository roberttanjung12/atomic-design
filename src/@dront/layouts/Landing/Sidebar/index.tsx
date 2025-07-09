import type { MouseEventHandler } from 'react';
import { Box, Button, Drawer, styled } from '@mui/material';

const DRONTAnchor = styled(Button)(() => ({
  textTransform: 'uppercase',
  letterSpacing: 3,
  my: 20,
  width: '100%',
  color: '#FFF'
}));

const Sidebar = ({ collapse, handleToggle }: { collapse: boolean; handleToggle: MouseEventHandler }) => {
  return (
    <nav>
      <Drawer
        variant="temporary"
        open={collapse}
        onClose={handleToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 280, background: '#202124' }
        }}
      >
        <Box px={5} py={5}>
          <DRONTAnchor color="inherit" variant="text" href="/">
            Home
          </DRONTAnchor>
          <DRONTAnchor color="inherit" variant="text" href="/about">
            About
          </DRONTAnchor>
          <DRONTAnchor color="inherit" variant="text" href="/login" sx={{ border: '1px solid #fff', mt: 5 }}>
            Login
          </DRONTAnchor>
        </Box>
      </Drawer>
    </nav>
  );
};

export default Sidebar;
