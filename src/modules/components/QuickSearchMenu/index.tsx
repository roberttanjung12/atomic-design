'use client';

import QuickSearchMenu from '@dront/ui/QuickSearchMenu';
import { DocView } from '@/@dront/components';

import QuickSearchMenuBasic from './QuickSearchMenuBasic';
import basicCode from './QuickSearchMenuBasic?raw';
import QuickSearchMenuCustomHeader from './QuickSearchMenuCustomHeader';
import customHeaderCode from './QuickSearchMenuCustomHeader?raw';
import QuickSearchMenuCustomLabels from './QuickSearchMenuCustomLabels';
import customLabelsCode from './QuickSearchMenuCustomLabels?raw';
import QuickSearchMenuCustomStyles from './QuickSearchMenuCustomStyles';
import customStylesCode from './QuickSearchMenuCustomStyles?raw';
import QuickSearchMenuLoading from './QuickSearchMenuLoading';
import loadingCode from './QuickSearchMenuLoading?raw';
import QuickSearchMenuOnItemClick from './QuickSearchMenuOnItemClick';
import onItemClickCode from './QuickSearchMenuOnItemClick?raw';

const overview = `The \`QuickSearchMenu\` component provides a universal command palette / omni search
experience for hierarchical menu data. It renders a small trigger button and launches a modal with:
- Perfect-match-first search, with fuzzy fallback (Fuse.js)
- Rich highlighting for matched text (including parent vs. leaf emphasis)
- Hierarchical breadcrumb labels (root → leaf)
- Recent selection history persisted in localStorage (with per-key clear/remove actions)
- Keyboard accessibility (global shortcut, escape to close, arrows + Enter navigation)
- Flexible theming & internationalization overrides

This component is generic (<T>) allowing you to pass any menu item shape via the \`shape\` mapping.
It focuses on UX, accessibility, and extensibility while remaining light-weight. Filtering & flattening
logic lives in internal hook(s) so you can keep the menu source stable and memoized.

Notes:
- When the search input is empty, keyboard navigation targets only the “Recent” list by design.
- In search mode, the results list is keyboard navigable.
- Icon rendering depends on \`shape.iconType\`: for search results, icons are derived from the root menu when available.`;

