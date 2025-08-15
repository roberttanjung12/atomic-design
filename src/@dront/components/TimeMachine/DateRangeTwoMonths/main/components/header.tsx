import type { FC } from 'react';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { IconButton } from '@mui/material';
import moment from 'moment';
import type { Locale } from '../types/locale';

interface HeaderProps {
  monthDate: Date;
  customHeaderCount: number;
  changeYear: (year: number) => void;
  changeMonth: (month: number) => void;
  decreaseMonth: () => void;
  increaseMonth: () => void;
  prevMonthButtonDisabled: boolean;
  nextMonthButtonDisabled: boolean;
  locale: Locale;
}

const Header: FC<HeaderProps> = ({
  monthDate,
  customHeaderCount,
  decreaseMonth,
  increaseMonth,
  prevMonthButtonDisabled,
  nextMonthButtonDisabled,
  locale
}) => {
  return (
    <div style={{ margin: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <IconButton
        disabled={prevMonthButtonDisabled}
        size="small"
        onClick={decreaseMonth}
        sx={{
          visibility: customHeaderCount === 0 ? 'visible' : 'hidden'
        }}
      >
        <ArrowLeftIcon fontSize="small" />
      </IconButton>

      <span className="react-datepicker__current-month">{moment(monthDate).locale(locale).format('MMM YYYY')}</span>

      <IconButton
        disabled={nextMonthButtonDisabled}
        onClick={increaseMonth}
        style={{
          visibility: customHeaderCount === 1 ? 'visible' : 'hidden'
        }}
      >
        <ArrowRightIcon fontSize="small" />
      </IconButton>
    </div>
  );
};

export default Header;
