import { ProgrammaticContainer } from '@dront/ui/programmatic';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={{}}>
      <CssBaseline />
      <ProgrammaticContainer />

      {children}
    </ThemeProvider>
  );
};

export default RootLayout;
