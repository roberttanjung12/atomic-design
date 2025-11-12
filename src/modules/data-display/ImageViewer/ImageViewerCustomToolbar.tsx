import { useState } from 'react';
import ImageViewer from '@dront/ui/ImageViewer';
import { Button } from '@mui/material';

const ImageViewerCustomToolbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Custom Toolbar</Button>
      <ImageViewer
        open={open}
        url="/images/bulb.jpg"
        onClose={() => setOpen(false)}
        hideDownload
        hideFlipHorizontal
        hideFlipVertical
        hideReset
      />
    </>
  );
};

export default ImageViewerCustomToolbar;
