import type { ChangeEvent, ReactNode } from 'react';
import { FormControlLabel, type FormControlLabelProps, styled, Switch, type SwitchProps } from '@mui/material';

interface CustomSwitchProps extends SwitchProps {
  onOff?: boolean;
}

/**
 * A styled custom switch component based on MUI's Switch.
 *
 * @param props - The props for the custom switch component.
 * @param props.theme - The theme object provided by MUI's ThemeProvider.
 * @param props.color - Optional color key from the theme palette to customize the switch color.
 * @param props.onOff - Optional boolean to control the switch's on/off state styling.
 *
 * The component customizes the appearance of the switch, including track and thumb colors,
 * border, and opacity, based on the `color` and `onOff` props.
 */
const CustomSwitch = styled(Switch, {
  shouldForwardProp: prop => prop !== 'onOff'
})<CustomSwitchProps>(({ theme, color, onOff }: { theme: any; color?: string; onOff?: boolean }) => {
  const colorData = color ? theme.palette[color].main : theme.palette.primary.main;

  return {
    padding: 8,
    '& .MuiSwitch-switchBase': {
      '&.Mui-checked': {
        '& + .MuiSwitch-track': {
          backgroundColor: onOff ? theme.palette.success.main : colorData,
          opacity: 1,
          border: `1px solid ${onOff ? theme.palette.success.main : colorData}`
        }
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.4
      }
    },
    '& .MuiSwitch-track': {
      backgroundColor: onOff ? theme.palette.error.main : theme.palette.action.disabled,
      opacity: onOff ? 1 : 0.5,
      border: `1px solid ${onOff ? theme.palette.error.main : colorData}`,
      borderRadius: 22 / 2
    },
    '& .MuiSwitch-thumb': {
      color: 'white',
      boxShadow: 'none',
      width: 16,
      height: 16,
      margin: 2
    }
  };
});

interface ToggleProps {
  label?: ReactNode | string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
  onOff?: boolean;
  disabled?: boolean;
  slotProps?: {
    root?: FormControlLabelProps;
    switch?: SwitchProps;
  };
}
const Toogle = ({ label, handleChange, checked, disabled, slotProps, onOff }: ToggleProps) => {
  const { ...rootProps } = slotProps?.root ?? {};
  const { ...switchProps } = slotProps?.switch ?? {};

  const labelOnOff = checked ? 'Active' : 'Inactive';
  const labelData = onOff ? labelOnOff : label;

  return (
    <FormControlLabel
      control={<CustomSwitch checked={checked} onChange={handleChange} onOff={onOff} {...switchProps} />}
      label={labelData}
      disabled={disabled}
      {...rootProps}
    />
  );
};

export default Toogle;
