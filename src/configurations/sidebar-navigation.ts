import { BarChart as BarChartIcon } from '@mui/icons-material';
import { uniqueId } from 'lodash';
import type { NavigationItem } from '@/@dront/layouts';

const sidebarGroups: Record<string, NavigationItem[]> = {
  'Getting Started': [
    {
      id: uniqueId(),
      title: 'Overview',
      icon: BarChartIcon,
      href: '/dashboard/overview'
    }
  ],
  Components: [
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
      title: 'Checkbox',
      href: '/components/checkbox'
    },
    {
      id: uniqueId(),
      title: 'Countdown',
      href: '/components/countdown'
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
  ],
  'Data Display': [
    {
      id: uniqueId(),
      title: 'Chart',
      href: '/components/chart',
      children: [
        {
          id: uniqueId(),
          title: 'Area Chart',
          href: '/components/chart/area'
        },
        {
          id: uniqueId(),
          title: 'Bar Chart',
          href: '/components/chart/bar'
        },
        {
          id: uniqueId(),
          title: 'Donut Chart',
          href: '/components/chart/donut'
        },
        {
          id: uniqueId(),
          title: 'Heatmap Chart',
          href: '/components/chart/heatmap'
        },
        {
          id: uniqueId(),
          title: 'Line Chart',
          href: '/components/chart/line'
        },
        {
          id: uniqueId(),
          title: 'Radar Chart',
          href: '/components/chart/radar'
        },
        {
          id: uniqueId(),
          title: 'Sankey Chart',
          href: '/components/chart/sankey'
        },
        {
          id: uniqueId(),
          title: 'Sunburst Chart',
          href: '/components/chart/sunburst'
        },
        {
          id: uniqueId(),
          title: 'Gantt Chart',
          href: '/components/chart/gantt'
        }
      ]
    },
    {
      id: uniqueId(),
      title: 'Image Viewer',
      href: '/data-display/image-viewer'
    },
    {
      id: uniqueId(),
      title: 'Table',
      href: '/components/table'
    },
    {
      id: uniqueId(),
      title: 'Tooltip',
      href: '/components/tooltip'
    }
  ],
  Feedback: [
    {
      id: uniqueId(),
      title: 'Alert',
      href: '/components/alert'
    },
    {
      id: uniqueId(),
      title: 'Status Indicator',
      href: '/components/status-indicator'
    }
  ],
  Inputs: [
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
  ],
  Surfaces: [
    {
      id: uniqueId(),
      title: 'Accordion',
      href: '/components/accordion'
    }
  ],
  Utility: [
    {
      id: uniqueId(),
      title: 'Alert (Floating)',
      href: '/utility/alert-floating'
    },
    {
      id: uniqueId(),
      title: 'Programmatic',
      href: '/utility/programmatic'
    }
  ]
};

const Menuitems: NavigationItem[] = Object.entries(sidebarGroups).reduce<NavigationItem[]>(
  (prev, [subheader, menus]) => {
    return [
      ...prev,
      {
        navigationLabel: true,
        subheader
      },
      ...menus
    ];
  },
  []
);

export default Menuitems;
