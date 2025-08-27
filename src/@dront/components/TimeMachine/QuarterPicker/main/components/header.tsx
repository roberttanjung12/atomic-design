import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Box, InputBase, MenuItem, Select } from '@mui/material';
import { getYear, subYears } from 'date-fns';

interface HeaderProps {
  date: Date;
  changeYear: (year: number) => void;
}

const Header = ({ date, changeYear }: HeaderProps) => {
  const selectedYear = getYear(date);

  const startYear = getYear(subYears(new Date(), 5));
  const years = Array.from({ length: 10 }, (_, index) => startYear + index + 1);

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
