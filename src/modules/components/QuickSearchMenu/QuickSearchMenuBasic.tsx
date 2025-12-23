'use client';

import QuickSearchMenu, { type QuickSearchShape } from '@dront/ui/QuickSearchMenu';
import { useRouter } from 'next/navigation';

const menus = [
  {
    id: '9b1093f2-2e4c-40d0-945b-227c54e51367',
    title: 'Dashboard',
    icon: 'mdi:view-dashboard',
    type: 'item',
    url: '/dashboard',
    description: 'Halaman utama dengan ringkasan performa',
    order_index: 1,
    children: [],
    permissions: [
      {
        action: 'view',
        subject: 'Dashboard'
      }
    ],
    features: []
  },
  {
    id: '9c9c8909-a632-4d95-8e86-79eb38011645',
    title: 'Manajemen Klien',
    icon: 'mdi:user-group',
    type: 'collapse',
    url: '',
    order_index: 2,
    children: [
      {
        id: '4736fb06-d759-4ab5-848b-b62cb8611b1f',
        title: 'Pelanggan',
        icon: '',
        type: 'item',
        url: '/management-client/customer',
        description: 'Halaman untuk mengelola pelanggan',
        order_index: 1,
        children: [],
        permissions: [
          { action: 'create', subject: 'Pelanggan' },
          { action: 'view', subject: 'Pelanggan' },
          { action: 'update', subject: 'Pelanggan' },
          { action: 'download', subject: 'Pelanggan' }
        ],
        features: []
      }
    ],
    permissions: null,
    features: null
  }
];

export default function QuickSearchMenuBasic() {
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

  return <QuickSearchMenu menus={menus} localName="app.quicksearch" shape={shape} router={router} maxRecent={8} />;
}
