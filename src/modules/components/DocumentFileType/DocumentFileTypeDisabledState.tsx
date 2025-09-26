import { useState } from 'react';
import DocumentFileType from '@/@dront/components/DocumentFileType';

const DocumentFileTypeDisabledState = () => {
  const [file, setFile] = useState<File | undefined>(undefined);

  return (
    <DocumentFileType
      value={file}
      onChange={setFile}
      onRemove={() => setFile(undefined)}
      accept={{ 'application/pdf': ['.pdf'] }}
      maxSize={5120}
      disabled
    />
  );
};

export default DocumentFileTypeDisabledState;
