import { type Dispatch, type SetStateAction, type ReactNode, forwardRef, useRef, useState } from 'react';
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
  preview?: IPreview;
  /**
   * Callback function called when a file is successfully selected or changed.
   * Returns a File object and potential errors.
   */
  onChange?: (preview?: IPreview) => void;
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
   * @default (size) => `The image has been compressed to ${size}`
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
   * @default 'Compressing...'
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
  /**
   * Optional function to manually trigger the upload process.
   * This can be useful if you want to control when the upload happens,
   * rather than it occurring automatically upon file selection.
   *
   * @param {Object} params - The parameters for the upload function.
   * @param {IPreview | undefined} params.preview - The current image preview object, containing file info and preview URL.
   * @param {Dispatch<SetStateAction<string>>} params.setLoadingInfo - Function to update the loading information text during upload.
   * @param {Dispatch<SetStateAction<number>>} params.setProcess - Function to update the upload progress (0-100).
   * @param {Dispatch<SetStateAction<'static' | 'progress'>>} params.setLoaderType - Function to set the loader type ('static' for indeterminate, 'progress' for determinate).
   * @returns {Promise<void>} A promise that resolves when the upload process is complete.
   *
   * The upload function allows you to handle custom upload logic, such as uploading to a server or cloud storage.
   * You can use the provided setters to update the UI state (progress, loading text, loader type) as needed.
   */
  upload?: ({
    preview,
    setLoadingInfo,
    setProcess,
    setLoaderType
  }: {
    preview: IPreview | undefined;
    setLoadingInfo: Dispatch<SetStateAction<string>>;
    setProcess: Dispatch<SetStateAction<number>>;
    setLoaderType: Dispatch<SetStateAction<'static' | 'progress'>>;
  }) => Promise<void>;
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
    loadingInfo: loadingInfoProp = 'Compressing...',
    maxInMB = 1,
    onCompressing = () => {},
    required,
    showPreview = true,
    upload
  } = props;

  const [isCompressed, setIsCompressed] = useState<boolean>(false);
  const [loadingInfo, setLoadingInfo] = useState<string>(loadingInfoProp);
  const [process, setProcess] = useState<number>(0);
  const [loaderType, setLoaderType] = useState<'static' | 'progress'>('progress');

  const isShowField = !!process || !!preview;

  const compressionControllerRef = useRef<AbortController | null>(null);

  const handleCompressing = (progress: number) => {
    setProcess(Math.round(progress * 0.99));
    onCompressing(progress);
  };

  const handleRemove = () => {
    if (compressionControllerRef?.current) compressionControllerRef.current.abort();
    setProcess(0);
    setIsCompressed(false);
    onRemove();
  };

  const handleChange = async (newPreview?: IPreview) => {
    if (!upload) {
      onChange(newPreview);

      return;
    }

    try {
      setLoaderType('static');
      setProcess(1);
      await upload({ preview: newPreview, setLoadingInfo, setProcess, setLoaderType });
    } catch (error: unknown) {
      setProcess(0);
      onChange(undefined);
      onError({ code: (error as any)?.code || '500', message: 'Upload failed. Please try again.', data: error });
    } finally {
      setLoadingInfo(loadingInfoProp);
      setLoaderType('progress');
    }
  };

  const handleError = (errors?: ErrorUpload) => {
    setProcess(0);
    setIsCompressed(false);
    onError(errors);
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
        onChange={handleChange}
        onError={handleError}
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
        isStaticLoader={loaderType === 'static'}
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
