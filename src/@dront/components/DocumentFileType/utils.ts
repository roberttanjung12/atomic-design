/**
 * @fileoverview Utility functions for DocumentFileType component
 *
 * This module provides helper functions for:
 * - File type extraction from MIME types
 * - File size formatting and conversion
 * - Array deduplication utilities
 * - File format display utilities
 *
 * @author Dront Team
 * @version 5.0.0
 */

import type { Accept } from 'react-dropzone';

/**
 * Extracts readable file types from react-dropzone Accept object
 *
 * Converts MIME types to human-readable file extensions or types.
 * Handles both specific MIME types (e.g., "image/jpeg" -> "jpeg")
 * and wildcard types (e.g., "image/*" -> "image").
 *
 * @param {Accept} accept - The accept object from react-dropzone containing MIME types
 * @returns {string} Comma-separated string of file types/extensions
 *
 * @example
 * ```typescript
 * const accept = { 'image/*': [], 'application/pdf': [] };
 * extractFileType(accept); // Returns "image ,pdf"
 * ```
 */
const extractFileType = (accept: Accept) => {
  let fileType: Array<string> = [];
  const keyAcc = Object.keys(accept);

  if (keyAcc.length > 0) {
    fileType = keyAcc.map(item => {
      const mimeType = item.split('/');

      if (mimeType[1] !== '*') return mimeType[1];

      return mimeType[0];
    });
  }

  return fileType.join(' ,');
};

/**
 * Converts file size in bytes to human-readable format
 *
 * Automatically selects appropriate unit (B, KB, MB, GB, TB, PB)
 * and formats the number with up to 2 decimal places.
 *
 * @param {number} bytes - File size in bytes
 * @returns {string} Formatted file size with appropriate unit
 *
 * @example
 * ```typescript
 * sizeOf(1024); // Returns "1KB"
 * sizeOf(1536); // Returns "1.5KB"
 * sizeOf(1048576); // Returns "1MB"
 * ```
 */
const sizeOf = (bytes: number) => {
  if (bytes === 0) return '0 B';
  const e = Math.floor(Math.log(bytes) / Math.log(1024));

  return `${parseFloat((bytes / 1024 ** e).toFixed(2))}${' KMGTP'.charAt(e)}B`;
};

/**
 * Gets formatted file format string for display
 *
 * Returns either a custom display format or extracts and formats
 * file types from the accept object. If no accept object is provided,
 * returns an empty string.
 *
 * @param {Accept} [fileAccept] - Optional accept object containing MIME types
 * @param {string} [displayFormat] - Optional custom display format to override extraction
 * @returns {string} Formatted file format string in uppercase
 *
 * @example
 * ```typescript
 * const accept = { 'image/*': [] };
 * getFileFormat(accept); // Returns "IMAGE"
 * getFileFormat(accept, "Photos"); // Returns "Photos"
 * getFileFormat(); // Returns ""
 * ```
 */
const getFileFormat = (fileAccept?: Accept, displayFormat?: string) =>
  fileAccept ? displayFormat || extractFileType(fileAccept).toUpperCase() : '';

/**
 * Creates a new array with unique elements based on a key function
 *
 * Filters an array to contain only unique elements, where uniqueness
 * is determined by the result of the key function applied to each element.
 * The first occurrence of each unique key is preserved.
 *
 * @template T - The type of elements in the array
 * @param {Array<T>} arr - The input array to filter
 * @param {(x: T) => any} key - Function that extracts the comparison key from each element
 * @returns {Array<T>} New array containing only unique elements
 *
 * @example
 * ```typescript
 * const users = [
 *   { id: 1, name: 'Alice' },
 *   { id: 2, name: 'Bob' },
 *   { id: 1, name: 'Alice Duplicate' }
 * ];
 * const unique = uniqueArrayBy(users, u => u.id);
 * // Returns [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }]
 * ```
 */
const uniqueArrayBy = <T>(arr: Array<T>, key: (x: T) => any): Array<T> => {
  const seen = new Set();

  return arr.filter(item => {
    const k = key(item);

    return seen.has(k) ? false : seen.add(k);
  });
};

export { extractFileType, sizeOf, getFileFormat, uniqueArrayBy };
