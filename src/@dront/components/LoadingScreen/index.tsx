import { Box, Typography } from '@mui/material';
import { Drogo } from '@/@dront/components';

const LoadingScreen = ({
  background,
  color,
  height
}: {
  background: string;
  color: string;
  height: string | number;
}) => {
  return (
    <Box
      alignItems="center"
      borderRadius={0}
      display="flex"
      flex={1}
      height={height}
      justifyContent="center"
      m={0}
      width="100%"
      sx={{ backgroundColor: background }}
    >
      <Box textAlign="center">
        <Drogo variant="box" size={200} />
        <Typography variant="h3" mt={8} color={color} fontSize="1.3em" letterSpacing={2}>
          LOADING
        </Typography>
      </Box>
    </Box>
  );
};

export default LoadingScreen;
