'use client';

import QuickSearchMenu, { type QuickSearchShape } from '@dront/ui/QuickSearchMenu';
import { useRouter } from 'next/navigation';

const menus = [
  {
    id: 'dashboard',
    title: 'Dashboard',
    icon: 'mdi:view-dashboard',
    type: 'item',
    url: '/dashboard',
    description: 'Halaman utama dengan ringkasan performa',
    children: []
  }
];

export default function QuickSearchMenuCustomLabels() {
  const router = useRouter();

  type MenuItem = (typeof menus)[number];
  const shape: QuickSearchShape<MenuItem> = {
    id: 'id',
    title: 'title',
    description: 'description',
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
      labels={{
        searchHistoryTitle: 'Histori',
        menuListTitle: 'Semua Fitur',
        itemLabel: 'menu',
        emptySearchDescription: 'Coba kata kunci berbeda atau periksa penulisan',
        emptySearchTitleTemplate: term => `Tidak ada hasil untuk "${term}"`,
        searchSectionPrefix: 'Mencari:'
      }}
    />
  );
}
