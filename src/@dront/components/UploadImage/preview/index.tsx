import { type ReactNode, type SetStateAction, type Dispatch } from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CloseIcon from '@mui/icons-material/Close';
import { Box, CircularProgress, IconButton, LinearProgress, Skeleton, useTheme } from '@mui/material';
import formatSizeUnits from '../helpers/format-size-units';
import { PreviewWrapper, ProcessCompress } from '../upload-image.styled';
import type { IPreview } from '../upload-image.type';
import ReviewDetailProgress from './review-detail-progress';
import ReviewDetailStandard from './review-detail-standard';

const previewImageStyling: Record<string | number, string> = {
  width: '56px',
  height: '56px',
  objectFit: 'cover',
  borderRadius: '8px'
};

interface PreviewProps {
  preview?: IPreview;
  process: number;
  loadingInfo?: string;
  disabled?: boolean;
  isCompressed?: boolean;
  isStaticLoader: boolean;
  showPreview?: boolean;
  variant: 'standard' | 'progress';
  compressedText?: ((size: string) => ReactNode | string) | string | ReactNode;
  removePreview: () => void;
  setIsCompressed: Dispatch<SetStateAction<boolean>>;
}

const Preview = ({
  preview,
  process,
  loadingInfo,
  disabled,
  isCompressed,
  isStaticLoader,
  showPreview,
  variant,
  compressedText,
  removePreview,
  setIsCompressed
}: PreviewProps) => {
  const theme = useTheme();

  const isUploaded = !!preview?.url;

  if (isUploaded && variant === 'standard') {
    return (
      <ReviewDetailStandard
        showPreview={showPreview}
        name={preview.name}
        url={preview.url}
        onRemove={removePreview}
        size={preview.size}
        isCompressed={isCompressed}
        showRemoveButton={!disabled}
        setIsCompressed={setIsCompressed}
        compressedText={
          typeof compressedText === 'function'
            ? compressedText(formatSizeUnits(preview.size ? preview.size : 0))
            : compressedText
        }
      />
    );
  }

  if (isUploaded && variant === 'progress') {
    return (
      <ReviewDetailProgress
        showPreview={showPreview}
        name={preview.name}
        url={preview.url}
        onRemove={removePreview}
        size={preview.size}
        isCompressed={isCompressed}
        showRemoveButton={!disabled}
        setIsCompressed={setIsCompressed}
        compressedText={
          typeof compressedText === 'function'
            ? compressedText(formatSizeUnits(preview.size ? preview.size : 0))
            : compressedText
        }
      />
    );
  }

  if (!process) return null;

  return (
    <PreviewWrapper variantUpload={variant} onClick={event => event.stopPropagation()} sx={{}}>
      {variant === 'standard' ? (
        <Box
          height="100%"
          width="100%"
          position="relative"
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap="12px"
          padding="8px"
        >
          <IconButton sx={{ position: 'absolute', top: 0, right: 0 }} size="small" color="error">
            <CloseIcon onClick={removePreview} fontSize="small" />
          </IconButton>

          <CircularProgress disableShrink />
        </Box>
      ) : (
        <>
          <Skeleton sx={previewImageStyling} variant="rectangular" />

          <Box sx={{ flexGrow: 1, width: '0%' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{preview?.name} </div>{' '}
              {isUploaded && <CheckCircleIcon fill={theme.palette.success.main} />}
            </Box>

            {isStaticLoader ? (
              <>
                <LinearProgress />

                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Box>{loadingInfo}</Box>
                </Box>
              </>
            ) : (
              <>
                <ProcessCompress>
                  <Box sx={{ width: `${process}%`, background: ({ palette }) => palette.primary.main }} />
                </ProcessCompress>

                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Box>{loadingInfo}</Box>
                  <Box>{process}%</Box>
                </Box>
              </>
            )}
          </Box>

          <IconButton size="small" color="error">
            <CloseIcon onClick={removePreview} fontSize="small" />
          </IconButton>
        </>
      )}
    </PreviewWrapper>
  );
};

export default Preview;
