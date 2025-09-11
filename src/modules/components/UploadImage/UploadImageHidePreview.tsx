import { useState } from 'react';
import { Box } from '@mui/material';
import UploadImage from '@/@dront/components/UploadImage';
import initialPreview from '@/@dront/components/UploadImage/upload-image.constants';
import type { IPreview } from '@/@dront/components/UploadImage/upload-image.type';

const UploadImageHidePreview = () => {
  const [preview, setPreview] = useState<IPreview>(initialPreview);
  const [previewWithProgress, setPreviewWithProgress] = useState<IPreview>(initialPreview);

  return (
    <>
      <UploadImage
        preview={preview}
        label="Upload Image with Thumbnail with Hidden Preview"
        showPreview={false}
        onChange={file => {
          if (file) {
            setPreview({
              name: file.name,
              process: 100,
              size: file.size,
              url: URL.createObjectURL(file),
              file,
              loadingInfo: ''
            });
          }
        }}
        onCompress={process => {
          setPreview(prev => ({ ...prev, process, loadingInfo: 'Compressing...' }));
        }}
        onRemove={() => {
          setPreview(initialPreview);
        }}
      />

      <Box sx={{ height: '24px' }} />

      <UploadImage
        preview={previewWithProgress}
        label="Upload Image with Thumbnail with Hidden Preview and Progress Variant"
        variant="progress"
        showPreview={false}
        onChange={file => {
          if (file) {
            setPreviewWithProgress({
              name: file.name,
              process: 100,
              size: file.size,
              url: URL.createObjectURL(file),
              file,
              loadingInfo: ''
            });
          }
        }}
        onCompress={process => {
          setPreviewWithProgress(prev => ({ ...prev, process, loadingInfo: 'Compressing...' }));
        }}
        onRemove={() => {
          setPreviewWithProgress(initialPreview);
        }}
      />
    </>
  );
};

export default UploadImageHidePreview;
