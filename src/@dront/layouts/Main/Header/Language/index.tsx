import { useEffect, useState } from 'react';
import { Avatar, IconButton, Menu, MenuItem, Tooltip, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { useTranslation } from 'react-i18next';
import usePersistedReducer from '@/@dront/utils/usePersistedReducer';

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

const myReducer = (state: any, action: Record<string, any>) => {
  if (action.type === 'CHANGE_LANG') {
    return { ...state, lang: action.payload };
  }

  return state;
};

const Language = () => {
  const [anchorElement, setAnchorElement] = useState(null);
  const [languageState, languageDispatch] = usePersistedReducer(myReducer, { lang: 'id' }, 'lang_state');

  const open = Boolean(anchorElement);

  const currentLanguage = Languages.find(language => language.value === languageState.lang) || Languages[1];

  const { i18n } = useTranslation();

  const handleOpen = (event: any) => {
    setAnchorElement(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorElement(null);
  };

  const handleChangeLang = (selectedLanguage: string) => {
    languageDispatch({ type: 'CHANGE_LANG', payload: selectedLanguage });
    i18n.changeLanguage(selectedLanguage);
    setAnchorElement(null);
  };

  useEffect(() => {
    i18n.changeLanguage(languageState.lang);
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
            onClick={() => {
              handleChangeLang(option.value);

              // dispatch(setAppearance('activeLanguage', option.value));
            }}
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
