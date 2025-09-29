'use client';

import { useState } from 'react';
import { FileUploader, type FileChangeResponse } from '@/@dront/components/UploadFile';

const UploadFileImageOnly = () => {
  const [, setFile] = useState<File | undefined>(undefined);

  return (
    <FileUploader
      id="upload-file-image-only"
      label="Select Image File"
      helperText="Only image files are allowed"
      fileTypes="IMAGE_ONLY"
      onChange={(event: React.ChangeEvent<HTMLInputElement>, response?: FileChangeResponse) => {
        if (response?.file) {
          setFile(response.file);
        }
      }}
      onRemove={() => {
        setFile(undefined);
      }}
    />
  );
};

export default UploadFileImageOnly;
