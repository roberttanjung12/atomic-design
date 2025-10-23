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
    title: 'Accordion',
    href: '/components/accordion'
  },
  {
    id: uniqueId(),
    title: 'Alert',
    href: '/components/alert'
  },
  {
    id: uniqueId(),
    title: 'Alert (Floating)',
    href: '/components/alert-floating'
  },
  {
    id: uniqueId(),
    title: 'Avatar',
    href: '/components/avatar'
  },
  {
    id: uniqueId(),
    title: 'Breadcrumbs',
    href: '/components/breadcrumbs'
  },
  {
    id: uniqueId(),
    title: 'Button',
    href: '/components/button'
  },
  {
    id: uniqueId(),
    title: 'Chip',
    href: '/components/chip'
  },
  {
    id: uniqueId(),
    title: 'Chart',
    href: '/components/chart'
  },
  {
    id: uniqueId(),
    title: 'Checkbox',
    href: '/components/checkbox'
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
  },
  {
    id: uniqueId(),
    title: 'Gantt Chart',
    href: '/components/gantt-chart'
  },
  {
    id: uniqueId(),
    title: 'Progress Bar',
    href: '/components/progress-bar'
  },
  {
    id: uniqueId(),
    title: 'Progress Circular',
    href: '/components/progress-circular'
  },
  {
    id: uniqueId(),
    title: 'Progress Tracker',
    href: '/components/progress-tracker'
  },
  {
    id: uniqueId(),
    title: 'Radio Button',
    href: '/components/radio-button'
  },
  {
    id: uniqueId(),
    title: 'Status Indicator',
    href: '/components/status-indicator'
  },
  {
    id: uniqueId(),
    title: 'Table',
    href: '/components/table'
  },
  {
    id: uniqueId(),
    title: 'Tabs Navigator',
    href: '/components/tabs-navigator'
  },
  {
    id: uniqueId(),
    title: 'Theme Manager',
    href: '/components/theme-manager'
  },
  {
    id: uniqueId(),
    title: 'Time Machine',
    href: '/components/time-machine'
  },
  {
    id: uniqueId(),
    title: 'Timeline Tree',
    href: '/components/timeline-tree'
  },
  {
    id: uniqueId(),
    title: 'Toggle',
    href: '/components/toggle'
  },
  {
    id: uniqueId(),
    title: 'Tooltip',
    href: '/components/tooltip'
  },
  {
    id: uniqueId(),
    title: 'Upload Image',
    href: '/components/upload-image'
  },
  {
    id: uniqueId(),
    title: 'Upload File',
    href: '/components/upload-file'
  },
  {
    id: uniqueId(),
    title: 'Rating',
    href: '/components/rating'
  },
  {
    id: uniqueId(),
    title: 'Document File Type',
    href: '/components/document-file-type'
  }
];

export default Menuitems;
