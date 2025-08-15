import type { FC } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { IconButton, InputBase, MenuItem, Select } from '@mui/material';
import { getYear, getMonth, setMonth, subYears, format } from 'date-fns';
import type { Locale } from '../types/locale';

interface HeaderProps {
  date: Date;
  changeYear: (year: number) => void;
  changeMonth: (month: number) => void;
  decreaseMonth: () => void;
  increaseMonth: () => void;
  prevMonthButtonDisabled: boolean;
  nextMonthButtonDisabled: boolean;
  locale: Locale;
}

const Header: FC<HeaderProps> = ({
  date,
  changeYear,
  changeMonth,
  decreaseMonth,
  increaseMonth,
  prevMonthButtonDisabled,
  nextMonthButtonDisabled,
  locale
}) => {
  const selectedYear = getYear(date);

  // Generate month names using date-fns
  const months = Array.from({ length: 12 }, (_, index) =>
    format(setMonth(new Date(2000, 0, 1), index), 'LLLL', { locale })
  );

  // Generate years: 5 years before to 4 years after current year
  const startYear = getYear(subYears(date, 5));
  const years = Array.from({ length: 10 }, (_, index) => startYear + index + 1);

  return (
    <div style={{ margin: 10, display: 'flex' }}>
      <IconButton disabled={prevMonthButtonDisabled} size="small" onClick={decreaseMonth}>
        <ArrowLeftIcon fontSize="small" />
      </IconButton>

      <Select
        fullWidth
        IconComponent={ArrowDropDownIcon}
        input={<InputBase />}
        size="small"
        sx={{
          fontWeight: 'medium',
          '& .MuiSelect-select': {
            paddingBottom: '1px'
          }
        }}
        value={selectedYear}
        onChange={({ target: { value } }) => changeYear(value as number)}
      >
        {years.map(option => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>

      <Select
        fullWidth
        IconComponent={ArrowDropDownIcon}
        input={<InputBase sx={{ padding: '0 !important' }} />}
        size="small"
        sx={{
          ml: 2,
          fontWeight: 'medium',
          '& .MuiSelect-select': {
            paddingBottom: '1px'
          }
        }}
        value={months[getMonth(date)]}
        onChange={({ target: { value } }) => changeMonth(months.indexOf(value))}
      >
        {months.map(option => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>

      <IconButton disabled={nextMonthButtonDisabled} onClick={increaseMonth}>
        <ArrowRightIcon fontSize="small" />
      </IconButton>
    </div>
  );
};

export default Header;
