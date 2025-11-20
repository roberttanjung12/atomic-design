import { useState } from 'react';
import ImageViewer from '@dront/ui/ImageViewer';
import { Button } from '@mui/material';
import Image from 'next/image';

const ImageViewerWithCustomImage = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Custom Image Component</Button>
      <ImageViewer
        open={open}
        url="/images/bulb.jpg"
        onClose={() => setOpen(false)}
        imageComponent={props => <Image {...props} width={2000} height={2000} unoptimized />}
      />
    </>
  );
};

export default ImageViewerWithCustomImage;
