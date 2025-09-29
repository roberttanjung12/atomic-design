import fs from 'fs';
import getUniqueAuthors from './scripts/getUniqueAuthors.mjs';

const headerPartial = fs.readFileSync('changelog-template/header.hbs').toString();
const mainTemplate = fs.readFileSync('changelog-template/main.hbs').toString();

/** @type {import('semantic-release').GlobalConfig} */
const releaseConfig = {
  branches: [
    'main',
    {
      name: 'release/beta',
      prerelease: 'beta',
      channel: 'beta'
    },
    {
      name: 'release/alpha',
      prerelease: 'alpha',
      channel: 'alpha'
    }
  ],
  plugins: [
    // 1️⃣ Analyze commits to determine the release type
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'conventionalcommits',
        releaseRules: [
          {
            breaking: true,
            release: 'major'
          },
          {
            type: 'feat',
            release: 'minor'
          },
          {
            type: 'fix',
            release: 'patch'
          },
          {
            type: 'docs',
            release: 'patch'
          },
          {
            type: 'chore',
            release: 'patch'
          }
        ],
        parserOpts: {
          noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES', 'BREAKING']
        }
      }
    ],

    // 2️⃣ Generate release notes
    [
      '@semantic-release/release-notes-generator',
      {
        preset: 'conventionalcommits',
        presetConfig: {
          types: [
            { type: 'feat', section: 'Added' },
            { type: 'fix', section: 'Fixed' },
            { type: 'chore', hidden: true },
            { type: 'docs', hidden: true },
            { type: 'style', hidden: true },
            { type: 'refactor', hidden: true },
            { type: 'perf', hidden: true },
            { type: 'test', hidden: true }
          ]
        },
        writerOpts: {
          headerPartial,
          mainTemplate,
          finalizeContext: context => {
            const uniqueAuthors = getUniqueAuthors(context.commitGroups);

            context.contributors = uniqueAuthors;

            return context;
          }
        }
      }
    ],

    // 3️⃣ Update the changelog
    [
      '@semantic-release/changelog',
      {
        changelogTitle:
          '# Changelog\n\nNotable changes to this project when development will be documented in this file.'
      }
    ],

    // 4️⃣ Update package.json version but do NOT publish
    ['@semantic-release/npm', { npmPublish: false }],

    // 5️⃣ Commit the updated package.json and CHANGELOG.md
    [
      '@semantic-release/git',
      {
        assets: ['package.json', 'CHANGELOG.md'],
        message: 'chore: release v${nextRelease.version}\n\n${nextRelease.notes}'
      }
    ]
  ]
};

export default releaseConfig;
