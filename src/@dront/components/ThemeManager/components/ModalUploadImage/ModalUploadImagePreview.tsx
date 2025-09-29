import EditIcon from '@mui/icons-material/Edit';
import { alpha, Box } from '@mui/material';
import useContrastBackground from './useContrastBackground';

interface ModalUploadImagePreviewProps {
  imageUrl: string;
  onClick: () => void;
}

/**
 * Displays a preview of an uploaded image inside a modal, with an overlay edit icon on hover.
 *
 * @param {ModalUploadImagePreviewProps} props - The props for the component.
 * @param {string} props.imageUrl - The URL of the image to preview.
 * @param {() => void} props.onClick - Callback function invoked when the preview is clicked.
 *
 * @remarks
 * - Uses a contrast background based on the image URL for better visibility.
 * - Shows an edit icon overlay when hovered to indicate editability.
 * - The image is styled with padding, border radius, and contained within a fixed size.
 */
const ModalUploadImagePreview = ({ imageUrl, onClick }: ModalUploadImagePreviewProps) => {
  const contrastBg = useContrastBackground(imageUrl);

  return (
    <Box
      sx={{
        position: 'relative',
        border: ({ palette }) => `1px solid ${palette.grey[300]}`,
        backgroundColor: ({ palette }) => alpha(palette.primary.light, 0.1),
        cursor: 'pointer',
        '&:hover > .overlay': {
          opacity: 0.4
        }
      }}
      onClick={onClick}
    >
      <Box
        className="overlay"
        sx={{
          background: 'black',
          position: 'absolute',
          width: '100%',
          height: '100%',
          opacity: 0,
          transition: 'ease-in 0.1s',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <EditIcon fontSize="large" sx={{ color: 'white' }} />
      </Box>
      <img
        alt="ModalUploadImagePreview"
        src={imageUrl}
        style={{
          width: '260px',
          height: '180px',
          objectFit: 'contain',
          borderRadius: '8px',
          padding: '16px',
          backgroundColor: contrastBg
        }}
      />
    </Box>
  );
};

export default ModalUploadImagePreview;
