import GrainIcon from '@mui/icons-material/Grain';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import { Stack } from '@mui/material';
import Breadcrumbs from '@/@dront/components/Breadcrumbs';

const BreadcrumbsVariant = () => {
  return (
    <Stack spacing={2}>
      <Breadcrumbs
        items={[
          { label: 'Dashboard', href: '/', icon: <HomeIcon fontSize="inherit" />, iconPosition: 'left' },
          { label: 'Component', href: '/core', icon: <WhatshotIcon fontSize="inherit" />, iconPosition: 'right' },
          { label: 'Breadcrumb', icon: <GrainIcon fontSize="inherit" />, iconPosition: 'left' }
        ]}
        variant="contained"
      />

      <Breadcrumbs
        items={[
          { label: 'Dashboard', href: '/', icon: <HomeIcon fontSize="inherit" />, iconPosition: 'left' },
          { label: 'Component', href: '/core', icon: <WhatshotIcon fontSize="inherit" />, iconPosition: 'right' },
          { label: 'Breadcrumb', icon: <GrainIcon fontSize="inherit" />, iconPosition: 'left' }
        ]}
        variant="text"
      />
    </Stack>
  );
};

export default BreadcrumbsVariant;
