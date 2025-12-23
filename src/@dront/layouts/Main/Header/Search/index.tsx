import QuickSearchMenu from '@dront/ui/QuickSearchMenu';
import { useRouter } from 'next/navigation';
import { useMainLayout } from '@/@dront/context/MainLayoutProvider';

/**
 * Remove all navigation objects that do not have an `id` field.
 * Also cleans nested `children` arrays by removing entries without `id`.
 * Returns a new array (does not mutate original input).
 */
function filterNavigationsWithId<T extends { id?: string; children?: T[] }>(items: T[] = []): T[] {
  return items
    ?.filter(item => !!item.id)
    ?.map(item => {
      if (item?.children?.length) {
        const cleanedChildren = item?.children?.filter(child => !!child.id);

        return { ...item, children: cleanedChildren };
      }

      return item;
    });
}

const Search = () => {
  const { navigations } = useMainLayout();
  const router = useRouter();
  const menus = filterNavigationsWithId(navigations);

  return (
    <QuickSearchMenu
      router={router}
      localName="menu-sidebar"
      menus={menus}
      shape={{
        id: 'id',
        title: 'title',
        description: 'href',
        path: 'href',
        children: 'children',
        iconType: 'default'
      }}
      triggerButtonStyles={{
        colorButton: 'info'
      }}
    />
  );
};

export default Search;
