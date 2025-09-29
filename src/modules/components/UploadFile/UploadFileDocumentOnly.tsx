'use client';

import { useState } from 'react';
import { FileUploader, type FileChangeResponse } from '@/@dront/components/UploadFile';

const UploadFileDocumentOnly = () => {
  const [, setFile] = useState<File | undefined>(undefined);

  return (
    <FileUploader
      id="upload-file-document-only"
      label="Select Document File"
      helperText="PDF, Word, and Excel files are allowed"
      fileTypes="DOCUMENT"
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

export default UploadFileDocumentOnly;
