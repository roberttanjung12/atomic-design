import { useState } from 'react';
import { Box } from '@mui/material';
import UploadImage from '@/@dront/components/UploadImage';
import type { IPreview } from '@/@dront/components/UploadImage/upload-image.type';

const UploadImageHidePreview = () => {
  const [preview, setPreview] = useState<IPreview | undefined>(undefined);
  const [previewWithProgress, setPreviewWithProgress] = useState<IPreview | undefined>(undefined);

  return (
    <>
      <UploadImage
        preview={preview}
        label="Upload Image with Thumbnail with Hidden Preview"
        showPreview={false}
        onChange={setPreview}
        onRemove={() => {
          setPreview(undefined);
        }}
      />

      <Box sx={{ height: '24px' }} />

      <UploadImage
        preview={previewWithProgress}
        label="Upload Image with Thumbnail with Hidden Preview and Progress Variant"
        variant="progress"
        showPreview={false}
        onChange={setPreviewWithProgress}
        onRemove={() => {
          setPreviewWithProgress(undefined);
        }}
      />
    </>
  );
};

export default UploadImageHidePreview;
