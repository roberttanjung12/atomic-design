import { type SetStateAction, type Dispatch } from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Box, CircularProgress, Skeleton, useTheme } from '@mui/material';
import formatSizeUnits from '../helpers/format-size-units';
import { PreviewWrapper, ProcessCompress } from '../upload-image.styled';
import ReviewDetailProgress from './review-detail-progress';
import ReviewDetailStandard from './review-detail-standard';

const previewImageStyling: Record<string | number, string> = {
  width: '56px',
  height: '56px',
  objectFit: 'cover',
  borderRadius: '8px'
};

interface PreviewProps {
  url: string;
  name: string;
  size: number;
  process: number;
  loadingInfo?: string;
  disabled?: boolean;
  isCompressed?: boolean;
  showPreview?: boolean;
  variant: 'standard' | 'progress';
  removePreview: () => void;
  setIsCompressed: Dispatch<SetStateAction<boolean>>;
}

const Preview = ({
  url,
  name,
  size,
  process,
  loadingInfo,
  disabled,
  isCompressed,
  showPreview,
  variant,
  removePreview,
  setIsCompressed
}: PreviewProps) => {
  const theme = useTheme();

  const isUploaded = process >= 100;

  if (!process) return null;

  if (isUploaded && variant === 'standard') {
    return (
      <ReviewDetailStandard
        showPreview={showPreview}
        name={name}
        url={url}
        onRemove={removePreview}
        size={size}
        isCompressed={isCompressed}
        showRemoveButton={!disabled}
        setIsCompressed={setIsCompressed}
      />
    );
  }

  if (isUploaded && variant === 'progress') {
    return (
      <ReviewDetailProgress
        showPreview={showPreview}
        name={name}
        url={url}
        onRemove={removePreview}
        size={size}
        isCompressed={isCompressed}
        showRemoveButton={!disabled}
        setIsCompressed={setIsCompressed}
      />
    );
  }

  return (
    <PreviewWrapper variantUpload={variant} onClick={event => event.stopPropagation()} sx={{}}>
      {variant === 'standard' ? (
        <CircularProgress disableShrink />
      ) : (
        <>
          <Skeleton sx={previewImageStyling} variant="rectangular" />

          <Box sx={{ flexGrow: 1, width: '0%' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{name} </div>{' '}
              {isUploaded && <CheckCircleIcon fill={theme.palette.success.main} />}
            </Box>

            <ProcessCompress>
              <Box sx={{ width: `${process}%`, background: ({ palette }) => palette.primary.main }} />
            </ProcessCompress>

            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Box>{isUploaded ? `${formatSizeUnits(size)}` : loadingInfo}</Box>
              <Box>{process}%</Box>
            </Box>
          </Box>
        </>
      )}
    </PreviewWrapper>
  );
};

export default Preview;
