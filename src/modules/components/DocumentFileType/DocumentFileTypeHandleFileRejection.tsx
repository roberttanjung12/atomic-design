import { useState } from 'react';
import DocumentFileType from '@/@dront/components/DocumentFileType';

const DocumentFileTypeHandleFileRejection = () => {
  const [file, setFile] = useState<File | undefined>(undefined);

  return (
    <DocumentFileType
      value={file}
      onChange={setFile}
      onRemove={() => setFile(undefined)}
      accept={{ 'application/pdf': ['.pdf'] }}
      maxSize={1} // Very small limit to demonstrate rejection
    />
  );
};

export default DocumentFileTypeHandleFileRejection;
