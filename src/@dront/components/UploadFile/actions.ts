import type React from 'react';
import initialPreview from './constant';
import compressImage from './helpers/compress-image';
import type { FilePreview } from './types';

export const handleChange = async (
  file: File,
  setPreview: React.Dispatch<React.SetStateAction<FilePreview>>
): Promise<File | Error> => {
  const config = {};

  if (file.type === 'application/pdf') {
    setPreview({ url: '', name: file.name, size: file.size, process: 100, type: file.type, loadingInfo: '' });

    return file;
  }

  if (
    file.type.includes('excel') ||
    file.type.includes('spreadsheet') ||
    file.type.includes('word') ||
    file.type.includes('document') ||
    file.type.startsWith('text/')
  ) {
    setPreview({ url: '', name: file.name, size: file.size, process: 100, type: file.type, loadingInfo: '' });

    return file;
  }

  if (file.type.startsWith('image/')) {
    try {
      setPreview(prev => ({
        ...prev,
        name: file.name,
        process: file.name ? 1 : 0,
        size: file.size,
        type: file.type
      }));

      const onCompress = (process: number) => {
        setPreview(prev => ({ ...prev, process }));
      };

      const compressed = await compressImage({ file, onCompress, ...config });

      setPreview({
        url: URL.createObjectURL(compressed),
        name: compressed.name,
        size: compressed.size,
        process: 100,
        type: file.type,
        loadingInfo: ''
      });

      return compressed;
    } catch (err) {
      return err as Error;
    }
  }

  setPreview({ url: '', name: file.name, size: file.size, process: 100, type: file.type, loadingInfo: '' });

  return file;
};

export const removePreview = (setPreview: React.Dispatch<React.SetStateAction<FilePreview>>, onRemove?: () => void) => {
  setPreview(initialPreview);

  if (onRemove) {
    onRemove();
  }
};
