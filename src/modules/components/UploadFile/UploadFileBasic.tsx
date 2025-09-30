'use client';

import { useState } from 'react';
import { FileUploader } from '@/@dront/components/UploadFile';

const UploadFileBasic = () => {
  const [, setFile] = useState<File | undefined>(undefined);

  return (
    <FileUploader
      id="upload-file-basic"
      label="Select File"
      helperText="Select any file type"
      onChange={setFile}
      onRemove={() => {
        setFile(undefined);
      }}
    />
  );
};

export default UploadFileBasic;
