import { useRef, useState } from 'react';
import type { IPreview } from './ModalUploadImage.type';

interface FileFormat {
  validTypes: string[];
  errorMessage: string;
}

interface UseModalUploadImageProps {
  defaultPreview: IPreview;
  onClose: () => void;
  onApply: (data: IPreview | null) => void;
  fileFormat: FileFormat;
}

/**
 * Custom hook for managing image upload modal logic.
 *
 * @param {UseModalUploadImageProps} props - The properties for configuring the modal upload behavior.
 * @param {IPreview} props.defaultPreview - The initial preview state for the image.
 * @param {() => void} props.onClose - Callback to close the modal.
 * @param {(preview: IPreview | null) => void} props.onApply - Callback to apply the selected image.
 * @param {{ validTypes: string[]; errorMessage: string }} props.fileFormat - Allowed file types and error message for invalid formats.
 *
 * @returns {{
 *   hiddenFileInputRef: React.RefObject<HTMLInputElement>;
 *   preview: IPreview;
 *   error: string;
 *   handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
 *   handleClick: () => void;
 *   handleUpload: () => Promise<void>;
 * }} Object containing refs, state, and handlers for modal image upload.
 *
 * @remarks
 * - Validates file type and size (max 1MB).
 * - Provides preview and error state management.
 * - Handles file input click, change, and upload actions.
 */
const useModalUploadImage = ({ defaultPreview, onClose, onApply, fileFormat }: UseModalUploadImageProps) => {
  const hiddenFileInputRef = useRef<HTMLInputElement | null>(null);

  const [preview, setPreview] = useState<IPreview>(defaultPreview);
  const [error, setError] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    const maxSize = 1 * 1024 * 1024;

    if (!file) {
      setPreview({ url: '', file: null });

      return;
    }

    if (!fileFormat.validTypes.includes(file.type)) {
      setError(fileFormat.errorMessage);
      setPreview({ url: '', file: null });

      return;
    }

    if (file.size > maxSize) {
      setError('File size exceeds the maximum limit of 1MB.');
      setPreview({ url: '', file: null });

      return;
    }

    const url = URL.createObjectURL(file);

    setPreview({ url, file });
  };

  const handleClick = () => {
    setError('');
    hiddenFileInputRef.current?.click();
  };

  const handleUpload = async () => {
    if (!preview.file) {
      onApply(null);
      onClose();

      return;
    }

    onApply(preview);
    onClose();
  };

  return {
    hiddenFileInputRef,
    preview,
    error,
    handleChange,
    handleClick,
    handleUpload
  };
};

export default useModalUploadImage;
