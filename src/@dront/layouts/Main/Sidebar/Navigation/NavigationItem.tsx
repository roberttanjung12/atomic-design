import { Circle as CircleIcon, NearbyError as NearbyErrorIcon } from '@mui/icons-material';
import { Chip, List, ListItemButton, ListItemIcon, ListItemText, Typography, useMediaQuery } from '@mui/material';
import { type ChipProps } from '@mui/material/Chip';
import { styled, type Theme } from '@mui/material/styles';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { useAppearance } from '@/@dront/context/AppearanceProvider';
import type { NavigationItemProps } from './navigation-types';

const NavigationItem = ({ item, level = 1, pathDirect, hideMenu, onClick }: NavigationItemProps) => {
  const {
    appearanceState: { sidebar }
  } = useAppearance();

  const lgDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'));

  const Icon = level > 1 ? CircleIcon : (item?.icon ?? NearbyErrorIcon);

  const { t } = useTranslation();

  const itemIcon = level > 1 ? <Icon sx={{ fontSize: '0.625rem!important' }} /> : <Icon fontSize="small" />;

  const subPadding = level > 1 ? `${level * 25}px` : '35px';

  const paddingX = 20;

  const ListItemStyled = styled(ListItemButton)(() => ({
    whiteSpace: 'nowrap',
    marginBottom: '2px',
    padding: `14px ${paddingX}px`,
    paddingLeft: hideMenu ? `${paddingX}px` : subPadding,
    borderRight: '4px solid transparent',
    color: sidebar.itemColor,
    '& .MuiListItemIcon-root': {
      minWidth: 36,
      color: sidebar.itemColor
    },
    '&:hover': {
      backgroundColor: sidebar.itemHoverBackground
    },
    '&.Mui-selected': {
      backgroundColor: sidebar.itemSelectedBackground,
      color: `${sidebar.itemSelectedColor}!important`,
      borderRight: `4px solid ${sidebar.itemSelectedBorderColor}`,
      '& .MuiListItemIcon-root': {
        color: `${sidebar.itemSelectedColor}!important`
      },
      '&:hover': {
        backgroundColor: sidebar.itemSelectedBackground
      }
    }
  }));

  return (
    <List component="li" disablePadding key={item?.id && item.title}>
      <Link href={item.href}>
        <ListItemStyled
          disabled={item?.disabled}
          selected={pathDirect === item?.href}
          onClick={lgDown ? onClick : undefined}
        >
          <ListItemIcon
            sx={{
              minWidth: '36px',
              p: '3px 0'
            }}
          >
            {itemIcon}
          </ListItemIcon>

          <ListItemText>
            {hideMenu ? '' : <>{t(`${item?.title}`)}</>}
            <br />
            {item?.subtitle ? <Typography variant="caption">{hideMenu ? '' : item?.subtitle}</Typography> : ''}
          </ListItemText>

          {!item?.chip || hideMenu ? null : (
            <Chip
              color={item?.chipColor}
              variant={(item?.variant as ChipProps['variant']) ?? 'filled'}
              size="small"
              label={item?.chip}
              sx={{ ml: 1 }}
            />
          )}
        </ListItemStyled>
      </Link>
    </List>
  );
};

export default NavigationItem;
