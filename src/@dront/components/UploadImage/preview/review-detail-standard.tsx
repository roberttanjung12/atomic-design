import { type Dispatch, type ReactNode, type SetStateAction } from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import { Alert, Box, Button, IconButton, Typography } from '@mui/material';
import formatSizeUnits from '../helpers/format-size-units';
import imageViewer from './image-viewer';

interface ReviewDetailStandardProps {
  url: string;
  name: string;
  showRemoveButton?: boolean;
  size?: number | string;
  isCompressed?: boolean;
  showPreview?: boolean;
  compressedText: string | ReactNode;
  onRemove: () => void;
  setIsCompressed: Dispatch<SetStateAction<boolean>>;
}

const ReviewDetailStandard = ({
  url,
  name,
  size,
  isCompressed,
  showPreview,
  compressedText,
  showRemoveButton,
  onRemove,
  setIsCompressed
}: ReviewDetailStandardProps) => {
  const handleCloseAlert = () => {
    setIsCompressed(false);
  };

  const renderThumbnail = () => {
    if (url && showPreview) {
      return (
        <Box
          sx={{
            width: '100%',
            height: '100%',
            borderRadius: '8px',
            backgroundImage: `url(${url})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
          aria-label={name}
        />
      );
    }

    return (
      <Box sx={{ p: 2, display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <Box textAlign="center">
          <Typography sx={{ mb: 0.1, fontWeight: 'medium' }}>{name}</Typography>
          {size && <Typography variant="caption">{formatSizeUnits(Number(size))}</Typography>}
        </Box>
      </Box>
    );
  };

  const renderButtonView = () => {
    if (url && showPreview) {
      return (
        <Button
          size="small"
          sx={{ width: '160px' }}
          variant="contained"
          onClick={() => imageViewer.open({ url, title: name })}
        >
          See
        </Button>
      );
    }

    return null;
  };

  const renderButtonDelete = () => {
    if (!showRemoveButton) return null;

    if (showPreview) {
      return (
        <Button size="small" sx={{ width: '160px' }} color="error" onClick={onRemove}>
          Delete
        </Button>
      );
    }

    return (
      <IconButton size="small" onClick={onRemove} sx={{ position: 'absolute', top: 8, right: 8 }}>
        <ClearIcon />
      </IconButton>
    );
  };

  return (
    <>
      <Box
        sx={{
          aspectRatio: '4 / 4',
          width: '200px',
          backgroundColor: theme => theme.palette.grey[100],
          position: 'relative',
          overflow: 'hidden',
          '&:hover .review-detail-actions': {
            opacity: 1,
            pointerEvents: 'auto'
          }
        }}
      >
        {renderThumbnail()}
        <Box
          className="review-detail-actions"
          sx={{
            background: 'rgba(255,255,255,0.6)',
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            alignItems: 'center',
            gap: 1,
            p: 1,
            opacity: 0,
            pointerEvents: 'none',
            transition: 'opacity 0.2s'
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mb: 4 }}>
            {renderButtonView()}
            {renderButtonDelete()}
          </Box>
          <Box
            sx={{
              borderRadius: 1,
              width: '100%',
              textAlign: 'center',
              p: 0.5,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 1
            }}
          >
            <Typography component="span">{name} </Typography>
            {size && (
              <Typography variant="caption" sx={{ display: 'block', mt: 0.5 }}>
                {formatSizeUnits(Number(size))}
              </Typography>
            )}
          </Box>
        </Box>
      </Box>

      {isCompressed && (
        <Alert severity="warning" onClose={handleCloseAlert} sx={{ mt: 1, maxWidth: '200px' }}>
          {compressedText}
        </Alert>
      )}
    </>
  );
};

export default ReviewDetailStandard;
