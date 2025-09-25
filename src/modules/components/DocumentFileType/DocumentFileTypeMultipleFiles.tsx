import { useState } from 'react';
import DocumentFileType from '@/@dront/components/DocumentFileType';

const DocumentFileTypeMultipleFiles = () => {
  const [files, setFiles] = useState<File[] | undefined>(undefined);

  return (
    <DocumentFileType
      value={files}
      onChange={setFiles}
      onRemove={() => setFiles(undefined)}
      accept={{ 'application/pdf': ['.pdf'], 'image/*': ['.jpg', '.jpeg', '.png'] }}
      maxFiles={3}
      maxSize={5120}
    />
  );
};

export default DocumentFileTypeMultipleFiles;
