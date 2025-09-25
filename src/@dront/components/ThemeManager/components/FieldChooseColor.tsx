import { useState, type MouseEvent, type ReactNode } from 'react';
import { alpha, Box, Button, ListItemButton, ListItemText, Popover, TextField } from '@mui/material';
import { HexColorPicker } from 'react-colorful';

/**
 * @interface FieldChooseColorFieldProps
 * @description Props for the FieldChooseColorField component.
 */
interface FieldChooseColorFieldProps {
  /**
   * @property
   * @description Function to be called when the color picker should be closed.
   */
  onClose: () => void;
  /**
   * @property
   * @description The initial color value in hex format (e.g., '#RRGGBB').
   */
  defaultValue: string;
  /**
   * @property
   * @description Callback function that is executed when the user applies a new color.
   * @param {string} color - The selected hex color string.
   */
  onApply: (color: string) => void;
}

/**
 * A component that provides a user interface for selecting a custom hex color.
 * It includes a color picker, a text field for the hex value, and Apply/Cancel buttons.
 * @component
 * @param {FieldChooseColorFieldProps} props - The props for the component.
 * @returns {React.ReactElement} The rendered color picker field.
 */
const FieldChooseColorField: React.FC<FieldChooseColorFieldProps> = ({
  onClose,
  defaultValue,
  onApply
}): Readonly<ReactNode> => {
  const [hex, setHex] = useState<string>(defaultValue);

  const isValidHex = /^#[0-9A-F]{6}$/i.test(hex);

  /**
   * Handles the click event for the "Apply" button.
   * Calls the onApply callback with the current hex value and then closes the picker.
   */
  const handleApply = () => {
    onApply(hex);
    onClose();
  };

  return (
    <Box sx={{ width: '260px' }}>
      <Box sx={{ p: 1, fontWeight: 'bold' }}>Custom Color</Box>

      <Box>
        <Box
          sx={{
            '& .react-colorful': {
              width: '100% !important'
            },
            '& .react-colorful__saturation': {
              borderRadius: '0 !important'
            },
            '& .react-colorful__hue': {
              borderRadius: '0 !important'
            },
            mb: 2
          }}
        >
          <HexColorPicker color={hex} onChange={setHex} />
        </Box>

        <Box px={1}>
          <TextField
            fullWidth
            error={!isValidHex}
            id="hex-field"
            size="small"
            value={hex}
            onChange={e => setHex(e.target.value)}
          />
        </Box>
      </Box>

      <Box
        sx={{
          px: 1,
          my: 2,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 2
        }}
      >
        <Button id="cancel-apply-color-button" variant="outlined" onClick={onClose}>
          Cancel
        </Button>
        <Button disabled={!isValidHex} id="apply-color-button" variant="contained" onClick={handleApply}>
          Apply
        </Button>
      </Box>
    </Box>
  );
};

/**
 * @interface FieldChooseColorProps
 * @description Props for the FieldChooseColor component.
 */
interface FieldChooseColorProps {
  /**
   * @property
   * @description The label displayed next to the color swatch.
   */
  label: string;
  /**
   * @property
   * @description The initial color value in hex format (e.g., '#RRGGBB').
   */
  defaultValue: string;
  /**
   * @property
   * @description Callback function that is executed when the user applies a new color from the popover.
   * @param {string} color - The selected hex color string.
   */
  onApply: (color: string) => void;
  /**
   * @property
   * @description Any other props to be spread to the underlying MUI ListItemButton component.
   */
  [key: string]: any;
}

/**
 * A component that displays a color option with a label and a color swatch.
 * Clicking on it opens a popover with a color picker to choose a new color.
 * @component
 * @param {FieldChooseColorProps} props - The props for the component.
 * @returns {React.ReactElement} The rendered color chooser component.
 */
const FieldChooseColor = ({ label, defaultValue, onApply, ...rest }: FieldChooseColorProps): Readonly<ReactNode> => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  /**
   * Opens the color picker popover.
   * @param {MouseEvent<HTMLElement>} event - The click event.
   */
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  /**
   * Closes the color picker popover.
   */
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <ListItemButton
        disableGutters
        disableRipple
        sx={({ palette }) => ({
          py: '0 !important',
          backgroundColor: open ? alpha(palette.primary.light, 0.1) : 'initial'
        })}
        onClick={handleClick}
        {...rest}
      >
        <ListItemText primary={label} sx={{ '& .MuiTypography-root': { fontWeight: 'bold' } }} />

        <Box
          sx={{
            background: defaultValue,
            borderRadius: 1,
            height: 18,
            width: 18,
            p: 1,
            border: ({ palette }) => `1px solid ${palette.grey[400]}`
          }}
        />
      </ListItemButton>

      <Popover
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={open}
        sx={{ marginLeft: '24px' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        onClose={handleClose}
      >
        <FieldChooseColorField defaultValue={defaultValue} onApply={onApply} onClose={handleClose} />
      </Popover>
    </>
  );
};

export default FieldChooseColor;
