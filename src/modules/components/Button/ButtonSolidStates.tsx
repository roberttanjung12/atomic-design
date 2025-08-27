import { Stack, Typography, Box } from '@mui/material';
import { Button } from '@/@dront/components';

const ButtonSolidStates = () => {
  return (
    <Box>
      {/* Size Demonstration */}
      <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
        Sizes
      </Typography>
      <Stack direction="row" spacing={2} sx={{ mb: 4, flexWrap: 'wrap' }}>
        <Button size="xs">XS Button</Button>
        <Button size="sm">SM Button</Button>
        <Button size="md">MD Button</Button>
        <Button size="lg">LG Button</Button>
        <Button size="xl">XL Button</Button>
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
          <Button>Default</Button>
        </Box>
        <Box textAlign="center">
          <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
            Hover
          </Typography>
          <Button
            sx={{
              '&:hover': {
                backgroundColor: '#0847AB !important',
                borderColor: '#0847AB !important'
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
            sx={{
              backgroundColor: '#073C92 !important',
              borderColor: '#073C92 !important',
              '&:hover': {
                backgroundColor: '#073C92 !important',
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
            sx={{
              backgroundColor: '#083379 !important',
              borderColor: '#083379 !important',
              outline: '2px solid #083379 !important',
              outlineOffset: '2px !important',
              '&:hover': {
                backgroundColor: '#083379 !important',
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
          <Button disabled>Disabled</Button>
        </Box>
      </Stack>

      {/* Color Variants */}
      <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 2, mt: 4 }}>
        Color Variants
      </Typography>
      <Stack direction="row" spacing={2} sx={{ flexWrap: 'wrap' }}>
        <Button color="primary">Primary</Button>
        <Button color="info">Info</Button>
        <Button color="success">Success</Button>
        <Button color="warning">Warning</Button>
        <Button color="danger">Danger</Button>
      </Stack>
    </Box>
  );
};

export default ButtonSolidStates;
