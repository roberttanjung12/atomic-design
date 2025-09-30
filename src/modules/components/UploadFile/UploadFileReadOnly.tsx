'use client';

import { FileUploader } from '@/@dront/components/UploadFile';

const UploadFileReadOnly = () => {
  return (
    <FileUploader
      id="upload-file-read-only"
      label="Detail Read only"
      helperText="This component shows file details in read-only mode"
      readOnly
      customPreview={{
        name: 'beautiful-landscape-photo.jpg',
        size: 2456789,
        process: 100,
        type: 'image/jpeg',
        url: 'https://plus.unsplash.com/premium_photo-1665772801153-7fb1e433d0e5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        loadingInfo: ''
      }}
    />
  );
};

export default UploadFileReadOnly;
