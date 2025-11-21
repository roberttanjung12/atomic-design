import React, { useCallback } from 'react';
import { alpha, Button, Typography } from '@mui/material';
import { useDropzone } from 'react-dropzone';

import { handleChange } from '../actions';
import { DragWrapper } from '../file-uploader.styled';
import callbackChildren from '../helpers/callback-children';
import type { FilePreview, FileType } from '../types';

interface DraggableFileUploaderProps {
  id: string;
  draggable: boolean;
  children: React.ReactNode | (({ getInputProps }: { getInputProps: () => any }) => React.ReactNode);
  onChange?: ((file: File | undefined) => void) | ((event: any, errors?: any) => void);
  setPreview: React.Dispatch<React.SetStateAction<FilePreview>>;
  isShowField: boolean;
  error?: boolean;
  breakChange: (event: any) => boolean;
  acceptTypes?: FileType;
}

const DraggableFileUploader = ({
  id,
  draggable,
  children,
  onChange,
  setPreview,
  isShowField,
  error,
  breakChange,
  acceptTypes = 'ALL'
}: DraggableFileUploaderProps) => {
  const getAcceptTypes = () => {
    switch (acceptTypes) {
      case 'PDF_ONLY':
        return { 'application/pdf': ['.pdf'] };
      case 'IMAGE_ONLY':
        return {
          'image/jpeg': ['.jpeg', '.jpg'],
          'image/png': ['.png'],
          'image/gif': ['.gif'],
          'image/webp': ['.webp']
        };
      case 'EXCEL_ONLY':
        return {
          'application/vnd.ms-excel': ['.xls'],
          'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx']
        };
      case 'WORD_ONLY':
        return {
          'application/msword': ['.doc'],
          'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx']
        };
      case 'DOCUMENT':
        return {
          'application/pdf': ['.pdf'],
          'application/vnd.ms-excel': ['.xls'],
          'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx'],
          'application/msword': ['.doc'],
          'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx']
        };
      default:
        return undefined;
    }
  };

  const handleOnChange = useCallback(
    (event: any, errors?: any) => {
      if (onChange) {
        if (onChange.length === 1) {
          const file = event?.target?.files?.[0];

          (onChange as (file: File | undefined) => void)(file);
        } else {
          (onChange as (event: any, errors?: any) => void)(event, errors);
        }
      }
    },
    [onChange]
  );

  const onDrop = useCallback(
    async (files: File[], errors: any) => {
      if (breakChange({ target: { files } })) return;

      if (files.length > 0) {
        const compressed = await handleChange(files[0], setPreview);

        handleOnChange({ target: { files: [compressed, ...files] } }, errors);
      } else {
        handleOnChange({ target: { files } }, errors);
      }
    },
    [handleOnChange, setPreview, breakChange]
  );

  const { getRootProps, getInputProps, open, isDragActive } = useDropzone({
    onDrop,
    noClick: true,
    accept: getAcceptTypes() as any
  });

  if (!draggable) {
    return callbackChildren(children, { getInputProps });
  }

  return (
    <DragWrapper
      sx={{
        display: isShowField ? 'none' : 'flex',
        backgroundColor: theme => (isDragActive ? alpha(theme.palette.primary.light, 0.2) : theme.palette.grey[100]),
        backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='${
          error ? '%23EF2531' : '%23A1BAC4'
        }' stroke-width='3' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");`
      }}
      {...getRootProps()}
    >
      {isDragActive ? (
        <Typography>Drop file here</Typography>
      ) : (
        <>
          <Button
            size="small"
            sx={{ width: 'min(140px, 100%)' }}
            variant="contained"
            onClick={open}
            id={`choose-file-${id}`}
          >
            Browse
          </Button>
          <Typography>or drop file here</Typography>
        </>
      )}

      {callbackChildren(children, { getInputProps })}
    </DragWrapper>
  );
};

export default DraggableFileUploader;
