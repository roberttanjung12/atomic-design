import React from 'react';
import { Box, LinearProgress, CircularProgress, Typography, styled } from '@mui/material';
import { alpha } from '@mui/material/styles';

export interface ProgressBarProps {
  /**
   * The progress value (0-100)
   */
  value: number;
  /**
   * Type of progress indicator
   * @default 'linear'
   */
  type?: 'linear' | 'circular';
  /**
   * Whether to show the percentage text
   * @default true
   */
  showPercentage?: boolean;
  /**
   * Color for percentage text
   * @default 'primary'
   */
  percentageColor?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'error'
    | 'info'
    | 'text.primary'
    | 'text.secondary';
  /**
   * Whether to show estimated time
   * @default false
   */
  showEstimatedTime?: boolean;
  /**
   * Estimated time in seconds
   */
  estimatedTimeSeconds?: number;
  /**
   * Size of the progress bar
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Color variant
   * @default 'primary'
   */
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
  /**
   * Whether to show animated stripes
   * @default false
   */
  striped?: boolean;
  /**
   * Custom label to show next to percentage
   */
  label?: string;
  /**
   * Custom height for the progress bar
   */
  height?: number;
  /**
   * Whether the progress bar is in indeterminate state
   * @default false
   */
  indeterminate?: boolean;
  /**
   * Show percentage inside the progress bar
   * @default false
   */
  showPercentageInside?: boolean;
  /**
   * Position of percentage inside the bar
   * @default 'center'
   */
  percentagePosition?: 'left' | 'center' | 'right';
  /**
   * Border radius of the progress bar
   * Can use preset sizes or custom number value
   * @default undefined (no radius)
   */
  radius?: 'sm' | 'md' | 'lg' | 'xl' | number;
  /**
   * Size of circular progress (in pixels) - only for type='circular'
   * @default 80
   */
  circularSize?: number;
  /**
   * Thickness of circular progress - only for type='circular'
   * @default 4
   */
  thickness?: number;
  /**
   * Show percentage in the center of circular progress
   * @default true for circular, false for linear
   */
  showCenterLabel?: boolean;
  /**
   * Custom label to show in center (overrides percentage)
   * Only for type='circular'
   */
  centerLabel?: string;
  /**
   * Show background circle for circular progress
   * @default true
   */
  showBackground?: boolean;
  /**
   * Additional CSS class name
   */
  className?: string;
  /**
   * Additional styling
   */
  sx?: object;
}

const StyledProgressContainer = styled(Box)<{
  size: 'small' | 'medium' | 'large';
  height?: number;
  radius?: 'sm' | 'md' | 'lg' | 'xl' | number;
}>(({ theme, size, height, radius }) => {
  const sizeMap = {
    small: height || 6,
    medium: height || 8,
    large: height || 12
  };

  // Radius mapping
  const getRadius = () => {
    if (radius === undefined) return 0; // Default no radius
    if (typeof radius === 'number') return radius;

    const radiusMap = {
      sm: 4,
      md: 8,
      lg: 12,
      xl: 16
    };

    return radiusMap[radius];
  };

  return {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(1),
    '& .progress-info': {
      display: 'flex',
      alignItems: 'center',
      gap: theme.spacing(1.5),
      marginBottom: theme.spacing(0.5)
    },
    '& .progress-bar-container': {
      position: 'relative',
      width: '100%',
      height: sizeMap[size],
      borderRadius: getRadius(),
      backgroundColor: alpha(theme.palette.grey[300], 0.3),
      overflow: 'hidden'
    }
  };
});

const PercentageInsideBar = styled(Typography, {
  shouldForwardProp: prop => prop !== 'percentagePosition'
})<{
  percentagePosition: 'left' | 'center' | 'right';
}>(({ theme, percentagePosition }) => {
  const positionMap = {
    left: { left: theme.spacing(1), transform: 'translateY(-50%)' },
    center: { left: '50%', transform: 'translate(-50%, -50%)' },
    right: { right: theme.spacing(1), transform: 'translateY(-50%)' }
  };

  return {
    position: 'absolute',
    top: '50%',
    fontSize: '0.75rem',
    fontWeight: 600,
    color: '#ffffff',
    textShadow: '0 1px 2px rgba(0,0,0,0.3)',
    zIndex: 2,
    ...positionMap[percentagePosition]
  };
});

