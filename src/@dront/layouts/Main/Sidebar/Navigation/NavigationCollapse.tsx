import { useEffect, useState } from 'react';
import {
  ArrowDropDown as ArrowDropDownIcon,
  ArrowDropUp as ArrowDropUpIcon,
  NearbyError as NearbyErrorIcon
} from '@mui/icons-material';
import { Collapse, ListItemButton, ListItemIcon, ListItemText, Typography, useMediaQuery } from '@mui/material';
import { styled, type Theme } from '@mui/material/styles';
import { isNull } from 'lodash';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { useSelector } from '@/store/hooks';
import type { ApplicationState } from '@/store/store';
import type { NavigationCollapseProps } from './navigation-types';
import NavigationItem from './NavigationItem';

const NavigationCollapse = ({
  menu,
  level = 1,
  pathWithoutLastPart,
  pathDirect,
  hideMenu,
  onClick
}: NavigationCollapseProps) => {
  const [open, setOpen] = useState(false);

  const lgDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'));

  const { sidebar } = useSelector((state: ApplicationState) => state.appearance);

  const pathname = usePathname();

  const { t } = useTranslation();

  const Icon = menu?.icon ?? NearbyErrorIcon;

  const menuIcon = level > 1 ? <Icon sx={{ fontSize: '0.9rem!important' }} /> : <Icon fontSize="small" />;

  const handleClick = () => {
    setOpen(!open);
  };

  useEffect(() => {
    setOpen(false);
    menu?.children?.forEach((item: any) => {
      if (item?.href === pathname) {
        setOpen(true);
      }
    });
  }, [pathname, menu.children]);

  const itemColor = level > 1 && open ? sidebar.itemSelectedColor : sidebar.itemColor;
  const subPadding = level > 2 ? `${level * 15}px` : '10px';

  const ListItemStyled = styled(ListItemButton)(() => ({
    marginBottom: '2px',
    padding: '8px 10px',
    paddingLeft: hideMenu ? '10px' : subPadding,
    backgroundColor: open && level < 2 ? sidebar.itemSelectedBackground : '',
    color: open && level < 2 ? 'white' : itemColor,
    whiteSpace: 'nowrap',
    '&:hover': {
      backgroundColor: pathname.includes(menu?.href) || open ? sidebar.itemSelectedBackground : '',
      color: pathname.includes(menu?.href) || open ? sidebar.itemColor : sidebar.itemHoverColor,
      '& MuiSvgIcon-root': {
        color: '#FF00000'
      }
    },
    borderRadius: 5
  }));

  const submenus = menu.children?.map((item: any) => {
    if (item.children) {
      return (
        <NavigationCollapse
          key={item?.id}
          menu={item}
          level={level + 1}
          pathWithoutLastPart={pathWithoutLastPart}
          pathDirect={pathDirect}
          hideMenu={hideMenu}
          onClick={onClick}
        />
      );
    } else {
      return (
        <NavigationItem
          key={item.id}
          item={item}
          level={level + 1}
          pathDirect={pathDirect}
          hideMenu={hideMenu}
          onClick={lgDown ? onClick : isNull}
        />
      );
    }
  });

  const arrowSwitch = !open ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />;

  return (
    <>
      <ListItemStyled onClick={handleClick} selected={pathWithoutLastPart === menu.href} key={menu?.id}>
        <ListItemIcon sx={{ minWidth: '36px', p: '3px 0', color: 'inherit' }}>{menuIcon}</ListItemIcon>

        <ListItemText color="inherit">
          {hideMenu ? '' : <Typography fontSize="0.85rem">{t(`${menu.title}`)}</Typography>}
        </ListItemText>

        {hideMenu ? '' : arrowSwitch}
      </ListItemStyled>

      <Collapse in={open} timeout="auto">
        {submenus}
      </Collapse>
    </>
  );
};

export default NavigationCollapse;
