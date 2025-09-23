import { useState } from 'react';
import UploadImage from '@/@dront/components/UploadImage';
import type { IPreview } from '@/@dront/components/UploadImage/upload-image.type';

const UploadImageProgressVariant = () => {
  const [preview, setPreview] = useState<IPreview | undefined>(undefined);

  return (
    <UploadImage
      preview={preview}
      label="Upload Image with Thumbnail with Progress Variant"
      variant="progress" // Use the 'progress' variant
      onChange={setPreview}
      onRemove={() => {
        setPreview(undefined);
      }}
    />
  );
};

export default UploadImageProgressVariant;