const StyledLinearProgress = styled(LinearProgress, {
  shouldForwardProp: prop => prop !== 'striped' && prop !== 'progressColor' && prop !== 'radius'
})<{
  striped?: boolean;
  progressColor: string;
  radius?: 'sm' | 'md' | 'lg' | 'xl' | number;
}>(({ striped, progressColor, radius }) => {
  // Radius mapping - same as container
  const getRadius = () => {
    if (radius === undefined) return 0; // Default no radius
    if (typeof radius === 'number') return radius;

    const radiusMap = {
      sm: 4,
      md: 8,
      lg: 12,
      xl: 16
    };

    return radiusMap[radius];
  };

  return {
    height: '100%',
    width: '100%',
    backgroundColor: 'transparent',
    borderRadius: getRadius(),
    '& .MuiLinearProgress-bar': {
      backgroundColor: progressColor,
      borderRadius: 'inherit',
      ...(striped && {
        backgroundImage: `linear-gradient(
          45deg,
          rgba(255, 255, 255, 0.15) 25%,
          transparent 25%,
          transparent 50%,
          rgba(255, 255, 255, 0.15) 50%,
          rgba(255, 255, 255, 0.15) 75%,
          transparent 75%,
          transparent
        )`,
        backgroundSize: '20px 20px',
        animation: 'progress-bar-stripes 1s linear infinite'
      })
    },
    '@keyframes progress-bar-stripes': {
      '0%': {
        backgroundPosition: '20px 0'
      },
      '100%': {
        backgroundPosition: '0 0'
      }
    }
  };
});

// Circular Progress Components
const CircularContainer = styled(Box, {
  shouldForwardProp: prop => prop !== 'circularSize'
})<{
  circularSize: number;
}>(({ circularSize }) => ({
  position: 'relative',
  display: 'inline-flex',
  width: circularSize,
  height: circularSize
}));

const StyledCircularProgress = styled(CircularProgress, {
  shouldForwardProp: prop => prop !== 'progressColor' && prop !== 'showBackground'
})<{
  progressColor: string;
  showBackground?: boolean;
}>(({ theme, progressColor, showBackground }) => ({
  color: progressColor,
  position: 'absolute',
  left: 0,
  ...(showBackground && {
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      border: `inherit`,
      borderColor: alpha(theme.palette.grey[300], 0.3),
      zIndex: -1
    }
  })
}));

const CircularProgressBackground = styled(CircularProgress)(({ theme }) => ({
  color: alpha(theme.palette.grey[300], 0.3),
  position: 'absolute',
  left: 0
}));

const CircularLabel = styled(Box)({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center'
});

const formatTime = (seconds: number): string => {
  if (seconds < 60) {
    return `${Math.round(seconds)}s left`;
  } else if (seconds < 3600) {
    return `${Math.round(seconds / 60)}m left`;
  } else {
    return `${Math.round(seconds / 3600)}h left`;
  }
};

