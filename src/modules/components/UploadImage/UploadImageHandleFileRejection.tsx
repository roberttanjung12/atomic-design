import { useState } from 'react';
import UploadImage from '@/@dront/components/UploadImage';
import initialPreview from '@/@dront/components/UploadImage/upload-image.constants';
import type { IPreview } from '@/@dront/components/UploadImage/upload-image.type';

const UploadImageHandleFileRejection = () => {
  const [preview, setPreview] = useState<IPreview>(initialPreview);
  const [errorMessage, setErrorMessage] = useState<string>('');

  return (
    <UploadImage
      preview={preview}
      label="Upload Image with Thumbnail and File Rejection Handling"
      helperText={errorMessage || 'Try to drop a non-image file to see how the component handles file rejections.'}
      error={!!errorMessage}
      onChange={(file, error) => {
        setErrorMessage('');

        if (error && error.length > 0) {
          setErrorMessage(error.map(e => e.errors.map(err => err.message).join(', ')).join(', '));
        }

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

export default UploadImageHandleFileRejection;
