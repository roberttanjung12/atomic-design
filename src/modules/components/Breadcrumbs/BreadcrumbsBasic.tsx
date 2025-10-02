import Breadcrumbs from '@/@dront/components/Breadcrumbs';

const BreadcrumbsBasic = () => {
  return (
    <Breadcrumbs
      items={[{ label: 'Dashboard', href: '/' }, { label: 'Component', href: '/core' }, { label: 'Breadcrumb' }]}
    />
  );
};

export default BreadcrumbsBasic;
