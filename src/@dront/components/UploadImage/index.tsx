import { type ReactNode, forwardRef, useRef, useState } from 'react';
import { FormHelperText, FormLabel } from '@mui/material';
import DraggableUploadImage from './drag-and-drop';
import Preview from './preview';
import { acceptTypes } from './upload-image.constants';
import type { ErrorUpload, IPreview } from './upload-image.type';

/**
 * @typedef {object} AcceptedFileType
 * @property {string} input - File type accepted by the 'accept' attribute on HTML input (e.g., 'image/jpeg').
 * @property {string} mime - MIME type of the file (e.g., 'image/jpeg').
 */

/**
 * Props for the UploadImage component.
 */
interface UploadImageProps {
  /*K*
   * Object containing the state of the image preview (URL, name, size, etc.).
   * This controls what is displayed in the preview component.
   */
  preview: IPreview | null;
  /**
   * Callback function called when a file is successfully selected or changed.
   * Returns a File object and potential errors.
   */
  onChange?: (preview: IPreview | null) => void;
  /**
   * Callback function called when an error occurs during the upload process.
   */
  onError?: (errors?: ErrorUpload) => void;
  /**
   * Callback function called when the image preview is removed by the user.
   */
  onRemove?: () => void;

  /**
   * Function that generates the text displayed when an image has been compressed.
   * @param {string} size - The size of the compressed image in a human-readable format (e.g., '200 KB').
   * @default (size) => `The image has been compressed to ${size}. Please review the compressed image to ensure it meets the required quality standards before proceeding`
   */
  compressedText?: ((size: string) => ReactNode) | string | ReactNode;
  /**
   * Determines the style variant of the component.
   * @default 'standard'
   */
  variant?: 'standard' | 'progress';
  /**
   * Maximum allowed file size in megabytes.
   * @default 1
   */
  maxInMB?: number;
  /**
   * If `true`, the component will be displayed in an error state (e.g., label and helper text turn red).
   */
  error?: boolean;
  /**
   * Content to be displayed as the label for the input field.
   */
  label?: ReactNode;
  /**
   * Text displayed while the image is being compressed.
   */
  loadingInfo?: string;
  /**
   * Unique ID for the input element, used for accessibility.
   * @default 'image-upload'
   */
  id?: string;
  /**
   * Helper text displayed below the component. Useful for instructions or error messages.
   */
  helperText?: ReactNode;
  /**
   * If `true`, adds an asterisk (*) to the label, indicating this input is required.
   */
  required?: boolean;
  /**
   * If `true`, the component will be disabled and users cannot interact with it.
   */
  disabled?: boolean;
  /**
   * Specifies the aspect ratio for the crop tool`.
   */
  aspectRatio?: number;
  /**
   * if true, shows the image preview after selection
   * @default true
   */
  showPreview?: boolean;
  /**
   * Callback function that will be called during the compression process.
   */
  onCompressing?: (progress: number) => void;
}

/**
 * The UploadImage component is a comprehensive input field for uploading images.
 * This component supports drag-and-drop, image preview, size validation,
 * and image cropping functionality.
 * @component
 * @param {UploadImageProps} props - Props to configure the component.
 * @param {React.Ref<HTMLInputElement>} ref - Ref to be forwarded to the internal HTML input element.
 * @returns {JSX.Element} The JSX element for the image upload component.
 */
const UploadImage = forwardRef<HTMLInputElement, UploadImageProps>((props, ref) => {
  const {
    onChange = () => {},
    onError = () => {},
    onRemove = () => {},
    preview,
    variant = 'standard',
    aspectRatio,
    compressedText = (size: string) => `The image has been compressed to ${size}`,
    disabled,
    error,
    id = 'image-upload',
    helperText,
    label,
    loadingInfo = 'Compressing...',
    maxInMB = 1,
    onCompressing = () => {},
    required,
    showPreview = true
  } = props;

  const [isCompressed, setIsCompressed] = useState<boolean>(false);
  const [process, setProcess] = useState<number>(0);

  const isShowField = !!process || !!preview;

  const compressionControllerRef = useRef<AbortController | null>(null);

  const handleCompressing = (progress: number) => {
    setProcess(progress);
    onCompressing(progress);
  };

  const handleRemove = () => {
    if (compressionControllerRef?.current) compressionControllerRef.current.abort();
    setProcess(0);
    setIsCompressed(false);
    onRemove();
  };

  return (
    <div style={{ position: 'relative' }}>
      <FormLabel
        error={error}
        htmlFor={id}
        required={required}
        sx={{ display: 'block', mb: '8px', color: ({ palette }) => palette.text.primary }}
      >
        {label}
      </FormLabel>

      <DraggableUploadImage
        variant={variant}
        maxInBytes={maxInMB * 1024 * 1024}
        onCompressing={handleCompressing}
        id={id}
        error={error}
        isShowField={isShowField}
        onChange={onChange}
        onError={onError}
        disabled={disabled}
        setIsCompressed={setIsCompressed}
        aspectRatio={aspectRatio}
        acceptTypes={acceptTypes}
        compressionControllerRef={compressionControllerRef}
      >
        {({ getInputProps }) => {
          return (
            <input ref={ref} accept={acceptTypes.map(type => type.input).join(', ')} {...getInputProps()} id={id} />
          );
        }}
      </DraggableUploadImage>

      <Preview
        loadingInfo={loadingInfo}
        process={process}
        preview={preview}
        isCompressed={isCompressed}
        disabled={disabled}
        showPreview={showPreview}
        variant={variant}
        compressedText={compressedText}
        removePreview={handleRemove}
        setIsCompressed={setIsCompressed}
      />

      <FormHelperText error={error} id={`${id}-helper-text`}>
        {helperText}
      </FormHelperText>
    </div>
  );
});

export default UploadImage;
