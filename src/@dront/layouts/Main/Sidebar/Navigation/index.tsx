import { List, useMediaQuery } from '@mui/material';
import { type Theme } from '@mui/material/styles';
import { usePathname } from 'next/navigation';
import { useMainLayout } from '@/@dront/context/MainLayoutProvider';
import { sidebarActions, useSidebarStore } from '@/@dront/store';
import NavigationCollapse from './NavigationCollapse';
import NavigationGroup from './NavigationGroup';
import NavigationItem from './NavigationItem';

const SidebarNavigation = () => {
  const lgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'));
  const pathname = usePathname();
  const pathDirect = pathname;
  const pathWithoutLastPart = pathname.slice(0, pathname.lastIndexOf('/'));
  const { navigations } = useMainLayout();
  const [isCollapse] = useSidebarStore('isCollapse');
  const [isHover] = useSidebarStore('isHover');
  const hideMenu: any = lgUp ? isCollapse && !isHover : '';

  const toggleMobileSidebar = () => {
    sidebarActions.toggleMobileSidebar();
  };

  return (
    <List sx={{ pt: 0 }}>
      {navigations?.map(item => {
        if (item.subheader) {
          return <NavigationGroup item={item} hideMenu={hideMenu} key={item.subheader} />;
        } else if (item.children) {
          return (
            <NavigationCollapse
              menu={item}
              pathDirect={pathDirect}
              hideMenu={hideMenu}
              pathWithoutLastPart={pathWithoutLastPart}
              level={1}
              key={item.id}
              onClick={toggleMobileSidebar}
            />
          );
        } else {
          return (
            <NavigationItem
              item={item}
              level={item.level}
              key={item.id}
              pathDirect={pathDirect}
              hideMenu={hideMenu}
              onClick={toggleMobileSidebar}
            />
          );
        }
      })}
    </List>
  );
};

export default SidebarNavigation;
