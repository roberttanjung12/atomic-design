import type { FC } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { IconButton, InputBase, MenuItem, Select } from '@mui/material';
import moment from 'moment';
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
  const selectedYear = moment(date).year();

  const months = Array.from({ length: 12 }, (_, index) => moment().locale(locale).month(index).format('MMMM'));
  const years = Array.from({ length: 10 }).map((_, index) => moment().subtract(5, 'years').year() + index + 1);

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
        value={months[moment(date).month()]}
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
