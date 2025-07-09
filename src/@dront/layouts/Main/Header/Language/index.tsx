import { useEffect, useState } from 'react';
import { Avatar, IconButton, Menu, MenuItem, Tooltip, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from '@/store/hooks';
import { setAppearance } from '@/store/slice/appearance';
import type { ApplicationState } from '@/store/store';

const Languages = [
  {
    flagname: 'English',
    icon: '/images/flag/en.svg',
    value: 'en'
  },
  {
    flagname: 'Deutsch',
    icon: '/images/flag/de.svg',
    value: 'de'
  },
  {
    flagname: 'Bahasa Indonesia',
    icon: '/images/flag/id.svg',
    value: 'id'
  }
];

const Language = () => {
  const [anchorElement, setAnchorElement] = useState(null);

  const dispatch = useDispatch();

  const open = Boolean(anchorElement);

  const { activeLanguage } = useSelector((state: ApplicationState) => state.appearance);

  const currentLanguage = Languages.find(_language => _language.value === activeLanguage) || Languages[1];

  const { i18n } = useTranslation();

  const handleOpen = (event: any) => {
    setAnchorElement(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorElement(null);
  };

  useEffect(() => {
    i18n.changeLanguage(activeLanguage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Tooltip title="Language" arrow>
        <IconButton
          aria-label="language"
          id="language-menu"
          aria-controls={open ? 'language-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleOpen}
        >
          <Avatar src={currentLanguage.icon} alt={currentLanguage.value} sx={{ width: 20, height: 20 }} />
        </IconButton>
      </Tooltip>
      <Menu
        id="language-menu"
        anchorEl={anchorElement}
        open={open}
        onClose={handleClose}
        sx={{ '& .MuiMenu-paper': { width: '200px' } }}
      >
        {Languages.map(option => (
          <MenuItem
            key={option.value}
            sx={{ py: 2, px: 3 }}
            onClick={() => dispatch(setAppearance('activeLanguage', option.value))}
          >
            <Stack direction="row" spacing={1} alignItems="center">
              <Avatar src={option.icon} alt={option.icon} sx={{ width: 20, height: 20 }} />
              <Typography> {option.flagname}</Typography>
            </Stack>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default Language;
