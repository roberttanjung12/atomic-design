/* eslint-disable no-use-before-define */
export interface CompressImageParams {
  file: File;
  name?: string;
  onCompressing: (percent: number) => void;
  maxInBytes?: number;
  width?: number;
  signal: AbortSignal;
}

const compressImage = ({
  file,
  name,
  onCompressing,
  maxInBytes = 1_000_000,
  width = 2000,
  signal
}: CompressImageParams): Promise<File> => {
  return new Promise(resolve => {
    if (!file) throw new Error('No file provided');

    if (maxInBytes > file.size) resolve(file);

    const reader = new FileReader();
    const image = new Image();

    const cleanup = () => {
      reader.onload = null;
      reader.onerror = null;
      image.onload = null;
    };

    const abortListener = () => {
      cleanup();
      if (reader.readyState === 1) {
        reader.abort();
      }
    };

    signal.addEventListener('abort', abortListener);

    reader.readAsDataURL(file);

    reader.onload = event => {
      image.src = event?.target?.result as string;

      compress({
        image,
        resolve,
        maxInBytes,
        width,
        onCompressing,
        name: name || file.name,
        type: file.type,
        cleanup,
        signal
      });
    };

    reader.onerror = error => {
      cleanup();
      throw error;
    };
  });
};

export default compressImage;

interface CompressParams {
  image: HTMLImageElement;
  resolve: (value: File | PromiseLike<File>) => void;
  maxInBytes: number;
  width: number;
  onCompressing: (percent: number) => void;
  name: string;
  type: string;
  cleanup: () => void;
  signal: AbortSignal;
}

const compress = ({
  image,
  resolve,
  maxInBytes,
  width,
  onCompressing,
  name,
  type,
  cleanup,
  signal
}: CompressParams) => {
  image.onload = event => {
    if (signal.aborted) {
      cleanup();
    }

    const ratio = width / (event?.target as HTMLImageElement).width;

    const canvas = document.createElement('canvas');

    canvas.width = width;
    canvas.height = (event?.target as HTMLImageElement).height * ratio;

    const context = canvas.getContext('2d');

    if (context) {
      context.drawImage(image, 0, 0, canvas.width, canvas.height);

      const compressedUrl = context.canvas.toDataURL(type, 100);

      urlToBlob({ resolve, imageUrl: compressedUrl, maxInBytes, name, width, onCompressing, type, signal, cleanup });
    } else {
      cleanup();
    }
  };
};

interface UrlToBlobParams {
  resolve: (value: File | PromiseLike<File>) => void;
  imageUrl: string;
  maxInBytes: number;
  name: string;
  width: number;
  onCompressing: (percent: number) => void;
  type: string;
  signal: AbortSignal;
  cleanup: () => void;
}

const urlToBlob = async ({
  resolve,
  imageUrl,
  maxInBytes,
  name,
  width,
  onCompressing,
  type,
  signal,
  cleanup
}: UrlToBlobParams) => {
  const response = await fetch(imageUrl);
  const blob = await response.blob();

  const result = new File([blob], name, { type });

  if (result.size >= maxInBytes) {
    const processInPercent = Math.floor((maxInBytes / result.size) * 100);

    if (!signal.aborted) {
      onCompressing(processInPercent);
    } else {
      cleanup();

      return;
    }

    const compressed = await compressImage({ file: result, width: width - 100, maxInBytes, onCompressing, signal });

    resolve(compressed);

    return;
  }

  resolve(result);
};
