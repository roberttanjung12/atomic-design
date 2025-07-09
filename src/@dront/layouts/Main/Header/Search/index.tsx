import { useState } from 'react';
import { HighlightOff as HighlightOffIcon, Search as SearchIcon } from '@mui/icons-material';
import {
  Box,
  Dialog,
  DialogContent,
  Divider,
  IconButton,
  List,
  ListItemText,
  ListItemButton,
  Stack,
  TextField,
  Typography
} from '@mui/material';
import Link from 'next/link';
import SidebarNavigationItems from '@/configurations/sidebar-navigation';

interface MenuType {
  title: string;
  id: string;
  subheader: string;
  children: MenuType[];
  href: string;
}

const Search = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const [search, setSearch] = useState('');

  const handleClose = () => {
    setShowDrawer(false);
  };

  const filterRoutes = (routes: any[], searchTerm: string) => {
    if (!Array.isArray(routes)) {
      return [];
    }

    if (!routes.length) {
      return [];
    }

    return routes.reduce((accumulator: MenuType[], route: MenuType) => {
      if (route.children && route.children.length > 0) {
        const filteredChildren = route.children.filter(child =>
          child.title?.toLowerCase().includes(searchTerm.toLowerCase())
        );

        if (filteredChildren.length > 0) {
          accumulator.push(...filteredChildren);
        }
      } else if (route.title?.toLowerCase().includes(searchTerm.toLowerCase())) {
        accumulator.push(route);
      }

      return accumulator;
    }, []);
  };

  const searchData = filterRoutes(SidebarNavigationItems, search);

  return (
    <>
      <IconButton
        aria-label="quick-search"
        color="inherit"
        aria-controls="search-menu"
        aria-haspopup="true"
        onClick={() => setShowDrawer(true)}
        size="large"
      >
        <SearchIcon />
      </IconButton>

      <Dialog
        open={showDrawer}
        onClose={() => setShowDrawer(false)}
        fullWidth
        maxWidth={'sm'}
        aria-labelledby="quick-search-title"
        aria-describedby="quick-search-description"
        sx={{ position: 'fixed', top: 30, m: 0 }}
      >
        <DialogContent className="testdialog">
          <Stack direction="row" spacing={2} alignItems="center">
            <TextField
              id="quick-search"
              placeholder="Search here"
              fullWidth
              onChange={e => setSearch(e.target.value)}
              slotProps={{ htmlInput: { 'aria-label': 'Search here' } }}
            />

            <IconButton size="small" onClick={handleClose} aria-label="close">
              <HighlightOffIcon />
            </IconButton>
          </Stack>
        </DialogContent>

        <Divider />

        <Box p={2} maxHeight="60vh" overflow="auto">
          <Typography variant="h5" p={1}>
            Quick Page Links
          </Typography>

          <Box>
            <List component="nav" aria-label="Quick Page Links">
              {searchData.map((menu: MenuType) => {
                return (
                  <Box key={menu.title ? menu.id : menu.subheader}>
                    {menu.title && !menu.children ? (
                      <ListItemButton sx={{ py: 0.5, px: 1 }} href={menu?.href} component={Link}>
                        <ListItemText primary={menu.title} secondary={menu?.href} sx={{ my: 0, py: 0.5 }} />
                      </ListItemButton>
                    ) : (
                      ''
                    )}
                    {menu.children ? (
                      <>
                        {menu.children.map((child: MenuType) => {
                          return (
                            <ListItemButton
                              sx={{ py: 0.5, px: 1 }}
                              href={child.href}
                              component={Link}
                              key={child.title ? child.id : menu.subheader}
                            >
                              <ListItemText primary={child.title} secondary={child.href} sx={{ my: 0, py: 0.5 }} />
                            </ListItemButton>
                          );
                        })}
                      </>
                    ) : (
                      ''
                    )}
                  </Box>
                );
              })}
            </List>
          </Box>
        </Box>
      </Dialog>
    </>
  );
};

export default Search;
