/**
 * Extracts the base file name (without extension) from a given URL.
 * @param {string} url - The URL from which to extract the file name.
 * @returns {string} The file name without the extension and query parameters.
 */
function getBaseFileName(url: string): string {
  // Remove query parameters if any
  const [path] = url.split('?');

  // Extract the file name from the path
  const fileNameWithExtension = path.split('/').pop();

  // Remove the file extension
  const fileName = fileNameWithExtension?.split('.').slice(0, -1).join('.');

  return fileName || '';
}

export default getBaseFileName;
