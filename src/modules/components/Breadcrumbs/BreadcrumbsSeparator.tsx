import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import BrightnessLowIcon from '@mui/icons-material/BrightnessLow';
import { Stack, useTheme } from '@mui/material';
import Breadcrumbs from '@/@dront/components/Breadcrumbs';

const BreadcrumbsSeparator = () => {
  const theme = useTheme();

  return (
    <Stack spacing={2}>
      <Breadcrumbs
        items={[{ label: 'Dashboard', href: '/' }, { label: 'Component', href: '/core' }, { label: 'Breadcrumb' }]}
        separator={<ArrowRightIcon />}
        color={theme.palette.action.active}
      />

      <Breadcrumbs
        items={[{ label: 'Dashboard', href: '/' }, { label: 'Component', href: '/core' }, { label: 'Breadcrumb' }]}
        separator={<BrightnessLowIcon fontSize="small" sx={{ color: theme.palette.action.disabled }} />}
      />

      <Breadcrumbs
        items={[{ label: 'Dashboard', href: '/' }, { label: 'Component', href: '/core' }, { label: 'Breadcrumb' }]}
        separator="/"
      />
    </Stack>
  );
};

export default BreadcrumbsSeparator;
