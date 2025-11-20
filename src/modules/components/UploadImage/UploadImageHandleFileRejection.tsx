import { useState } from 'react';
import UploadImage, { type IPreview } from '@dront/ui/UploadImage';

const UploadImageHandleFileRejection = () => {
  const [preview, setPreview] = useState<IPreview | undefined>(undefined);
  const [errorMessage, setErrorMessage] = useState<string>('');

  return (
    <UploadImage
      preview={preview}
      label="Upload Image with Thumbnail and File Rejection Handling"
      helperText={errorMessage || 'Try to drop a non-image file to see how the component handles file rejections.'}
      error={!!errorMessage}
      onChange={newPreview => {
        setPreview(newPreview);
        setErrorMessage('');
      }}
      onError={error => {
        if (error?.code === '400') {
          setErrorMessage(error.message);
        }
      }}
      onRemove={() => {
        setPreview(undefined);
      }}
    />
  );
};

export default UploadImageHandleFileRejection;
