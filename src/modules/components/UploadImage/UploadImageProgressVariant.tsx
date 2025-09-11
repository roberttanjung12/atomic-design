import { useState } from 'react';
import UploadImage from '@/@dront/components/UploadImage';
import initialPreview from '@/@dront/components/UploadImage/upload-image.constants';
import type { IPreview } from '@/@dront/components/UploadImage/upload-image.type';

const UploadImageProgressVariant = () => {
  const [preview, setPreview] = useState<IPreview>(initialPreview);

  return (
    <UploadImage
      preview={preview}
      label="Upload Image with Thumbnail with Progress Variant"
      variant="progress" // Use the 'progress' variant
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
  );
};

export default UploadImageProgressVariant;
