import type { Dispatch, SetStateAction } from 'react';
import compressImage from './upload-image.compressor';

interface HandleChangeParams {
  file: File | null;
  maxInBytes?: number;
  onCompress: (percent: number) => void;
  setIsCompressed: Dispatch<SetStateAction<boolean>>;
}

export const handleChange = async ({
  file,
  maxInBytes,
  onCompress,
  setIsCompressed
}: HandleChangeParams): Promise<File | null> => {
  if (!file) return file;

  onCompress(1);

  try {
    const compressed = await compressImage({ file, onCompress, maxInBytes });

    onCompress(100);

    const isCompressed = compressed.size < file.size;

    setIsCompressed(isCompressed);

    return compressed;
  } catch {
    return null;
  }
};
