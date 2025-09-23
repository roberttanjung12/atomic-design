import { useCallback, useMemo, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Button, IconButton } from '@mui/material';
import Cropper, { type Area } from 'react-easy-crop';

// Helper to create image
const createImage = (imageFile: File): Promise<HTMLImageElement> =>
  new Promise(resolve => {
    const reader = new FileReader();

    reader.readAsDataURL(imageFile);

    reader.onload = event => {
      const image = new Image();

      if (event.target && typeof event.target.result === 'string') {
        image.src = event.target.result;
        resolve(image);

        return;
      }

      throw new Error('FileReader result is not a string');
    };

    reader.onerror = error => {
      throw error;
    };
  });

const getCroppedImg = async (
  imageSrc: File,
  pixelCrop: { x: number; y: number; width: number; height: number }
): Promise<File> => {
  const image = await createImage(imageSrc);
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  if (!ctx) throw new Error('Could not get canvas context');

  canvas.width = pixelCrop.width;
  canvas.height = pixelCrop.height;

  ctx.drawImage(
    image,
    pixelCrop.x,
    pixelCrop.y,
    pixelCrop.width,
    pixelCrop.height,
    0,
    0,
    pixelCrop.width,
    pixelCrop.height
  );

  return new Promise(resolve => {
    canvas.toBlob(blob => {
      if (!blob) {
        throw new Error('Canvas is empty');
      }
      const file = new File([blob], imageSrc.name, { type: blob.type });

      resolve(file);
    }, imageSrc.type);
  });
};

interface MediaCropperProps {
  imageFile?: File | null;
  aspectRatio: number;
  onCropped?: (imageFile: File) => void;
  onClose: () => void;
}

const MediaCropper = ({ imageFile, onCropped, aspectRatio, onClose }: MediaCropperProps) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);

  const onCropComplete = useCallback((_: Area, croppedPixels: Area) => {
    const sidebar = document.querySelector('.desktop-sidebar') as HTMLElement | null;

    if (sidebar) sidebar.style.zIndex = '1';

    setCroppedAreaPixels(croppedPixels);
  }, []);

  const handleExport = async () => {
    if (!croppedAreaPixels || !imageFile) return;

    const file = await getCroppedImg(imageFile, croppedAreaPixels);

    if (onCropped) {
      onCropped(file);
    }
  };

  const imageUrl = useMemo(() => (imageFile ? URL.createObjectURL(imageFile) : ''), [imageFile]);

  if (!imageFile) {
    return null;
  }

  return (
    <Box sx={{ height: '100vh', position: 'fixed', top: 0, left: 0, right: 0, zIndex: 9999 }}>
      <Cropper
        image={imageUrl}
        crop={crop}
        zoom={zoom}
        aspect={aspectRatio}
        onCropChange={setCrop}
        onCropComplete={onCropComplete}
        onZoomChange={setZoom}
      />

      <Box sx={{ position: 'fixed', left: 8, right: 8, bottom: 16, display: 'flex', justifyContent: 'center' }}>
        <Box sx={{ width: 'min(100%, 600px)' }}>
          <Button variant="contained" fullWidth onClick={handleExport}>
            Save
          </Button>
        </Box>
      </Box>

      <Box sx={{ position: 'fixed', right: 8, top: 16 }}>
        <IconButton
          onClick={() => {
            const sidebar = document.querySelector('.desktop-sidebar') as HTMLElement | null;

            if (sidebar) sidebar.style.zIndex = '100';
            onClose();
          }}
        >
          <CloseIcon color="info" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default MediaCropper;
