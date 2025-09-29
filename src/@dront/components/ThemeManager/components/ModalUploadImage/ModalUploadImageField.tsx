import { alpha, Box, Button, FormHelperText } from '@mui/material';
import type { IPreview } from './ModalUploadImage.type';
import ModalUploadImagePreview from './ModalUploadImagePreview';
import useModalUploadImage from './useModalUploadImage';

interface FileFormat {
  validTypes: string[];
  errorMessage: string;
}

interface UploadImageFieldProps {
  id: string;
  name: string;
  defaultPreview: IPreview;
  onClose: () => void;
  onApply: (file: IPreview | null) => void;
  fileFormat?: FileFormat;
}

const fileFormatDefault: FileFormat = {
  validTypes: ['image/png', 'image/jpg', 'image/jpeg', 'image/svg+xml'],
  errorMessage: 'Only .png, .jpg, .jpeg and .svg formats are supported.'
};

/**
 * UploadImageField component provides a UI for uploading and previewing an image file.
 *
 * @param {UploadImageFieldProps} props - The props for the component.
 * @param {string} props.id - Unique identifier for the input field.
 * @param {PreviewType} [props.defaultPreview] - Optional default image preview to display.
 * @param {() => void} props.onClose - Callback invoked when the cancel button is clicked.
 * @param {(file: File | null) => void} props.onApply - Callback invoked when the apply button is clicked with the selected file.
 * @param {FileFormatType} [props.fileFormat=fileFormatDefault] - Optional file format restrictions for the upload.
 *
 * @returns {JSX.Element} The rendered upload image field component.
 *
 * @remarks
 * - Displays a hidden file input for image selection.
 * - Shows a preview of the selected image or a placeholder if none is selected.
 * - Handles file validation and displays error messages.
 * - Provides Cancel and Apply actions for user interaction.
 */
const UploadImageField = ({
  id,
  defaultPreview,
  onClose,
  onApply,
  fileFormat = fileFormatDefault
}: UploadImageFieldProps) => {
  const { hiddenFileInputRef, preview, error, handleChange, handleClick, handleUpload } = useModalUploadImage({
    defaultPreview,
    onClose,
    onApply,
    fileFormat
  });

  return (
    <>
      <input
        ref={hiddenFileInputRef}
        accept={fileFormat.validTypes.join(',')}
        style={{ display: 'none' }}
        type="file"
        onChange={handleChange}
        id={`${id}-field`}
      />

      <Box sx={{ width: '260px' }}>
        <Box sx={{ p: 1, fontWeight: 'bold' }}>Browse Image</Box>
        {preview.url ? (
          <ModalUploadImagePreview imageUrl={preview.url} onClick={handleClick} />
        ) : (
          <Box
            sx={{
              p: 2,
              backgroundColor: ({ palette }) => alpha(palette.primary.light, 0.1),
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '180px'
            }}
          >
            <Box>
              <Box>
                <Button fullWidth variant="contained" onClick={handleClick}>
                  Browse Image
                </Button>
              </Box>

              <Box sx={{ color: 'grey.600', mt: 2 }}>Max file size 1MB</Box>
            </Box>
          </Box>
        )}

        {error && (
          <FormHelperText error sx={{ px: 2 }}>
            {error}
          </FormHelperText>
        )}

        <Box
          sx={{
            px: 1,
            my: 2,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 2
          }}
        >
          <Button variant="outlined" onClick={onClose}>
            Cancel
          </Button>
          <Button
            disabled={!preview.url && !preview.file}
            id={`${id}-apply`}
            variant="contained"
            onClick={handleUpload}
          >
            Apply
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default UploadImageField;
