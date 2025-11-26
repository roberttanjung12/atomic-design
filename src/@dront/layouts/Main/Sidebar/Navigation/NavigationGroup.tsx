import { HorizontalRule as HorizontalRuleIcon } from '@mui/icons-material';
import { ListSubheader } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import { useAppearance } from '@/@dront/context/AppearanceProvider';
import type { NavigationGroupProps } from './navigation-types';

const NavigationGroup = ({ item, hideMenu }: NavigationGroupProps) => {
  const {
    appearanceState: { sidebar }
  } = useAppearance();

  const { t } = useTranslation();

  const ListSubheaderStyle = styled((props: any) => <ListSubheader disableSticky {...props} />)(({ theme }) => ({
    ...theme.typography.overline,
    fontSize: '0.7rem',
    fontWeight: 700,
    letterSpacing: 1.5,
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
    marginLeft: hideMenu ? '' : '10px',
    color: sidebar.subheaderColor,
    lineHeight: '26px',
    padding: '3px 20px'
  }));

  return (
    <ListSubheaderStyle disableSticky>
      {hideMenu ? <HorizontalRuleIcon sx={{ marginLeft: -0.4 }} /> : t(`${item?.subheader}`)}
    </ListSubheaderStyle>
  );
};

export default NavigationGroup;
