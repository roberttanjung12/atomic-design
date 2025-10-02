import type { ReactNode } from 'react';
import { ChevronRight as ChevronRightIcon } from '@mui/icons-material';
import { styled, useTheme, type BreadcrumbsProps, Breadcrumbs as BreadcrumbsMui } from '@mui/material';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { uniqueId } from 'lodash';
import { useTranslation } from 'react-i18next';

export interface BreadcrumbItem {
  label: string;
  href?: string;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
}

interface CustomBreadcrumbsProps {
  items: BreadcrumbItem[];
  color?: string;
  variant?: 'text' | 'contained';
  separator?: ReactNode;
  slotProps?: {
    root?: BreadcrumbsProps;
  };
}

const ChipSpan = styled('span')<{ contained?: boolean; colorValue: string }>(({ theme, contained, colorValue }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 4,
  fontSize: '0.875rem',
  fontWeight: contained ? 500 : 400,
  padding: contained ? '2px 8px' : 0,
  borderRadius: contained ? '16px' : 0,
  backgroundColor: contained ? colorValue : 'transparent',
  color: contained ? theme.palette.common.white : colorValue
}));

const Breadcrumbs = ({ items, color, variant = 'text', separator, slotProps }: CustomBreadcrumbsProps) => {
  const { t } = useTranslation();
  const theme = useTheme();

  const linkColor = color ?? theme.palette.primary.main;
  const { ...rootProps } = slotProps?.root ?? {};

  return (
    <BreadcrumbsMui aria-label="breadcrumb" separator={separator || <ChevronRightIcon />} {...rootProps}>
      {items.map(item => {
        const content = (
          <ChipSpan contained={variant === 'contained'} colorValue={linkColor}>
            {item.icon && item.iconPosition !== 'right' && item.icon}
            {t(`${item.label}`)}
            {item.icon && item.iconPosition === 'right' && item.icon}
          </ChipSpan>
        );

        return item.href ? (
          <Link
            key={uniqueId()}
            underline="hover"
            color="inherit"
            href={item.href}
            sx={{ display: 'flex', alignItems: 'center', color: linkColor }}
          >
            {content}
          </Link>
        ) : (
          <Typography key={uniqueId()} sx={{ display: 'flex', alignItems: 'center', color: linkColor }}>
            {content}
          </Typography>
        );
      })}
    </BreadcrumbsMui>
  );
};

export default Breadcrumbs;
