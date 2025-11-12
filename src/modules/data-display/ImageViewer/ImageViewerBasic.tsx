import { useState } from 'react';
import ImageViewer from '@dront/ui/ImageViewer';
import { Button } from '@mui/material';

const ImageViewerBasic = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button onClick={handleOpen}>View Image</Button>

      <ImageViewer open={open} url="/images/bulb.jpg" onClose={handleClose} />
    </>
  );
};

export default ImageViewerBasic;
