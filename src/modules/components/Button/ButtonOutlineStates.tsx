import { Stack, Typography, Box } from '@mui/material';
import { Button } from '@/@dront/components';

const ButtonOutlineStates = () => {
  return (
    <Box>
      {/* Size Demonstration */}
      <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
        Sizes
      </Typography>
      <Stack direction="row" spacing={2} sx={{ mb: 4, flexWrap: 'wrap' }}>
        <Button variant="outline" size="xs">
          XS Outline
        </Button>
        <Button variant="outline" size="sm">
          SM Outline
        </Button>
        <Button variant="outline" size="md">
          MD Outline
        </Button>
        <Button variant="outline" size="lg">
          LG Outline
        </Button>
        <Button variant="outline" size="xl">
          XL Outline
        </Button>
      </Stack>

      {/* State Demonstration */}
      <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
        States
      </Typography>
      <Stack direction="row" spacing={2} sx={{ mb: 4, flexWrap: 'wrap', gap: 2 }}>
        <Box textAlign="center">
          <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
            Default
          </Typography>
          <Button variant="outline">Default</Button>
        </Box>
        <Box textAlign="center">
          <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
            Hover
          </Typography>
          <Button
            variant="outline"
            sx={{
              '&:hover': {
                backgroundColor: '#0D55C9 !important',
                color: '#FFFFFF !important',
                borderColor: '#0D55C9 !important'
              }
            }}
          >
            Hover
          </Button>
        </Box>
        <Box textAlign="center">
          <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
            Active
          </Typography>
          <Button
            variant="outline"
            sx={{
              backgroundColor: '#073C92 !important',
              color: '#FFFFFF !important',
              borderColor: '#073C92 !important',
              '&:hover': {
                backgroundColor: '#073C92 !important',
                color: '#FFFFFF !important',
                borderColor: '#073C92 !important'
              }
            }}
          >
            Active
          </Button>
        </Box>
        <Box textAlign="center">
          <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
            Focused
          </Typography>
          <Button
            variant="outline"
            sx={{
              borderColor: '#083379 !important',
              outline: '2px solid #083379 !important',
              outlineOffset: '2px !important',
              '&:hover': {
                backgroundColor: 'transparent !important',
                borderColor: '#083379 !important'
              }
            }}
          >
            Focused
          </Button>
        </Box>
        <Box textAlign="center">
          <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
            Disabled
          </Typography>
          <Button variant="outline" disabled>
            Disabled
          </Button>
        </Box>
      </Stack>

      {/* Color Variants */}
      <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 2, mt: 4 }}>
        Color Variants
      </Typography>
      <Stack direction="row" spacing={2} sx={{ flexWrap: 'wrap' }}>
        <Button variant="outline" color="primary">
          Primary
        </Button>
        <Button variant="outline" color="info">
          Info
        </Button>
        <Button variant="outline" color="success">
          Success
        </Button>
        <Button variant="outline" color="warning">
          Warning
        </Button>
        <Button variant="outline" color="danger">
          Danger
        </Button>
      </Stack>
    </Box>
  );
};

export default ButtonOutlineStates;
