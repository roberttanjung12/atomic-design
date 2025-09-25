import CloseIcon from '@mui/icons-material/Close';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import {
  alpha,
  Box,
  ButtonBase,
  Icon,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  styled,
  Typography
} from '@mui/material';
import { useDropzone, type FileRejection } from 'react-dropzone';
import DragAndDropIcon from './DragAndDropIcon';
import FileError from './FileError';
import type { DocumentFileTypeProps } from './types';
import { extractFileType, getFileFormat, sizeOf } from './utils';

const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  flex: 1,
  padding: 40,
  borderWidth: 2,
  borderRadius: 10,
  borderColor: theme.palette.grey[500],
  borderStyle: 'dashed',
  color: theme.palette.grey[500],
  outline: 'none',
  transition: theme.transitions.create('border')
}));

/**
 * DocumentFileType component for file upload with drag and drop functionality
 *
 * This component provides a comprehensive file upload interface with support for:
 * - Single and multiple file uploads
 * - File type validation based on MIME types
 * - File size validation
 * - Drag and drop interactions
 * - File download functionality
 * - Visual feedback for upload states
 * - Error handling and display
 *
 * @param {DocumentFileTypeProps} props - The component props
 * @param {File | File[]} [props.value] - Current selected file(s)
 * @param {() => void} props.onRemove - Callback when removing files
 * @param {(value: any) => void} props.onChange - Callback when files change
 * @param {Accept} [props.accept] - Accepted file types (MIME types)
 * @param {number} [props.maxSize] - Maximum file size in KB
 * @param {number} [props.maxFiles] - Maximum number of files (default: 1)
 * @param {boolean} [props.disabled] - Whether component is disabled
 * @param {ReactNode} [props.dragIcon] - Custom drag and drop icon
 * @param {ConfigFileError} [props.customError] - Custom error messages
 * @param {Config} [props.config] - Additional configuration options
 * @returns {JSX.Element} The DocumentFileType component
 */
const DocumentFileType = ({
  value,
  onRemove,
  onChange,
  accept,
  maxSize,
  maxFiles,
  disabled,
  dragIcon,
  customError,
  config
}: DocumentFileTypeProps) => {
  const handleDropFile = (incomingFiles: File[]) => {
    if (incomingFiles.length === 0) return;
    const tmpFiles = incomingFiles.map(file =>
      Object.assign(file, {
        preview: URL.createObjectURL(file)
      })
    );

    if (onChange) onChange(maxFiles ? tmpFiles : tmpFiles[0]);
  };

  const handleDownloadFile = () => {
    if (!value) return;

    if (Array.isArray(value)) {
      value.forEach(file => {
        const url = URL.createObjectURL(file);
        const link = document.createElement('a');

        link.href = url;
        link.download = file.name;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      });
    } else {
      const url = URL.createObjectURL(value);
      const link = document.createElement('a');

      link.href = url;
      link.download = value.name;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }
  };

  const { getRootProps, getInputProps, open, isDragAccept, isFocused, isDragReject, fileRejections } = useDropzone({
    accept,
    onDrop: handleDropFile,
    noClick: true,
    noKeyboard: true,
    maxSize: maxSize ? maxSize * 1024 : undefined,
    maxFiles: maxFiles || 1,
    disabled
  });

  return (
    <Container
      id="DocumentFileType"
      data-testid="DocumentFileType"
      padding={value ? '10px !important' : undefined}
      sx={{ borderColor: isDragAccept ? 'primary.main' : isDragReject ? 'error.main' : 'inherit' }}
      {...getRootProps({ isDragAccept, isFocused, isDragReject })}
    >
      {value ? (
        <Paper
          sx={{
            width: '100%',
            padding: 4,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: theme => alpha(theme.palette.primary.main, 0.1)
          }}
        >
          <ButtonBase
            disableRipple
            disabled={disabled}
            onClick={handleDownloadFile}
            sx={{
              textAlign: 'left',
              textDecoration: 'underline',
              '&:hover': {
                textDecoration: 'underline',
                color: 'primary.main'
              }
            }}
          >
            <Typography>
              {Array.isArray(value) ? `${value.length} File ${getFileFormat(accept)}` : value?.name}
            </Typography>
          </ButtonBase>
          <IconButton disabled={disabled} onClick={onRemove}>
            <CloseIcon />
          </IconButton>
        </Paper>
      ) : (
        <>
          <Box component="input" {...getInputProps()} />
          <Icon sx={{ width: 72, height: 'auto' }}>{dragIcon ? dragIcon : <DragAndDropIcon />}</Icon>
          <Typography>
            {config?.label?.drop || 'Drop the files here or'}
            <ButtonBase disableRipple disabled={disabled} sx={{ textDecoration: 'underline', ml: 0.5 }} onClick={open}>
              Browse
            </ButtonBase>
          </Typography>
          {accept || maxSize ? (
            <List sx={{ listStyleType: 'disc', '& .MuiListItem-root': { px: 0, py: 1 } }}>
              {accept && (
                <ListItem sx={{ display: 'list-item' }}>
                  <ListItemText>
                    {maxFiles ? `Maximum ${maxFiles} ` : ''}File {extractFileType(accept).toUpperCase()}
                  </ListItemText>
                </ListItem>
              )}
              {maxSize && (
                <ListItem sx={{ display: 'list-item' }}>
                  <ListItemText>
                    {config?.label?.maxSize || `Maximum ${sizeOf(maxSize * 1024)}`}
                    {maxFiles ? '/File' : undefined}
                  </ListItemText>
                </ListItem>
              )}
            </List>
          ) : null}
          {fileRejections.length > 0 || customError ? (
            <Paper elevation={0} sx={{ width: '100%', backgroundColor: theme => alpha(theme.palette.error.main, 0.1) }}>
              <List disablePadding>
                {fileRejections.length > 0 ? (
                  <FileError
                    fileRejected={fileRejections as FileRejection[]}
                    accept={accept}
                    maxSize={maxSize}
                    customError={config?.error}
                  />
                ) : (
                  <ListItem>
                    <ListItemIcon sx={{ minWidth: 30, color: theme => theme.palette.error.main }}>
                      <HighlightOffIcon />
                    </ListItemIcon>
                    <ListItemText primary={customError} />
                  </ListItem>
                )}
              </List>
            </Paper>
          ) : null}
        </>
      )}
    </Container>
  );
};

export default DocumentFileType;
