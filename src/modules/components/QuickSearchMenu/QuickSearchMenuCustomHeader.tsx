'use client';

import QuickSearchMenu, { type QuickSearchShape } from '@dront/ui/QuickSearchMenu';
import { useRouter } from 'next/navigation';

const menus = [{ id: '1', title: 'Dashboard', icon: 'mdi:view-dashboard', url: '/dashboard', children: [] }];

export default function QuickSearchMenuCustomHeader() {
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
      headerOptions={{
        placeholder: 'Cari menu cepat...',
        searchIconColor: 'secondary',
        closeShortcutDesktop: 'ESC',
        closeShortcutMobile: 'tutup',
        closeButtonBg: '#fff',
        closeButtonBorder: '1px solid #ddd'
      }}
    />
  );
}
