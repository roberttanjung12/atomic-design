'use client';

import { useState } from 'react';
import { FileUploader, type FileChangeResponse } from '@/@dront/components/UploadFile';

const UploadFileBasic = () => {
  const [, setFile] = useState<File | undefined>(undefined);

  return (
    <FileUploader
      id="upload-file-basic"
      label="Select File"
      helperText="Select any file type"
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

export default UploadFileBasic;
