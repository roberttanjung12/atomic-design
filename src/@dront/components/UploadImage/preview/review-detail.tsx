import { type Dispatch, type SetStateAction, useState } from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Alert, Box, Button, IconButton, Typography, type Theme } from '@mui/material';
import Image from 'next/image';
import formatSizeUnits from '../helpers/format-size-units';
import ImageViewer from './image-viewer/ImageViewer';

interface ReviewDetailProps {
  url: string;
  name: string;
  variant?: 'standard' | 'error';
  showRemoveButton?: boolean;
  size: number | string;
  isCompressed?: boolean;
  showPreview?: boolean;
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

const ReviewDetail = ({
  url,
  name,
  variant = 'standard',
  size,
  isCompressed,
  showPreview,
  onRemove,
  setIsCompressed
}: ReviewDetailProps) => {
  const { containerSx } = config[variant];
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
            width: '56px',
            height: '56px',
            objectFit: 'cover',
            borderRadius: '8px'
          }}
          width={40}
        />
      );
    }

    return null;
  };

  const renderButtonView = () => {
    if (url && showPreview) {
      return (
        <Button size="small" variant="outlined" onClick={() => setIsShowImage(true)}>
          See
        </Button>
      );
    }

    return null;
  };

  const renderButtonDelete = () => {
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
          <Typography variant="body2" color="grey.400" mt={1}>
            {formatSizeUnits(size as number)}
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', gap: '8px' }}>
          {renderButtonView()}
          {renderButtonDelete()}
        </Box>
      </Box>

      {isCompressed && (
        <Alert severity="warning" onClose={handleCloseAlert} sx={{ mt: 1 }}>
          {`The image has been compressed to ${formatSizeUnits(size as number)}. Please review the compressed image to ensure it meets the required quality standards before proceeding.`}
        </Alert>
      )}

      <ImageViewer open={isShowImage} setOpen={setIsShowImage} title={name} url={url} />
    </>
  );
};

export default ReviewDetail;
