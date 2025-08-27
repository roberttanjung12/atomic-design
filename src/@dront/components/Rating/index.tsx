import { useState } from 'react';
import StarIcon from '@mui/icons-material/Star';
import { Box, IconButton, Typography } from '@mui/material';

interface RatingProps {
  disabled?: boolean;
  labels?: string[];
  length?: number;
  defaultValue?: number;
  value?: number;
  onChange?: (value: number) => void;
}

/**
 * Rating component for displaying and selecting a rating value, typically represented by stars.
 *
 * @remarks
 * - Supports both controlled and uncontrolled usage via the `value` and `defaultValue` props.
 * - Can display custom labels for each rating item.
 * - Handles mouse interactions for hover and selection.
 * - Disables interaction when `disabled` is set to true.
 *
 * @param props - The props for the Rating component.
 * @param props.disabled - If true, disables all interactions with the rating items.
 * @param props.labels - Optional array of labels to display below each rating item.
 * @param props.length - Number of rating items to display (used if `labels` is not provided).
 * @param props.defaultValue - Initial value for uncontrolled usage.
 * @param props.value - Controlled value for the rating.
 * @param props.onChange - Callback fired when the rating value changes.
 *
 * @example
 * ```tsx
 * <Rating length={5} defaultValue={3} onChange={handleChange} />
 * <Rating labels={['Very Bad', 'Bad', 'Average', 'Good', 'Excellent']} value={4} />
 * ```
 */
const Rating = ({ disabled, labels, value, onChange, length = 0, defaultValue = 0 }: RatingProps) => {
  const [hover, setHover] = useState<number | null>(null);
  const [internalValue, setInternalValue] = useState(defaultValue);

  const isShowLabel = Array.isArray(labels) && labels.length > 0;
  const ratingArr = isShowLabel ? labels! : Array.from({ length }, (_, i) => i + 1);
  const currentValue = value ?? internalValue;

  const handleMouseEnter = (index: number) => setHover(index);
  const handleMouseLeave = () => setHover(null);
  const handleClick = (index: number) => {
    if (value === undefined) setInternalValue(index + 1);
    if (onChange) onChange(index + 1);
  };

  return (
    <Box display="flex">
      {ratingArr.map((label, idx) => {
        const isActive = idx <= (hover !== null ? hover : currentValue - 1);

        return (
          <Box key={idx} display="flex" flexDirection="column" alignItems="center">
            <IconButton
              disabled={disabled}
              onClick={() => handleClick(idx)}
              onMouseEnter={() => handleMouseEnter(idx)}
              onMouseLeave={handleMouseLeave}
              sx={{
                color: theme => theme.palette.warning.main,
                transition: 'color 0.2s ease-in-out',
                '&:hover': {
                  color: theme => theme.palette.warning.main,
                  backgroundColor: 'transparent'
                }
              }}
            >
              <StarIcon fontSize="large" color={isActive ? 'warning' : 'disabled'} />
            </IconButton>
            {isShowLabel && (
              <Typography variant="body2" color="textSecondary">
                {label}
              </Typography>
            )}
          </Box>
        );
      })}
    </Box>
  );
};

export default Rating;
