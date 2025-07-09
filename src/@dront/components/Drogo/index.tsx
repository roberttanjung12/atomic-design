'use client';

import { Box, styled } from '@mui/material';

interface DrogoProps {
  /**
   * Variant of drogo dimension with option 'full' | 'box'
   */
  variant: 'box' | 'full';

  /**
   * Size of drogo
   */
  size: number;

  /**
   * Mode of drogo, either 'light' or 'dark'
   */
  mode?: 'light' | 'dark';
}

const RedCross = styled(Box)(({ variant, size }: DrogoProps) => ({
  position: 'absolute',
  width: variant === 'full' ? `calc(${size}px / 3.4)` : size,
  height: variant === 'full' ? `calc(${size}px / 3.4)` : size,
  backgroundImage: 'url("/drac/red-cross.svg")',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  '@keyframes rolling': {
    '0%': {
      transform: 'rotate(0deg)'
    },
    '40%': {
      transform: 'rotate(0deg)'
    },
    '60%': {
      transform: 'rotate(90deg)'
    },
    '100%': {
      transform: 'rotate(90deg)'
    }
  },
  animation: 'rolling 1s infinite linear'
}));

const WolfHead = styled(Box)(({ size }: { size: number }) => ({
  position: 'relative',
  width: size,
  height: size,
  backgroundImage: 'url("/drac/wolf-head.svg")',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover'
}));

const DRONTHead = styled('img')(({ size }: { size: number }) => ({
  position: 'relative',
  width: size,
  marginTop: 3.8
}));

/**
 * Drogo - Configurable DRONT logo.
 *
 * @param {object} props
 * @param {string} props.variant - Variant of drogo dimension with option 'full' | 'box'
 * @param {number} props.size - Size of drogo
 * @param {string} [props.mode] - Mode of drogo, either 'light' or 'dark'
 *
 * @example <Drogo variant="box" size={250} />
 */
const Drogo = ({ variant, size }: DrogoProps) => {
  return variant === 'full' ? (
    <Box display="flex" justifyContent="center" width={size}>
      <DRONTHead src={`/logo/Logoipsum.png`} alt="DRONT" size={size} />
    </Box>
  ) : (
    <Box display="flex" height={size} width={size}>
      <RedCross variant={variant} size={size} />
      <WolfHead size={size} />
    </Box>
  );
};

export default Drogo;
