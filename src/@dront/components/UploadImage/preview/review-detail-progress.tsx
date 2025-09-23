import { type Dispatch, type ReactNode, type SetStateAction } from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Alert, Box, Button, IconButton, Typography, type Theme } from '@mui/material';
import formatSizeUnits from '../helpers/format-size-units';
import imageViewer from './image-viewer';

interface ReviewDetailProgressProps {
  url: string;
  name: string;
  variant?: 'standard' | 'error';
  showRemoveButton?: boolean;
  size?: number | string;
  isCompressed?: boolean;
  showPreview?: boolean;
  compressedText: string | ReactNode | number;
  onRemove: () => void;
  setIsCompressed: Dispatch<SetStateAction<boolean>>;
}

const config = {
  standard: {
    containerSx: { border: ({ palette }: Theme) => `1px solid ${palette.grey[300]}` }
  },
  error: {
    containerSx: { border: ({ palette }: Theme) => `1px solid ${palette.error.main}` }
  }
};

const ReviewDetailProgress = ({
  url,
  name,
  variant = 'standard',
  size,
  isCompressed,
  showPreview,
  showRemoveButton,
  compressedText,
  onRemove,
  setIsCompressed
}: ReviewDetailProgressProps) => {
  const { containerSx } = config[variant];

  const handleCloseAlert = () => {
    setIsCompressed(false);
  };

  const renderThumbnail = () => {
    if (url && showPreview) {
      return (
        <Box
          sx={{
            width: '56px',
            height: '56px',
            borderRadius: '8px',
            backgroundImage: `url(${url})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            objectFit: 'cover'
          }}
          aria-label={name}
        />
      );
    }

    return null;
  };

  const renderButtonView = () => {
    if (url && showPreview) {
      return (
        <Button size="small" variant="outlined" onClick={() => imageViewer.open({ url, title: name })}>
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
        <IconButton color="error" size="small" onClick={onRemove}>
          <DeleteOutlineIcon />
        </IconButton>
      );
    }

    return (
      <IconButton size="small" onClick={onRemove}>
        <ClearIcon />
      </IconButton>
    );
  };

  return (
    <>
      <Box
        sx={{
          padding: '16px',
          borderRadius: '8px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '16px',
          ...containerSx
        }}
      >
        {renderThumbnail()}

        <Box sx={{ flexGrow: 1 }}>
          <Typography sx={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '600px' }}>
            {name}
          </Typography>
          {size && (
            <Typography variant="body2" color="grey.400" mt={1}>
              {formatSizeUnits(size as number)}
            </Typography>
          )}
        </Box>

        <Box sx={{ display: 'flex', gap: '8px' }}>
          {renderButtonView()}
          {renderButtonDelete()}
        </Box>
      </Box>

      {isCompressed && (
        <Alert severity="warning" onClose={handleCloseAlert} sx={{ mt: 1 }}>
          {compressedText}
        </Alert>
      )}
    </>
  );
};

export default ReviewDetailProgress;
