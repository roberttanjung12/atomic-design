import { type ReactNode, useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { alpha, Box, IconButton, ListItemButton, ListItemText, Popover } from '@mui/material';
import type { IPreview } from './ModalUploadImage.type';
import ModalUploadImageField from './ModalUploadImageField';
import useContrastBackground from './useContrastBackground';

interface ModalUploadImageProps {
  id: string;
  label: string | ReactNode;
  name: string;
  defaultPreview: IPreview;
  onApply: (data: IPreview | null) => void;
  fileFormat?: {
    validTypes: any;
    errorMessage: string;
  };
}

/**
 * ModalUploadImage component displays a list item button that allows users to upload an image.
 * When clicked, it opens a popover containing a file upload field.
 * If a default preview image is provided, it is shown as a thumbnail; otherwise, an add icon is displayed.
 *
 * @param {string} id - Unique identifier for the component and popover.
 * @param {string} label - Label text displayed in the list item.
 * @param {string} name - Name attribute for the file input field.
 * @param {object} [defaultPreview] - Optional object containing the preview image URL.
 * @param {(file: File) => void} onApply - Callback invoked when a file is selected and applied.
 * @param {string[]} [fileFormat] - Optional array of accepted file formats.
 *
 * @returns {JSX.Element} The rendered ModalUploadImage component.
 */
const ModalUploadImage = ({ id, label, name, defaultPreview, onApply, fileFormat }: ModalUploadImageProps) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);

  const contrastBg = useContrastBackground(defaultPreview?.url);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <ListItemButton
        disableGutters
        disableRipple
        sx={({ palette }) => ({
          py: '0 !important',
          backgroundColor: open ? alpha(palette.primary.light, 0.1) : 'initial',
          pl: 2
        })}
        onClick={handleClick}
        id={id}
      >
        <ListItemText primary={label} sx={{ '& .MuiTypography-root': { fontWeight: 'bold' } }} />
        {defaultPreview?.url ? (
          <Box
            sx={{
              border: ({ palette }) => `1px solid ${palette.grey[300]}`,
              backgroundColor: ({ palette }) => alpha(palette.primary.light, 0.1),
              borderRadius: 1,
              width: '24px',
              height: '24px'
            }}
          >
            <img
              alt="Preview"
              src={defaultPreview?.url}
              style={{
                width: '24px',
                height: '24px',
                objectFit: 'contain',
                borderRadius: '8px',
                padding: '4px',
                backgroundColor: contrastBg
              }}
            />
          </Box>
        ) : (
          <IconButton>
            <AddIcon />
          </IconButton>
        )}
      </ListItemButton>

      <Popover
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={open}
        id={`${id}-popover`}
        sx={{ marginLeft: '24px', zIndex: 10001 }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        onClose={handleClose}
      >
        <ModalUploadImageField
          id={id}
          defaultPreview={defaultPreview}
          fileFormat={fileFormat}
          name={name}
          onApply={onApply}
          onClose={handleClose}
        />
      </Popover>
    </>
  );
};

export default ModalUploadImage;
