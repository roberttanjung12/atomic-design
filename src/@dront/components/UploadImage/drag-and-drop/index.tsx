import { type ReactNode, type Dispatch, type SetStateAction, useCallback, useState } from 'react';
import { alpha, Box, Button, Typography } from '@mui/material';
import { type DropEvent, type FileRejection, useDropzone } from 'react-dropzone';
import { handleChange } from '../actions';
import callbackChildren from '../helpers/callback-children';
import MediaCropper from '../upload-image.cropper';
import { DragWrapper } from '../upload-image.styled';

interface UploadImageProps {
  id?: string;
  children: ReactNode | ((params: any) => ReactNode);
  variant: 'standard' | 'progress';
  onChange: (file: File, errors?: FileRejection[]) => void;
  onCompress: (progress: number) => void;
  setIsCompressed: Dispatch<SetStateAction<boolean>>;
  isShowField: boolean;
  error?: boolean;
  disabled?: boolean;
  maxInBytes?: number;
  aspectRatio?: number;
  acceptTypes: { input: string; mime: string }[];
}

type OnDrop = <T extends File>(acceptedFiles: T[], fileRejections: FileRejection[], event: DropEvent) => void;

const DraggableUploadImage = ({
  id,
  children,
  variant,
  isShowField,
  error,
  disabled,
  aspectRatio,
  acceptTypes,
  maxInBytes,
  onChange,
  onCompress,
  setIsCompressed
}: UploadImageProps) => {
  const [croppedImage, setCroppedImage] = useState<File | null>(null);

  const handleDrop = useCallback(
    async (file: File, errors?: FileRejection[]) => {
      const response: any = await handleChange({ file: file || null, maxInBytes, onCompress, setIsCompressed });

      if (response instanceof File) {
        onChange(response as unknown as File, errors);
      } else {
        onChange(file as unknown as File, errors);
      }
    },
    [maxInBytes, onChange, onCompress, setIsCompressed]
  );

  const onDrop = useCallback<OnDrop>(
    async (files, errors) => {
      if (aspectRatio) {
        setCroppedImage(files[0]);
      } else {
        handleDrop(files[0], errors);
      }
    },
    [handleDrop, aspectRatio]
  );

  const handleCrop = (file: File) => {
    handleDrop(file);
    setCroppedImage(null);
  };

  const handleCancelCrop = () => {
    setCroppedImage(null);
  };

  const accept = acceptTypes.reduce<Record<string, string[]>>((acc, { mime }) => {
    acc[mime] = [];

    return acc;
  }, {});

  const { getRootProps, open, isDragActive, getInputProps } = useDropzone({
    onDrop,
    disabled,
    noClick: true,
    accept
  });

  return (
    <>
      {aspectRatio && (
        <MediaCropper
          aspectRatio={aspectRatio}
          imageFile={croppedImage}
          onCropped={handleCrop}
          onClose={handleCancelCrop}
        />
      )}

      <DragWrapper
        sx={{
          display: isShowField ? 'none' : 'flex',
          backgroundColor: theme => (isDragActive ? alpha(theme.palette.primary.light, 0.2) : theme.palette.grey[100]),
          backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='${
            error ? '%23EF2531' : '%23A1BAC4'
          }' stroke-width='3' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");`
        }}
        {...getRootProps()}
        variantUpload={variant}
      >
        {isDragActive ? (
          <Typography>Drop Here</Typography>
        ) : (
          <Box
            display="flex"
            flexDirection="row"
            flexWrap="wrap"
            width="min(280px, 100%)"
            justifyContent="center"
            alignItems="center"
            gap={1}
          >
            <Button
              size="small"
              sx={{ width: 'min(140px, 100%)' }}
              variant="contained"
              onClick={open}
              disabled={disabled}
              id={`choose-file-${id}`}
            >
              Browse
            </Button>
            <Typography>or Drop files here</Typography>
          </Box>
        )}

        {callbackChildren(children, { getInputProps })}
      </DragWrapper>
    </>
  );
};

export default DraggableUploadImage;
