import type { ChangeEvent, ReactNode } from 'react';
import { FormControlLabel, type FormControlLabelProps, styled, Switch, type SwitchProps } from '@mui/material';

interface CustomSwitchProps extends SwitchProps {
  activeColor?: string;
  inactiveColor?: string;
  checked?: boolean;
}

/**
 * A styled custom switch component based on MUI's Switch.
 */
const CustomSwitch = styled(Switch, {
  shouldForwardProp: prop => prop !== 'activeColor' && prop !== 'inactiveColor'
})<CustomSwitchProps>(({ theme, activeColor, inactiveColor, checked }) => {
  const activeCol = activeColor ?? theme.palette.primary.main;
  const inactiveCol = inactiveColor ?? theme.palette.action.disabled;
  const inactiveBorder = inactiveColor ?? theme.palette.primary.main;

  return {
    padding: 8,
    '& .MuiSwitch-switchBase': {
      '&.Mui-checked': {
        '& + .MuiSwitch-track': {
          backgroundColor: activeCol,
          opacity: 1,
          border: `1px solid ${activeCol}`
        }
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.4
      }
    },
    '& .MuiSwitch-track': {
      backgroundColor: checked ? activeCol : inactiveCol,
      opacity: 1,
      border: `1px solid ${checked ? activeCol : inactiveBorder}`,
      borderRadius: 22 / 2,
      transition: theme.transitions.create(['background-color', 'border'], {
        duration: theme.transitions.duration.short
      })
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
  label?: string | ReactNode;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
  disabled?: boolean;
  activeLabel?: string | ReactNode;
  inactiveLabel?: string | ReactNode;
  activeColor?: string;
  inactiveColor?: string;
  slotProps?: {
    root?: Partial<FormControlLabelProps>;
    switch?: SwitchProps;
  };
}

const Toggle = ({
  label,
  onChange,
  checked,
  disabled,
  slotProps,
  activeLabel,
  inactiveLabel,
  activeColor,
  inactiveColor
}: ToggleProps) => {
  const { ...rootProps } = slotProps?.root ?? {};
  const { ...switchProps } = slotProps?.switch ?? {};

  // Tentukan label dinamis
  let labelData: ReactNode = label;

  if (activeLabel || inactiveLabel) {
    labelData = checked ? (activeLabel ?? label) : (inactiveLabel ?? label);
  }

  return (
    <FormControlLabel
      control={
        <CustomSwitch
          checked={checked}
          onChange={onChange}
          activeColor={activeColor}
          inactiveColor={inactiveColor}
          {...switchProps}
        />
      }
      label={labelData}
      disabled={disabled}
      {...rootProps}
    />
  );
};

export default Toggle;
