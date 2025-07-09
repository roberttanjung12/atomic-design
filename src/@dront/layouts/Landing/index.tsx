import { useState, type ReactNode } from 'react';
import { Box, useMediaQuery, type Theme } from '@mui/material';
import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';

const LandingLayout = ({ children }: { children: ReactNode }) => {
  const [collapse, setCollapse] = useState(false);

  const lgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'));

  const handleToggle = () => {
    setCollapse(prevState => !prevState);
  };

  return (
    <>
      <Header handleToggle={handleToggle} />
      <Sidebar collapse={collapse} handleToggle={handleToggle} />
      <Box component="main" width="100%" pt={lgUp ? '100px' : '80px'}>
        {children}
      </Box>
      <Footer />
    </>
  );
};

export default LandingLayout;
