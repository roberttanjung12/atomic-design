import GrainIcon from '@mui/icons-material/Grain';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import Breadcrumbs from '@/@dront/components/Breadcrumbs';

const BreadcrumbsIcon = () => {
  return (
    <Breadcrumbs
      items={[
        { label: 'Dashboard', href: '/', icon: <HomeIcon fontSize="inherit" />, iconPosition: 'left' },
        { label: 'Component', href: '/core', icon: <WhatshotIcon fontSize="inherit" />, iconPosition: 'right' },
        { label: 'Breadcrumb', icon: <GrainIcon fontSize="inherit" />, iconPosition: 'left' }
      ]}
    />
  );
};

export default BreadcrumbsIcon;
