import { BarChart as BarChartIcon } from '@mui/icons-material';
import { uniqueId } from 'lodash';
import type { NavigationItem } from '@/@dront/layouts';

const Menuitems: NavigationItem[] = [
  {
    navigationLabel: true,
    subheader: 'Getting Started'
  },
  {
    id: uniqueId(),
    title: 'Overview',
    icon: BarChartIcon,
    href: '/dashboard/overview'
  },
  {
    navigationLabel: true,
    subheader: 'Components'
  },
  {
    id: uniqueId(),
    title: 'Field Password',
    href: '/components/field-password'
  },
  {
    id: uniqueId(),
    title: 'Field Password Validation',
    href: '/components/field-password-validation'
  },
  {
    id: uniqueId(),
    title: 'Field Text',
    href: '/components/field-text'
  },
  {
    id: uniqueId(),
    title: 'Field Text Validation',
    href: '/components/field-text-validation'
  }
];

export default Menuitems;
