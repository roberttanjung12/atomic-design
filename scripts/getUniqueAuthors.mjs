/**
 * Extracts unique author names and emails from commit groups.
 *
 * @typedef {object} Author
 * @property {string} name - Author's name
 * @property {string} email - Author's email address
 *
 * @typedef {object} Commit
 * @property {Author} author - Author information for the commit
 *
 * @typedef {object} CommitGroup
 * @property {Commit[]} commits - Array of commit objects within the group
 *
 * @param {CommitGroup[]} commitGroups - Array of commit group objects
 * @returns {string[]} Array of unique author strings in format "Name <email>"
 */
const getUniqueAuthors = commitGroups => {
  const uniqueAuthorNames = [
    ...new Set(
      commitGroups.flatMap(group => group.commits.map(commit => `${commit.author.name} <<${commit.author.email}>>`))
    )
  ];

  return uniqueAuthorNames;
};

export default getUniqueAuthors;
