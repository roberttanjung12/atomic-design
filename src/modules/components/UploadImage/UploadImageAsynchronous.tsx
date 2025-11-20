import { useState } from 'react';
import UploadImage, { type IPreview } from '@dront/ui/UploadImage';
import { Box } from '@mui/material';
import axios from 'axios';

const UploadImageAsynchronousExample = () => {
  const [preview, setPreview] = useState<IPreview | undefined>(undefined);
  const [previewStatic, setPreviewStatic] = useState<IPreview | undefined>(undefined);
  const [previewFailed, setPreviewFailed] = useState<IPreview | undefined>(undefined);

  const [errorMessage, setErrorMessage] = useState<string>('');

  return (
    <>
      <UploadImage
        preview={preview}
        label="Upload Image to the API Successfully"
        variant="progress"
        onChange={setPreview}
        upload={async ({ preview: newPreview, setLoadingInfo, setProcess, setLoaderType }) => {
          setLoadingInfo('Uploading to server...');
          setLoaderType('progress');
          const formData = new FormData();

          formData.append('file', newPreview?.file as Blob);

          await axios.post('https://api.escuelajs.co/api/v1/files/upload', formData, {
            onUploadProgress: progressEvent => {
              const { loaded, total } = progressEvent;

              setProcess(Math.round((loaded / (total ?? 0)) * 100));
            },
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          });

          setPreview(newPreview);
        }}
        onRemove={() => {
          setPreview(undefined);
        }}
      />

      <Box mb={2} />

      <UploadImage
        preview={previewStatic}
        label="Upload Image to the API Successfully (With Static Loader)"
        variant="progress"
        onChange={setPreviewStatic}
        upload={async ({ preview: newPreview, setLoadingInfo }) => {
          setLoadingInfo('Uploading to server...');
          const formData = new FormData();

          formData.append('file', newPreview?.file as Blob);

          await axios.post('https://api.escuelajs.co/api/v1/files/upload', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          });

          setPreviewStatic(newPreview);
        }}
        onRemove={() => {
          setPreviewStatic(undefined);
        }}
      />

      <Box mb={2} />

      <UploadImage
        preview={previewFailed}
        label="Upload Image to the API Failed"
        variant="progress"
        onChange={setPreview}
        error={!!errorMessage}
        helperText={errorMessage}
        upload={async ({ setLoadingInfo }) => {
          setLoadingInfo('Uploading to server...');

          return new Promise((_, reject) => {
            setTimeout(() => {
              reject(new Error('Upload failed. Please try again.'));
            }, 5000);
          });
        }}
        onError={error => {
          setErrorMessage(error?.message || '');
        }}
        onRemove={() => {
          setPreviewFailed(undefined);
        }}
      />
    </>
  );
};

export default UploadImageAsynchronousExample;
