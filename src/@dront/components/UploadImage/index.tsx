import { type ReactNode, forwardRef, useState } from 'react';
import { FormHelperText, FormLabel } from '@mui/material';
import DraggableUploadImage from './drag-and-drop';
import Preview from './preview';
import { initialAcceptTypes } from './upload-image.constants';
import type { IPreview } from './upload-image.type';

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
  preview: IPreview;
  /**
   * Callback function that will be called during the compression process.
   */
  onCompress: (progress: number) => void;
  /**
   * Callback function called when a file is successfully selected or changed.
   * Returns a File object and potential errors.
   */
  onChange: (file: File, errors?: unknown) => void;
  /**
   * Callback function called when the image preview is removed by the user.
   */
  onRemove: () => void;

  /**
   * Maximum allowed file size in bytes.
   */
  maxInBytes?: number;
  /**
   * If `true`, the component will be displayed in an error state (e.g., label and helper text turn red).
   */
  error?: boolean;
  /**
   * Content to be displayed as the label for the input field.
   */
  label?: ReactNode;
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
   * If `true`, enables the crop feature after an image is selected.
   */
  isCrop?: boolean;
  /**
   * Specifies the aspect ratio for the crop tool. Only applies if `isCrop` is `true`.
   * @default 16/9
   */
  aspectRatio?: number;
  /**
   * List of file types accepted by the component.
   * @default initialAcceptTypes
   * @type {AcceptedFileType[]}
   */
  acceptTypes?: { input: string; mime: string }[];
  /**
   * if true, shows the image preview after selection
   * @default true
   */
  showPreview?: boolean;
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
    preview,
    onChange,
    onCompress,
    onRemove,

    error,
    helperText,
    label,
    id = 'image-upload',
    maxInBytes,
    required,
    disabled,
    isCrop,
    aspectRatio = 16 / 9,
    acceptTypes = initialAcceptTypes,
    showPreview = true
  } = props;

  const [isCompressed, setIsCompressed] = useState<boolean>(false);
  const { url, name, size, process, loadingInfo } = preview;

  const isShowField = !!process;

  return (
    <>
      <FormLabel
        error={error}
        htmlFor={id}
        required={required}
        sx={{ display: 'block', mb: '8px', color: ({ palette }) => palette.common.black }}
      >
        {label}
      </FormLabel>

      <DraggableUploadImage
        maxInBytes={maxInBytes}
        onCompress={onCompress}
        id={id}
        error={error}
        isShowField={isShowField}
        onChange={onChange}
        disabled={disabled}
        setIsCompressed={setIsCompressed}
        isCrop={isCrop}
        aspectRatio={aspectRatio}
        acceptTypes={acceptTypes}
      >
        {({ getInputProps }) => {
          return (
            <input
              ref={ref}
              accept={initialAcceptTypes.map(type => type.input).join(', ')}
              {...getInputProps()}
              id={id}
            />
          );
        }}
      </DraggableUploadImage>

      <Preview
        loadingInfo={loadingInfo}
        name={name}
        process={process}
        removePreview={onRemove}
        size={size}
        url={url}
        isCompressed={isCompressed}
        disabled={disabled}
        setIsCompressed={setIsCompressed}
        showPreview={showPreview}
      />

      <FormHelperText error={error} id={`${id}-helper-text`}>
        {helperText}
      </FormHelperText>
    </>
  );
});

export default UploadImage;
