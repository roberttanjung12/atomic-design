import { alpha, Box, styled } from '@mui/material';

const DatePickerStyled = styled(Box)(({ theme: { palette } }) => ({
  background: palette.background.paper,
  borderRadius: '16px',
  '& .calendar': {
    border: 'none'
  },
  '& .react-datepicker': {
    width: '100% !important',
    border: 'none !important'
  },
  '& .react-datepicker__day': {
    margin: '2px 0',
    borderRadius: '0',
    width: '13.1% !important',
    color: palette.common.black,
    '&:hover': {
      background: alpha(palette.primary.main, 0.1)
    }
  },
  '& .react-datepicker__day--range-start': {
    borderTopLeftRadius: '8px',
    borderBottomLeftRadius: '8px'
  },
  '& .react-datepicker__day--range-end': {
    background: `${palette.primary.main} !important`,
    color: `${palette.common.white} !important`,
    borderTopRightRadius: '8px',
    borderBottomRightRadius: '8px'
  },
  '& .react-datepicker__day--range-start, .react-datepicker__day--range-end': {
    color: `${palette.common.white} !important`
  },
  '& .react-datepicker__day--disabled': {
    color: palette.grey[400]
  },
  '& .react-datepicker__day--selected': {
    background: `${palette.primary.main} !important`,
    color: `${palette.common.white} !important`,
    '&:hover': {
      background: `${alpha(palette.primary.main, 0.4)} !important`
    }
  },
  '& .react-datepicker__day--in-range': {
    background: alpha(palette.primary.main, 0.1),
    fontWeight: 'bold',
    '&:hover': {
      background: `${alpha(palette.primary.main, 0.4)} !important`
    }
  },
  '& .react-datepicker__day--in-selecting-range': {
    background: `${alpha(palette.primary.main, 0.1)} !important`,
    color: palette.common.black,
    fontWeight: 'bold'
  },
  '& .react-datepicker__day--selecting-range-start': {
    background: `${palette.primary.main} !important`,
    fontWeight: 'bold'
  },
  '& .react-datepicker__day-names': {
    border: 'none !important',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around'
  },
  '& .react-datepicker__day-name': {
    color: palette.common.black
  },
  '& .react-datepicker__header': {
    background: 'white !important',
    border: 'none !important',
    width: '100%'
  },
  '& .react-datepicker__month': {
    width: '98.5%'
  },
  '& .react-datepicker__month-container': {
    width: '100%'
  },
  '& .react-datepicker__header--custom': {
    border: 'none'
  },
  '& .react-datepicker__day--keyboard-selected': {
    background: alpha(palette.primary.main, 0.1)
  },
  '& .react-datepicker__week': {
    width: '98.5% !important'
  },
  '& .react-datepicker__triangle': {
    display: 'none'
  },
  '& .w-full': {
    width: '100%'
  }
}));

export default DatePickerStyled;
