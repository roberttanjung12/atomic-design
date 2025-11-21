import React, { forwardRef, useState, useCallback } from 'react';
import { FormHelperText, FormLabel, TextField } from '@mui/material';

import { handleChange, removePreview } from './actions';
import initialPreview, { FILE_TYPES } from './constant';
import DraggableFileUploader from './drag-and-drop';
import callbackChildren from './helpers/callback-children';
import Preview from './preview';
import type { UploadFileProps, FilePreview } from './types';

const FileUploader = forwardRef<HTMLInputElement, UploadFileProps>((props, ref) => {
  const {
    children,
    error,
    label,
    id,
    helperText,
    onRemove,
    customPreview,
    setCustomPreview,
    draggable = true,
    showPreview = true,
    showViewButton = true,
    readOnly = false,
    onChange = () => {},
    breakChange = () => false,
    fileTypes = 'ALL',
    ...rest
  } = props;

  const [preview, setPreview] = useState<FilePreview>(initialPreview);

  const previewState = customPreview || preview;
  const handlePreview = setCustomPreview || setPreview;

  const { name, size, process, loadingInfo, type, url } = previewState;

  const isShowField = !!process && showPreview;

  const getAcceptTypes = (): string => {
    return FILE_TYPES[fileTypes] || FILE_TYPES.ALL;
  };

  const handleOnChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>, response: { file?: File; error?: Error }) => {
      if (onChange.length === 1) {
        (onChange as (file: File | undefined) => void)(response.file);
      } else {
        (onChange as (event: React.ChangeEvent<HTMLInputElement>, response?: { file?: File; error?: Error }) => void)(
          event,
          response
        );
      }
    },
    [onChange]
  );

  return (
    <>
      <FormLabel
        error={error}
        htmlFor={id}
        required={rest.required}
        sx={{ display: 'block', mb: '8px', color: ({ palette }) => palette.common.black }}
      >
        {label}
      </FormLabel>

      {!readOnly && (
        <DraggableFileUploader
          acceptTypes={fileTypes}
          breakChange={breakChange}
          draggable={draggable}
          error={error}
          id={id}
          isShowField={isShowField}
          onChange={onChange}
          setPreview={handlePreview}
        >
          {({ getInputProps }) => {
            if (draggable) {
              return <input ref={ref} accept={getAcceptTypes()} {...(draggable ? getInputProps() : {})} id={id} />;
            }

            return (
              <TextField
                fullWidth
                error={error}
                inputProps={{ accept: getAcceptTypes() }}
                inputRef={ref}
                sx={{ display: isShowField ? 'none' : 'block', ...rest.sx }}
                type="file"
                onChange={async event => {
                  if (breakChange(event as React.ChangeEvent<HTMLInputElement>)) return;

                  const files = (event.target as HTMLInputElement).files;

                  if (!files || files.length === 0) return;

                  const file = files[0];
                  const response = await handleChange(file, handlePreview);

                  handleOnChange(event as React.ChangeEvent<HTMLInputElement>, {
                    file: response instanceof Error ? undefined : response,
                    error: response instanceof Error ? response : undefined
                  });
                }}
                {...rest}
              />
            );
          }}
        </DraggableFileUploader>
      )}

      {showPreview && (
        <Preview
          loadingInfo={loadingInfo}
          name={name}
          process={process}
          removePreview={() => removePreview(handlePreview, onRemove)}
          showViewButton={showViewButton}
          readOnly={readOnly}
          size={size}
          type={type}
          url={url}
        />
      )}

      <FormHelperText error={error} id={`${id}-helper-text`}>
        {helperText}
      </FormHelperText>

      {callbackChildren(children, previewState)}
    </>
  );
});

FileUploader.displayName = 'FileUploader';

export default FileUploader;
