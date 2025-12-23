'use client';

import QuickSearchMenu, { type QuickSearchShape } from '@dront/ui/QuickSearchMenu';
import { useRouter } from 'next/navigation';

// Simulate loading state with empty menus
const menus: any[] = [];

export default function QuickSearchMenuLoading() {
  const router = useRouter();
  const shape: QuickSearchShape<any> = {
    id: 'id',
    title: 'title',
    path: 'url',
    children: 'children'
  } as any;

  return <QuickSearchMenu menus={menus} localName="app.quicksearch" shape={shape} router={router} isLoading />;
}
