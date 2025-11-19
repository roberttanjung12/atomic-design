import { useState } from 'react';
import UploadImage, { type IPreview } from '@dront/ui/UploadImage';

const UploadImageWithCropper = () => {
  const [preview, setPreview] = useState<IPreview | undefined>(undefined);

  return (
    <UploadImage
      preview={preview}
      label="Upload Image with Thumbnail & Cropper"
      aspectRatio={4 / 4} // Set aspect ratio to 1:1 for square cropping
      onChange={setPreview}
      onRemove={() => {
        setPreview(undefined);
      }}
    />
  );
};

export default UploadImageWithCropper;