const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  type = 'linear',
  showPercentage = true,
  percentageColor = 'primary',
  showEstimatedTime = false,
  estimatedTimeSeconds,
  size = 'medium',
  color = 'primary',
  striped = false,
  label,
  height,
  indeterminate = false,
  showPercentageInside = false,
  percentagePosition = 'center',
  radius,
  circularSize = 80,
  thickness = 4,
  showCenterLabel,
  centerLabel,
  showBackground = true,
  className,
  sx
}) => {
  const normalizedValue = Math.min(Math.max(value, 0), 100);

  const getColorValue = (colorName: string) => {
    const colorMap: Record<string, string> = {
      primary: '#1976d2',
      secondary: '#9c27b0',
      success: '#2e7d32',
      warning: '#ed6c02',
      error: '#d32f2f',
      info: '#0288d1'
    };

    return colorMap[colorName] || colorMap.primary;
  };

  const progressColor = getColorValue(color);

  // Default showCenterLabel based on type
  const shouldShowCenterLabel = showCenterLabel !== undefined ? showCenterLabel : type === 'circular';

  // Circular progress size mapping based on size prop
  const getCircularSizeBySize = () => {
    const sizeMap = {
      small: 60,
      medium: 80,
      large: 120
    };

    return circularSize || sizeMap[size];
  };

  const finalCircularSize = getCircularSizeBySize();

  // Render circular progress
  if (type === 'circular') {
    return (
      <Box className={className} sx={sx}>
        {/* Top info row for circular */}
        {(label || (showEstimatedTime && estimatedTimeSeconds !== undefined)) && (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1 }}>
            {label && (
              <Typography
                variant={size === 'small' ? 'caption' : size === 'large' ? 'body1' : 'body2'}
                color="text.secondary"
                sx={{ fontWeight: 500 }}
              >
                {label}
              </Typography>
            )}

            <Box sx={{ flex: 1 }} />

            {showEstimatedTime && estimatedTimeSeconds !== undefined && (
              <Typography
                variant={size === 'small' ? 'caption' : size === 'large' ? 'body1' : 'body2'}
                color="text.secondary"
                sx={{ fontWeight: 500 }}
              >
                {formatTime(estimatedTimeSeconds)}
              </Typography>
            )}
          </Box>
        )}

        {/* Circular Progress */}
        <CircularContainer circularSize={finalCircularSize}>
          {/* Background circle */}
          {showBackground && (
            <CircularProgressBackground
              variant="determinate"
              value={100}
              size={finalCircularSize}
              thickness={thickness}
            />
          )}

          {/* Progress circle */}
          <StyledCircularProgress
            variant={indeterminate ? 'indeterminate' : 'determinate'}
            value={normalizedValue}
            size={finalCircularSize}
            thickness={thickness}
            progressColor={progressColor}
            showBackground={showBackground}
          />

          {/* Center label */}
          {shouldShowCenterLabel && (
            <CircularLabel>
              {centerLabel ? (
                <Typography
                  variant={size === 'small' ? 'caption' : size === 'large' ? 'h5' : 'body1'}
                  color={percentageColor}
                  sx={{ fontWeight: 600, textAlign: 'center' }}
                >
                  {centerLabel}
                </Typography>
              ) : showPercentage ? (
                <Typography
                  variant={size === 'small' ? 'caption' : size === 'large' ? 'h5' : 'body1'}
                  color={percentageColor}
                  sx={{ fontWeight: 600 }}
                >
                  {Math.round(normalizedValue)}%
                </Typography>
              ) : null}
            </CircularLabel>
          )}
        </CircularContainer>
      </Box>
    );
  }

  // Render linear progress (existing logic)
  return (
    <StyledProgressContainer size={size} height={height} radius={radius} className={className} sx={sx}>
      {/* Top info row */}
      <Box className="progress-info">
        {showPercentage && !showPercentageInside && (
          <Typography
            variant={size === 'small' ? 'caption' : size === 'large' ? 'h6' : 'body2'}
            color={percentageColor}
            sx={{ fontWeight: 600 }}
          >
            {Math.round(normalizedValue)}%
          </Typography>
        )}

        {label && (
          <Typography
            variant={size === 'small' ? 'caption' : size === 'large' ? 'body1' : 'body2'}
            color="text.secondary"
            sx={{ fontWeight: 500 }}
          >
            {label}
          </Typography>
        )}

        {/* Spacer untuk mendorong estimated time ke kanan */}
        <Box sx={{ flex: 1 }} />

        {showEstimatedTime && estimatedTimeSeconds !== undefined && (
          <Typography
            variant={size === 'small' ? 'caption' : size === 'large' ? 'body1' : 'body2'}
            color="text.secondary"
            sx={{ fontWeight: 500 }}
          >
            {formatTime(estimatedTimeSeconds)}
          </Typography>
        )}
      </Box>

      {/* Progress bar */}
      <Box className="progress-bar-container">
        <StyledLinearProgress
          variant={indeterminate ? 'indeterminate' : 'determinate'}
          value={normalizedValue}
          striped={striped}
          progressColor={progressColor}
          radius={radius}
        />

        {/* Percentage inside bar */}
        {showPercentageInside && showPercentage && (
          <PercentageInsideBar percentagePosition={percentagePosition}>
            {Math.round(normalizedValue)}%
          </PercentageInsideBar>
        )}
      </Box>
    </StyledProgressContainer>
  );
};

export default ProgressBar;
