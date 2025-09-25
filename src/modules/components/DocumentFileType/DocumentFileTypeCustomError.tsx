import { useState } from 'react';
import DocumentFileType from '@/@dront/components/DocumentFileType';

const DocumentFileTypeCustomError = () => {
  const [file, setFile] = useState<File | undefined>(undefined);

  return (
    <DocumentFileType
      value={file}
      onChange={setFile}
      onRemove={() => setFile(undefined)}
      accept={{ 'application/pdf': ['.pdf'] }}
      maxSize={2048}
      config={{
        error: {
          invalidType: 'Please upload only PDF files.',
          tooLarge: 'File size must be less than 2MB.'
        }
      }}
    />
  );
};

export default DocumentFileTypeCustomError;
