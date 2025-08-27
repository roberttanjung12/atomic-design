import { Stack, Typography, Box } from '@mui/material';
import { Button } from '@/@dront/components';

const ButtonTextStates = () => {
  return (
    <Box>
      {/* Size Demonstration */}
      <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
        Sizes
      </Typography>
      <Stack direction="row" spacing={2} sx={{ mb: 4, flexWrap: 'wrap' }}>
        <Button variant="text" size="xs">
          XS Text
        </Button>
        <Button variant="text" size="sm">
          SM Text
        </Button>
        <Button variant="text" size="md">
          MD Text
        </Button>
        <Button variant="text" size="lg">
          LG Text
        </Button>
        <Button variant="text" size="xl">
          XL Text
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
          <Button variant="text">Default</Button>
        </Box>
        <Box textAlign="center">
          <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
            Hover
          </Typography>
          <Button
            variant="text"
            sx={{
              '&:hover': {
                backgroundColor: '#0D55C90A !important',
                color: '#0847AB !important'
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
            variant="text"
            sx={{
              backgroundColor: '#0D55C914 !important',
              color: '#073C92 !important',
              '&:hover': {
                backgroundColor: '#0D55C914 !important',
                color: '#073C92 !important'
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
            variant="text"
            sx={{
              backgroundColor: '#0D55C90A !important',
              outline: '2px solid #083379 !important',
              outlineOffset: '2px !important',
              '&:hover': {
                backgroundColor: '#0D55C90A !important'
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
          <Button variant="text" disabled>
            Disabled
          </Button>
        </Box>
      </Stack>

      {/* Color Variants */}
      <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 2, mt: 4 }}>
        Color Variants
      </Typography>
      <Stack direction="row" spacing={2} sx={{ flexWrap: 'wrap' }}>
        <Button variant="text" color="primary">
          Primary
        </Button>
        <Button variant="text" color="info">
          Info
        </Button>
        <Button variant="text" color="success">
          Success
        </Button>
        <Button variant="text" color="warning">
          Warning
        </Button>
        <Button variant="text" color="danger">
          Danger
        </Button>
      </Stack>
    </Box>
  );
};

export default ButtonTextStates;
