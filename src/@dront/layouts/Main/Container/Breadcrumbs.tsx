import { Circle as CircleIcon } from '@mui/icons-material';
import { Box, Breadcrumbs, Link, Typography } from '@mui/material';
import { uniqueId } from 'lodash';
import { useTranslation } from 'react-i18next';
import type { BreadcrumbsInterface } from '@/@dront/components/PageID/page-id-types';

const ContainerBreadcrumbs = ({ title, routes }: BreadcrumbsInterface) => {
  const { t } = useTranslation();

  return (
    <Box mb={5}>
      <Typography variant="h1" fontSize={23} fontWeight={800}>
        {t(`${title}`)}
      </Typography>
      <Breadcrumbs sx={{ width: '100%' }} separator={<CircleIcon sx={{ width: 5, height: 5, color: '#CCC' }} />}>
        {routes?.map(route =>
          !route.href ? (
            <Typography key={uniqueId()} variant="subtitle2" fontSize={14} fontWeight={500}>
              {t(`${route.label}`)}
            </Typography>
          ) : (
            <Link
              key={uniqueId()}
              href={route.href}
              sx={{ textDecoration: 'none', color: 'inherit', fontSize: 14, fontWeight: 500 }}
            >
              {t(`${route.label}`)}
            </Link>
          )
        )}
      </Breadcrumbs>
    </Box>
  );
};

export default ContainerBreadcrumbs;
