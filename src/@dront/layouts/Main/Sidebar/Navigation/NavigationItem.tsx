import { Circle as CircleIcon, NearbyError as NearbyErrorIcon } from '@mui/icons-material';
import {
  Chip,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { type ChipProps } from '@mui/material/Chip';
import { lighten, styled, type Theme } from '@mui/material/styles';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import type { NavigationItemProps } from './navigation-types';

const NavigationItem = ({ item, level = 1, pathDirect, hideMenu, onClick }: NavigationItemProps) => {
  const lgDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'));

  const Icon = level > 1 ? CircleIcon : (item?.icon ?? NearbyErrorIcon);

  const { palette } = useTheme();

  const { t } = useTranslation();

  const itemIcon = level > 1 ? <Icon sx={{ fontSize: '0.4rem!important' }} /> : <Icon fontSize="small" />;

  const subPadding = level > 2 ? `${level * 15}px` : '20px';

  const paddingX = 20;

  const ListItemStyled = styled(ListItemButton)(() => ({
    whiteSpace: 'nowrap',
    marginBottom: '2px',
    padding: `14px ${paddingX}px`,
    paddingLeft: hideMenu ? `${paddingX}px` : subPadding,
    borderRight: '4px solid transparent',
    color: palette.grey['400'],
    '& .MuiListItemIcon-root': {
      minWidth: 36,
      color: palette.grey['400']
    },
    '&:hover': {
      backgroundColor: palette.action.hover
    },
    '&.Mui-selected': {
      backgroundColor: palette.primary.light,
      color: palette.primary.main,
      borderRight: `4px solid ${palette.primary.main}`,
      '& .MuiListItemIcon-root': {
        color: palette.primary.main
      },
      '&:hover': {
        backgroundColor: lighten(palette.primary.light, 0.4)
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
              p: '3px 0',
              color: level > 1 && pathDirect === item?.href ? `${palette.primary.main}!important` : 'inherit'
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
