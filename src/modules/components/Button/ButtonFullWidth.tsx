import { Stack, Box, Typography } from '@mui/material';
import { Button } from '@/@dront/components';

const ButtonFullWidth = () => {
  return (
    <Stack spacing={3}>
      {/* Container with full width demonstration */}
      <Box>
        <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
          Solid Full Width Buttons
        </Typography>
        <Stack spacing={2}>
          <Button fullWidth>Full Width Solid Button</Button>
          <Button fullWidth color="success">
            Full Width Success Button
          </Button>
          <Button fullWidth color="danger">
            Full Width Danger Button
          </Button>
        </Stack>
      </Box>

      <Box>
        <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
          Outline Full Width Buttons
        </Typography>
        <Stack spacing={2}>
          <Button variant="outline" fullWidth>
            Full Width Outline Button
          </Button>
          <Button variant="outline" fullWidth color="success">
            Full Width Outline Success
          </Button>
          <Button variant="outline" fullWidth color="warning">
            Full Width Outline Warning
          </Button>
        </Stack>
      </Box>

      <Box>
        <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
          Text Full Width Buttons
        </Typography>
        <Stack spacing={2}>
          <Button variant="text" fullWidth>
            Full Width Text Button
          </Button>
          <Button variant="text" fullWidth color="info">
            Full Width Text Info
          </Button>
          <Button variant="text" fullWidth color="danger">
            Full Width Text Danger
          </Button>
        </Stack>
      </Box>

      {/* Different sizes demonstration */}
      <Box>
        <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
          Full Width with Different Sizes
        </Typography>
        <Stack spacing={2}>
          <Button fullWidth size="xs">
            Extra Small Full Width (28px height)
          </Button>
          <Button fullWidth size="sm">
            Small Full Width (32px height)
          </Button>
          <Button fullWidth size="md">
            Medium Full Width (36px height)
          </Button>
          <Button fullWidth size="lg">
            Large Full Width (40px height)
          </Button>
          <Button fullWidth size="xl">
            Extra Large Full Width (44px height)
          </Button>
        </Stack>
      </Box>

      {/* Constrained width demonstration */}
      <Box>
        <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
          Full Width in Constrained Container
        </Typography>
        <Box sx={{ maxWidth: 400, mx: 'auto', border: '1px dashed #ccc', p: 2, borderRadius: 1 }}>
          <Typography variant="body2" sx={{ mb: 2, textAlign: 'center', color: 'text.secondary' }}>
            Container width: 400px
          </Typography>
          <Stack spacing={2}>
            <Button fullWidth>Solid Button</Button>
            <Button variant="outline" fullWidth>
              Outline Button
            </Button>
            <Button variant="text" fullWidth>
              Text Button
            </Button>
          </Stack>
        </Box>
      </Box>
    </Stack>
  );
};

export default ButtonFullWidth;
