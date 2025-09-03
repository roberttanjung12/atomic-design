/* eslint-disable no-use-before-define */
export interface CompressImageParams {
  file: File;
  name?: string;
  onCompress: (percent: number) => void;
  maxInBytes?: number;
  width?: number;
}

const compressImage = ({
  file,
  name,
  onCompress,
  maxInBytes = 1_000_000,
  width = 2000
}: CompressImageParams): Promise<File> => {
  return new Promise(resolve => {
    if (!file) throw new Error('No file provided');

    if (maxInBytes > file.size) resolve(file);

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = event => {
      const image = new Image();

      image.src = event?.target?.result as string;

      compress({ image, resolve, maxInBytes, width, onCompress, name: name || file.name, type: file.type });
    };

    reader.onerror = error => {
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
  onCompress: (percent: number) => void;
  name: string;
  type: string;
}

const compress = ({ image, resolve, maxInBytes, width, onCompress, name, type }: CompressParams) => {
  image.onload = event => {
    const ratio = width / (event?.target as HTMLImageElement).width;

    const canvas = document.createElement('canvas');

    canvas.width = width;
    canvas.height = (event?.target as HTMLImageElement).height * ratio;

    const context = canvas.getContext('2d');

    if (context) {
      context.drawImage(image, 0, 0, canvas.width, canvas.height);

      const compressedUrl = context.canvas.toDataURL(type, 100);

      urlToBlob({ resolve, imageUrl: compressedUrl, maxInBytes, name, width, onCompress, type });
    }
  };
};

interface UrlToBlobParams {
  resolve: (value: File | PromiseLike<File>) => void;
  imageUrl: string;
  maxInBytes: number;
  name: string;
  width: number;
  onCompress: (percent: number) => void;
  type: string;
}

const urlToBlob = async ({ resolve, imageUrl, maxInBytes, name, width, onCompress, type }: UrlToBlobParams) => {
  const response = await fetch(imageUrl);
  const blob = await response.blob();

  const result = new File([blob], name, { type });

  if (result.size >= maxInBytes) {
    const processInPercent = Math.floor((maxInBytes / result.size) * 100);

    onCompress(processInPercent);

    const compressed = await compressImage({ file: result, width: width - 100, maxInBytes, onCompress });

    resolve(compressed);

    return;
  }

  resolve(result);
};
