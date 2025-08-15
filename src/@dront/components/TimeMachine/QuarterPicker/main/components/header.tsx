import type { FC } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Box, InputBase, MenuItem, Select } from '@mui/material';
import moment from 'moment';

interface HeaderProps {
  date: Date;
  changeYear: (year: number) => void;
}

const Header: FC<HeaderProps> = ({ date, changeYear }) => {
  const selectedYear = moment(date).year();

  const years = Array.from({ length: 10 }).map((_, index) => moment().subtract(5, 'years').year() + index + 1);

  return (
    <Box display="flex" ml={1}>
      <Select
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
    </Box>
  );
};

export default Header;
