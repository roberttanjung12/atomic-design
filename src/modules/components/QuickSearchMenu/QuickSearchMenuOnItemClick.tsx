'use client';

import QuickSearchMenu, { type QuickSearchShape } from '@dront/ui/QuickSearchMenu';
import { useRouter } from 'next/navigation';

const menus = [
  { id: '1', title: 'Dashboard', icon: 'mdi:view-dashboard', url: '/dashboard', children: [] },
  { id: '2', title: 'Pengaturan', icon: 'mdi:cog-outline', url: '/settings', children: [] }
];

export default function QuickSearchMenuOnItemClick() {
  const router = useRouter();

  type MenuItem = (typeof menus)[number];
  const shape: QuickSearchShape<MenuItem> = {
    id: 'id',
    title: 'title',
    path: 'url',
    children: 'children',
    icon: 'icon',
    iconType: 'iconify'
  };

  return (
    <QuickSearchMenu
      menus={menus}
      localName="app.quicksearch"
      shape={shape}
      router={router}
      onItemClick={item => {
        // Navigate then log custom analytics
        if (item.url) router.push(item.url);
        console.log('QuickSearch select:', item.title);
      }}
      maxRecent={5}
    />
  );
}
