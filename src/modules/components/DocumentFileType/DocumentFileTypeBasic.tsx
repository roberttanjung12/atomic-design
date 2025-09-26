import { useState } from 'react';
import DocumentFileType from '@/@dront/components/DocumentFileType';

const DocumentFileTypeBasic = () => {
  const [file, setFile] = useState<File | undefined>(undefined);

  return (
    <DocumentFileType
      value={file}
      onChange={setFile}
      onRemove={() => setFile(undefined)}
      accept={{ 'application/pdf': ['.pdf'], 'application/msword': ['.doc', '.docx'] }}
      maxSize={5120} // 5MB
    />
  );
};

export default DocumentFileTypeBasic;
