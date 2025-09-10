import type { ChangeEvent, JSX } from 'react';
import { Checkbox, FormControlLabel, type FormControlLabelProps, type CheckboxProps, styled } from '@mui/material';

interface CheckboxesProps {
  label?: JSX.Element | string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
  disabled?: boolean;
  slotProps?: {
    root?: FormControlLabelProps;
    checkBox?: CheckboxProps;
  };
}

// Custom checkbox
const CustomCheckbox = styled(Checkbox)(({ theme }) => ({
  color: theme.palette.grey[400],
  '&:hover .MuiSvgIcon-root': {
    color: theme.palette.primary.main
  },
  '&.Mui-disabled': {
    color: theme.palette.action.disabled
  }
}));

// Custom label agar ikut terpengaruh disabled
const CustomFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
  '&.Mui-disabled': {
    color: theme.palette.text.disabled
  }
}));

/**
 * Renders a customizable checkbox component with a label.
 *
 * @param {Object} props - The props for the Checkboxes component.
 * @param {string | React.ReactNode} props.label - The label to display next to the checkbox.
 * @param {boolean} props.checked - Whether the checkbox is checked.
 * @param {boolean} [props.disabled] - Whether the checkbox is disabled.
 * @param {(event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void} props.handleChange - Callback fired when the checkbox state changes.
 * @param {Object} [props.slotProps] - Additional props for customizing the root and checkbox elements.
 * @param {Object} [props.slotProps.root] - Props to spread onto the root element.
 * @param {Object} [props.slotProps.checkBox] - Props to spread onto the checkbox element.
 * @returns {JSX.Element} The rendered checkbox component.
 */
const Checkboxes = ({ label, checked, disabled, handleChange, slotProps }: CheckboxesProps) => {
  const { ...rootProps } = slotProps?.root ?? {};
  const { ...checkBoxProps } = slotProps?.checkBox ?? {};

  return (
    <CustomFormControlLabel
      control={<CustomCheckbox checked={checked} onChange={handleChange} disabled={disabled} {...checkBoxProps} />}
      label={label}
      disabled={disabled}
      {...rootProps}
    />
  );
};

export default Checkboxes;
