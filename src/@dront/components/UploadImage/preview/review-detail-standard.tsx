import { type Dispatch, type SetStateAction, useState } from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import { Alert, Box, Button, IconButton, Typography } from '@mui/material';
import Image from 'next/image';
import formatSizeUnits from '../helpers/format-size-units';
import ImageViewer from './image-viewer/ImageViewer';

interface ReviewDetailStandardProps {
  url: string;
  name: string;
  showRemoveButton?: boolean;
  size: number | string;
  isCompressed?: boolean;
  showPreview?: boolean;
  onRemove: () => void;
  setIsCompressed: Dispatch<SetStateAction<boolean>>;
}

const ReviewDetailStandard = ({
  url,
  name,
  size,
  isCompressed,
  showPreview,
  onRemove,
  setIsCompressed
}: ReviewDetailStandardProps) => {
  const [isShowImage, setIsShowImage] = useState<boolean>(false);

  const handleCloseAlert = () => {
    setIsCompressed(false);
  };

  const renderThumbnail = () => {
    if (url && showPreview) {
      return (
        <Image
          alt={name}
          height={40}
          src={url}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '8px'
          }}
          width={40}
        />
      );
    }

    return (
      <Box sx={{ p: 2, display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <Box textAlign="center">
          <Typography sx={{ mb: 0.1, fontWeight: 'medium' }}>{name}</Typography>
          <Typography variant="caption">{formatSizeUnits(Number(size))}</Typography>
        </Box>
      </Box>
    );
  };

  const renderButtonView = () => {
    if (url && showPreview) {
      return (
        <Button size="small" sx={{ width: '160px' }} variant="contained" onClick={() => setIsShowImage(true)}>
          See
        </Button>
      );
    }

    return null;
  };

  const renderButtonDelete = () => {
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
          maxWidth: '240px',
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
            background: 'rgba(255,255,255,0.3)',
            position: 'absolute',
            inset: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
            flexWrap: 'wrap',
            gap: 1,
            p: 1,
            opacity: 0,
            pointerEvents: 'none',
            transition: 'opacity 0.2s'
          }}
        >
          {renderButtonView()}
          {renderButtonDelete()}
        </Box>
      </Box>

      {isCompressed && (
        <Alert severity="warning" onClose={handleCloseAlert} sx={{ mt: 1, maxWidth: '240px' }}>
          {`The image has been compressed to ${formatSizeUnits(size as number)}. Please review the compressed image to ensure it meets the required quality standards before proceeding.`}
        </Alert>
      )}

      <ImageViewer open={isShowImage} setOpen={setIsShowImage} title={name} url={url} />
    </>
  );
};

export default ReviewDetailStandard;
