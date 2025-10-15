import { useCallback, useEffect, useMemo, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Button, IconButton } from '@mui/material';
import { createPortal } from 'react-dom';
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

// Helper to get the cropped image as a File
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

  // State to hold the portal container element
  const [modalRoot, setModalRoot] = useState<HTMLElement | null>(null);

  // Create a div element on mount and append it to the body
  // This div will serve as the root for our portal
  useEffect(() => {
    const element = document.createElement('div');

    document.body.appendChild(element);
    setModalRoot(element);

    // Cleanup function to remove the div when the component unmounts
    return () => {
      document.body.removeChild(element);
    };
  }, []);

  const onCropComplete = useCallback((_: Area, croppedPixels: Area) => {
    setCroppedAreaPixels(croppedPixels);
  }, []);

  const handleExport = async () => {
    if (!croppedAreaPixels || !imageFile) return;

    try {
      const file = await getCroppedImg(imageFile, croppedAreaPixels);

      if (onCropped) {
        onCropped(file);
      }
    } catch (error) {
      console.error('Error cropping image:', error);
    }
  };

  const imageUrl = useMemo(() => (imageFile ? URL.createObjectURL(imageFile) : ''), [imageFile]);

  // Don't render anything if there's no image file or the portal root hasn't been created
  if (!imageFile || !modalRoot) {
    return null;
  }

  // The Modal content to be rendered into the portal
  const modalContent = (
    <Box
      sx={{
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        backgroundColor: 'rgba(0,0,0,0.4)'
      }}
    >
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
        <IconButton onClick={onClose}>
          {/* Ensure the close icon is visible against any background */}
          <CloseIcon sx={{ color: 'white', backgroundColor: 'rgba(0,0,0,0.5)', borderRadius: '50%', padding: '4px' }} />
        </IconButton>
      </Box>
    </Box>
  );

  // Use createPortal to render the modal content into the modalRoot element
  return createPortal(modalContent, modalRoot);
};

export default MediaCropper;
