'use client';

import { useEffect } from 'react';
import { useMainLayout } from '@/@dront/context/MainLayoutProvider';
import environment from '@/configurations/environment';
import type { PageIDProps } from './page-id-types';

const PageID = ({
  author: initialAuthor,
  breadcrumbs,
  canonical: initialCanonical,
  children,
  description: initialDescription,
  keywords: initialKeywords,
  publisher: initialPublisher,
  robots: initialRobots,
  title: initialTitle
}: PageIDProps) => {
  const { application } = environment;
  const { setBreadcrumbs } = useMainLayout();
  const title = initialTitle ? `${application.name} | ${initialTitle}` : application.name;
  const description = initialDescription ?? application.description;
  const author = initialAuthor ?? application.author;
  const keywords = initialKeywords ?? application.keywords;
  const publisher = initialPublisher ?? application.publisher;
  const robots = initialRobots ?? application.robots;
  const canonical = initialCanonical ?? application.canonical;

  useEffect(() => {
    if (breadcrumbs) {
      setBreadcrumbs(breadcrumbs);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [breadcrumbs]);

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content={author} />
      <meta name="keywords" content={keywords} />
      <meta name="publisher" content={publisher} />
      <meta name="robots" content={robots} />
      <link rel="canonical" href={canonical} />

      {children}
    </>
  );
};

export default PageID;
