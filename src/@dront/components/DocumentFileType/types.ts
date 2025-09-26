/**
 * @fileoverview Type definitions for DocumentFileType component
 *
 * This module defines all TypeScript interfaces and types used by the
 * DocumentFileType component and its related components.
 *
 * @author Dront Team
 * @version 5.0.0
 */

import type { ReactNode } from 'react';
import type { Accept, FileRejection } from 'react-dropzone';

/**
 * Configuration interface for custom error messages
 *
 * Allows customization of error messages displayed when file validation fails.
 * Both properties are optional to allow partial customization.
 *
 * @interface ConfigFileError
 * @property {string} [invalidType] - Custom message for invalid file type errors
 * @property {string} [tooLarge] - Custom message for file size exceeded errors
 */
interface ConfigFileError {
  invalidType?: string;
  tooLarge?: string;
}

/**
 * Configuration interface for custom labels and text
 *
 * Provides customization options for various text labels displayed
 * in the component interface.
 *
 * @interface ConfigLabel
 * @property {string} [drop] - Custom text for the drag and drop area
 * @property {string} [maxSize] - Custom text for maximum file size display
 */
interface ConfigLabel {
  drop?: string;
  maxSize?: string;
}

/**
 * Main configuration interface for component customization
 *
 * Combines label and error configurations to provide comprehensive
 * customization options for the DocumentFileType component.
 *
 * @interface Config
 * @property {ConfigLabel} [label] - Custom label configurations
 * @property {ConfigFileError} [error] - Custom error message configurations
 */
interface Config {
  label?: ConfigLabel;
  error?: ConfigFileError;
}

/**
 * Props interface for the DocumentFileType component
 *
 * Defines all properties that can be passed to the DocumentFileType component
 * to control its behavior, appearance, and functionality.
 *
 * @interface DocumentFileTypeProps
 * @property {File | File[]} [value] - Currently selected file(s)
 * @property {() => void} onRemove - Callback function executed when removing files
 * @property {(value: any) => void} onChange - Callback function executed when files change
 * @property {Accept} [accept] - Object defining accepted MIME types for file validation
 * @property {number} [maxSize] - Maximum allowed file size in kilobytes
 * @property {number} [maxFiles] - Maximum number of files allowed (1 for single file mode)
 * @property {boolean} [disabled] - Whether the component should be disabled
 * @property {ReactNode} [dragIcon] - Custom React node to display as drag and drop icon
 * @property {string} [customError] - Custom error message to display
 * @property {Config} [config] - Configuration object for labels and error messages
 */
interface DocumentFileTypeProps {
  value?: File | File[];
  onRemove: () => void;
  onChange: (value: any) => void;
  accept?: Accept;
  maxSize?: number;
  maxFiles?: number;
  disabled?: boolean;
  dragIcon?: ReactNode;
  customError?: string;
  config?: Config;
}

/**
 * Props interface for the FileError component
 *
 * Defines the properties required by the FileError component to display
 * appropriate error messages for file validation failures.
 *
 * @interface FileErrorProps
 * @property {Accept} [accept] - Object defining accepted MIME types for error context
 * @property {FileRejection[]} fileRejected - Array of rejected files with error details
 * @property {number} [maxSize] - Maximum file size in KB for error message context
 * @property {ConfigFileError} [customError] - Custom error message configurations
 */
interface FileErrorProps {
  accept?: Accept;
  fileRejected: FileRejection[];
  maxSize?: number;
  customError?: ConfigFileError;
}

export type { DocumentFileTypeProps, FileErrorProps };
