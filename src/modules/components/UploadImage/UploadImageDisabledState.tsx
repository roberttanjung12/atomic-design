import UploadImage from '@dront/ui/UploadImage';
import { Box } from '@mui/material';

const UploadImageHidePreview = () => {
  return (
    <>
      <Box display="flex" gap={4} flexWrap="wrap">
        <UploadImage
          preview={{
            name: 'example.jpg',
            url: 'https://plus.unsplash.com/premium_photo-1665772801153-7fb1e433d0e5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          }}
          disabled
        />

        <UploadImage disabled />
      </Box>

      <Box sx={{ height: '24px' }} />

      <UploadImage
        preview={{
          name: 'example.jpg',
          url: 'https://plus.unsplash.com/premium_photo-1665772801153-7fb1e433d0e5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }}
        variant="progress"
        disabled
      />

      <Box sx={{ height: '24px' }} />

      <UploadImage variant="progress" disabled />
    </>
  );
};

export default UploadImageHidePreview;
