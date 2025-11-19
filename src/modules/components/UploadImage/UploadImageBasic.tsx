import { useState } from 'react';
import UploadImage, { type IPreview } from '@dront/ui/UploadImage';

const UploadImageBasic = () => {
  const [preview, setPreview] = useState<IPreview | undefined>(undefined);

  return (
    <UploadImage
      preview={preview}
      label="Upload Image with Thumbnail"
      onChange={setPreview}
      onRemove={() => {
        setPreview(undefined);
      }}
    />
  );
};

export default UploadImageBasic;
