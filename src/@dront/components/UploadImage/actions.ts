import type { Dispatch, SetStateAction } from 'react';
import compressImage from './upload-image.compressor';

interface HandleChangeParams {
  file: File | null;
  maxInBytes?: number;
  signal: AbortSignal;
  onCompressing: (percent: number) => void;
  setIsCompressed: Dispatch<SetStateAction<boolean>>;
}

export const handleChange = async ({
  file,
  maxInBytes,
  signal,
  onCompressing,
  setIsCompressed
}: HandleChangeParams): Promise<File | null> => {
  if (!file) return file;

  try {
    onCompressing(1);

    const compressed = await compressImage({ file, onCompressing, maxInBytes, signal });

    onCompressing(100);

    const isCompressed = compressed.size < file.size;

    setIsCompressed(isCompressed);

    return compressed;
  } catch {
    return null;
  }
};
