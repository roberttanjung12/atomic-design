import React from 'react';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { ListItem, ListItemIcon, ListItemText } from '@mui/material';
import type { FileRejection } from 'react-dropzone';
import type { FileErrorProps } from './types';
import { extractFileType, sizeOf, uniqueArrayBy } from './utils';

/**
 * FileError component for displaying file validation error messages
 *
 * This component processes file rejection errors from react-dropzone and
 * displays them in a user-friendly format. It supports custom error messages
 * and automatically formats file type and size information.
 *
 * Features:
 * - Displays unique error messages (deduplicates similar errors)
 * - Shows appropriate error icons
 * - Supports custom error message overrides
 * - Formats file size and type information automatically
 *
 * @param {FileErrorProps} props - The component props
 * @param {Accept} [props.accept] - Accepted file types for error context
 * @param {FileRejection[]} props.fileRejected - Array of rejected files with error details
 * @param {number} [props.maxSize] - Maximum file size in KB for error messages
 * @param {ConfigFileError} [props.customError] - Custom error message configurations
 * @returns {JSX.Element[]} Array of ListItem components displaying error messages
 */
const FileError = ({ accept, fileRejected, maxSize, customError }: FileErrorProps) => {
  const uniqueFileError = uniqueArrayBy<FileRejection>(fileRejected, data => data.errors[0].code);

  const getErrMsg = (code: string, message: string) =>
    ({
      'file-invalid-type': customError?.invalidType || `Only .${extractFileType(accept || {})} format`,
      'file-too-large': customError?.tooLarge || `Maximum file ${sizeOf((maxSize || 0) * 1024)}`
    })[code] || message;

  return uniqueFileError.map(({ errors }) => {
    return errors.map(err => (
      <ListItem key={err.code}>
        <ListItemIcon sx={{ minWidth: 30, color: theme => theme.palette.error.main }}>
          <HighlightOffIcon />
        </ListItemIcon>
        <ListItemText primary={getErrMsg(err.code, err.message)} />
      </ListItem>
    ));
  });
};

export default FileError;
