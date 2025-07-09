import { env } from 'process';

const environment = {
  application: {
    author: 'David Rivaldy',
    canonical: 'https://www.davidrivaldy.com',
    description:
      'The ultimate boilerplate for Front End Departments, leveraging the latest features of Next.js to streamline development.',
    keywords:
      'Front End Department, Front End Boilerplate, Next.js Boilerplate, Next.js Features, Front End Development, Web Development Tools, Next.js Template, Front End Framework, Development Boilerplate, Modern Web Development',
    name: 'DRONT V5',
    publisher: 'DRAC',
    robots: 'noindex, nofollow'
  },
  development: {
    email: process.env.NEXT_PUBLIC_DEVELOPMENT_EMAIL ?? 'davidrivaldy@gmail.com',
    password: process.env.NEXT_PUBLIC_DEVELOPMENT_PASSWORD ?? 'administrator'
  },
  redirectPage: '/dashboard/overview',
  node: {
    env: env.NODE_ENV ?? 'development'
  }
};

export default environment;