const QuickSearchMenuModule = () => {
  return (
    <DocView
      contributors={['Sanday Azis Prayogi']}
      overview={overview}
      sections={[
        {
          title: 'Basic Usage',
          descriptions:
            'Minimal configuration showing the trigger and modal using a shape map and a localName key to persist recent selections. Uses all default Indonesian labels and theme-driven styles.',
          example: <QuickSearchMenuBasic />,
          exampleCode: basicCode
        },
        {
          title: 'Custom Labels (i18n)',
          descriptions:
            'Demonstrates internationalization by overriding interface copy (section titles, empty state template, item label). All label keys are optional and merged on top of the defaults.',
          example: <QuickSearchMenuCustomLabels />,
          exampleCode: customLabelsCode
        },
        {
          title: 'Custom Header Options',
          descriptions:
            'Customize search input placeholder, search icon color, and close shortcut labels (desktop/mobile) to align with brand or internal conventions.',
          example: <QuickSearchMenuCustomHeader />,
          exampleCode: customHeaderCode
        },
        {
          title: 'Custom Interactive Styles',
          descriptions:
            'Showcases overriding item background and shadow for hover and selected states. Helpful for increased contrast, dark mode tuning, or brand‑specific emphasis.',
          example: <QuickSearchMenuCustomStyles />,
          exampleCode: customStylesCode
        },
        {
          title: 'Loading State',
          descriptions:
            'Use the isLoading flag to display skeleton placeholders while menu data is being fetched. Maintains layout stability and prevents flicker.',
          example: <QuickSearchMenuLoading />,
          exampleCode: loadingCode
        },
        {
          title: 'Custom onItemClick + Navigation',
          descriptions:
            'Illustrates using onItemClick for analytics or side effects before/after navigation. Recent history is still recorded automatically.',
          example: <QuickSearchMenuOnItemClick />,
          exampleCode: onItemClickCode
        }
      ]}
      propsDoc={{
        component: QuickSearchMenu,
        propDefinitions: {
          menus: {
            type: 'T[]',
            required: true,
            description:
              'Source menu data (mixed groups and leaf items). Keep this array stable/memoized to avoid unnecessary modal recomputation.'
          },
          shape: {
            type: 'QuickSearchShape<T>',
            required: true,
            description:
              'Shallow accessor map describing how to read id, title, optional description, path (url), children, and icon from generic items. Dot‑paths are intentionally disallowed for type safety. Use iconType="iconify" to use iconify strings; iconType="default" intentionally ignores provided icons and uses built-in defaults.'
          },
          localName: {
            type: 'string',
            required: true,
            description:
              'localStorage namespace key used to persist recent selections. Choose a unique value per application / tenant.'
          },
          router: {
            type: '{ push: (path: string) => void }',
            required: true,
            description:
              'Routing helper exposing a push method. The component is framework-agnostic; in Next.js App Router you can pass the result of useRouter(). When a selected item has a path, the modal will navigate via router.push().'
          },
          onItemClick: {
            type: '(item: T) => void',
            description:
              'Optional callback invoked when a leaf item is selected after history recording and before navigation. Use for analytics, logging, or extra side effects.'
          },
          maxRecent: {
            type: 'number',
            default: '10',
            description:
              'Maximum number of recent selections to persist and display. Falls back to internal default if omitted.'
          },
          isLoading: {
            type: 'boolean',
            default: 'false',
            description:
              'Controls whether the modal shows a skeleton/loading state. Use while performing asynchronous menu fetches.'
          },
          labels: {
            type: 'Partial<QuickSearchMenuLabels>',
            description:
              'UI copy overrides. Defaults (Indonesian): { searchSectionPrefix, searchHistoryTitle, menuListTitle, emptySearchTitleTemplate(term), emptySearchDescription, itemLabel, clearHistoryButton }. Provide only keys you need to change.'
          },
          headerOptions: {
            type: 'Partial<QuickSearchHeaderOptions>',
            description:
              'Header visual overrides: input placeholder, searchIconColor (palette key), mobile/desktop close shortcuts, closeButtonBg, closeButtonBorder.'
          },
          listStyles: {
            type: 'QuickSearchListStyles',
            description:
              'Interactive state style overrides for items: selectedBg, selectedShadow, hoverBg, hoverShadow. Useful for custom contrast & theming.'
          },
          triggerButtonStyles: {
            type: 'Partial<QuickSearchTriggerButtonStyles>',
            description:
              'Trigger button style overrides: colorButton (MUI color key), mobileBg, desktopBg, boxShadow, borderRadius, padding, and gap. Useful when you want the launcher button to blend into your header.'
          }
        }
      }}
      dependencies={
        {
          '@mui/material': {
            version: '^7.1.1',
            description: 'Base UI components, theming, and breakpoint utilities for responsive behavior.'
          },
          '@mui/icons-material': {
            version: '^7.1.1',
            description: 'Provides the Search icon used in the trigger button.'
          },
          next: {
            version: '^15.3.3',
            description:
              'Optional integration: examples use Next.js App Router (next/navigation) to supply a router.push implementation.'
          },
          '@iconify/react': {
            version: '^6.0.2',
            description: 'Icon rendering engine used when shape.iconType is set to iconify for rich scalable icons.'
          },
          'fuse.js': {
            version: '^7.1.0',
            description:
              'Lightweight fuzzy search library powering flexible query matching over flattened menu entries.'
          },
          'react-highlight-words': {
            version: '^0.21.0',
            description: 'Highlights matched keyword fragments inside menu labels for better visual feedback.'
          }
        } as any
      }
    />
  );
};

export default QuickSearchMenuModule;
