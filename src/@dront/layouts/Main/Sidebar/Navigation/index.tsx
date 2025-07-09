import { List, useMediaQuery } from '@mui/material';
import { type Theme } from '@mui/material/styles';
import { usePathname } from 'next/navigation';
import Menuitems from '@/configurations/sidebar-navigation';
import { useDispatch, useSelector } from '@/store/hooks';
import { toggleMobileSidebar } from '@/store/slice/appearance';
import type { ApplicationState } from '@/store/store';
import NavigationCollapse from './NavigationCollapse';
import NavigationGroup from './NavigationGroup';
import NavigationItem from './NavigationItem';

const SidebarNavigation = () => {
  const lgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'));

  const pathname = usePathname();

  const pathDirect = pathname;

  const pathWithoutLastPart = pathname.slice(0, pathname.lastIndexOf('/'));

  const { isCollapse, isHover } = useSelector((state: ApplicationState) => state.appearance.sidebar);

  const hideMenu: any = lgUp ? isCollapse && !isHover : '';

  const dispatch = useDispatch();

  return (
    <List sx={{ pt: 0 }}>
      {Menuitems.map(item => {
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
              onClick={() => dispatch(toggleMobileSidebar())}
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
              onClick={() => dispatch(toggleMobileSidebar())}
            />
          );
        }
      })}
    </List>
  );
};

export default SidebarNavigation;
