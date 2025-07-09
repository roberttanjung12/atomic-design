import { AccountCircleOutlined as AccountCircleOutlinedIcon } from '@mui/icons-material';

interface ProfileType {
  href: string;
  title: string;
  icon: any;
}

export const profile: ProfileType[] = [
  {
    href: '/account',
    icon: AccountCircleOutlinedIcon,
    title: 'Account'
  }
];
