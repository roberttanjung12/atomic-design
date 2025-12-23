'use client';

import QuickSearchMenu, { type QuickSearchShape } from '@dront/ui/QuickSearchMenu';
import { useRouter } from 'next/navigation';

const menus = [
  { id: '1', title: 'Dashboard', icon: 'mdi:view-dashboard', url: '/dashboard', children: [] },
  { id: '2', title: 'Laporan', icon: 'mdi:file-chart', url: '/reports', children: [] }
];

export default function QuickSearchMenuCustomStyles() {
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
      listStyles={{
        selectedBg: '#e8f5e9',
        selectedShadow: '0 0 0 1px #43a04755',
        hoverBg: '#f1f8e9',
        hoverShadow: '0 0 0 1px #7cb34255'
      }}
    />
  );
}
