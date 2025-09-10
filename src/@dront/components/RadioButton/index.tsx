import type { ChangeEvent, JSX } from 'react';
import {
  FormControlLabel,
  type FormControlLabelProps,
  Radio,
  RadioGroup,
  type RadioProps,
  styled,
  type RadioGroupProps
} from '@mui/material';

interface RadioOption {
  label: string | JSX.Element;
  value: string;
  disabled?: boolean;
}

interface RadioButtonProps {
  options: RadioOption[];
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string | number;
  slotProps?: {
    root?: RadioGroupProps;
    form?: FormControlLabelProps;
    radio?: RadioProps;
  };
}

// Custom radio
const CustomRadio = styled(Radio)(({ theme }) => ({
  color: theme.palette.grey[400],
  '&:hover .MuiSvgIcon-root': {
    color: theme.palette.primary.main
  },
  '&.Mui-disabled': {
    color: theme.palette.action.disabled
  }
}));

/**
 * Renders a customizable radio component with a label.
 *
 * @param {Object} props - The props for the RadioButton component.
 * @param {string | React.ReactNode} props.label - The label to display next to the radio.
 * @param {boolean} props.value - Whether the radio is value.
 * @param {boolean} [props.disabled] - Whether the radio is disabled.
 * @param {(event: React.ChangeEvent<HTMLInputElement>, value: boolean) => void} props.handleChange - Callback fired when the radio state changes.
 * @param {Object} [props.slotProps] - Additional props for customizing the root and radio elements.
 * @param {Object} [props.slotProps.root] - Props to spread onto the root element.
 * @param {Object} [props.slotProps.radio] - Props to spread onto the radio element.
 * @returns {JSX.Element} The rendered radio component.
 */
const RadioButton = ({ options, value, handleChange, slotProps }: RadioButtonProps) => {
  const { ...radioGroupProps } = slotProps?.root ?? {};
  const { ...formControlProps } = slotProps?.form ?? {};
  const { ...radioProps } = slotProps?.radio ?? {};

  return (
    <RadioGroup
      aria-labelledby="demo-controlled-radio-buttons-group"
      name="controlled-radio-buttons-group"
      value={value}
      onChange={handleChange}
      {...radioGroupProps}
    >
      {options.map(option => (
        <FormControlLabel
          key={option.value}
          value={option.value}
          control={<CustomRadio {...radioProps} />}
          label={option.label}
          disabled={option.disabled}
          {...formControlProps}
        />
      ))}
    </RadioGroup>
  );
};

export default RadioButton;
