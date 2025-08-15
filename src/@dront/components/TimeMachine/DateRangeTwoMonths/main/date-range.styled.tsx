import { alpha, Box, styled } from '@mui/material';

const DatePickerStyled = styled(Box)(({ theme: { palette } }) => ({
  background: palette.background.paper,
  borderRadius: '16px',
  '& .calendar': {
    border: 'none'
  },
  '& .react-datepicker': {
    display: 'flex !important',
    gap: 8,
    width: '100% !important',
    border: 'none !important',
    background: palette.background.paper
  },
  '& .react-datepicker__day': {
    margin: '2px 0 !important',
    borderRadius: '0 !important',
    width: '14.27% !important',
    color: palette.common.black,
    '&:hover': {
      background: alpha(palette.primary.main, 0.1)
    }
  },
  '& .react-datepicker__day--range-start': {
    background: `${palette.primary.main} !important`,
    borderTopLeftRadius: '8px !important',
    borderBottomLeftRadius: '8px !important'
  },
  '& .react-datepicker__day--range-end': {
    background: `${palette.primary.main} !important`,
    color: `${palette.common.white} !important`,
    borderTopRightRadius: '8px !important',
    borderBottomRightRadius: '8px !important'
  },
  '& .react-datepicker__day--range-start, .react-datepicker__day--range-end': {
    color: `${palette.common.white} !important`
  },
  '& .react-datepicker__day--disabled': {
    color: palette.grey[400]
  },
  '& .react-datepicker__day--selected': {
    backgroundColor: `${palette.primary.main} !important`,
    color: `${palette.common.white} !important`,
    '&:hover': {
      background: `${alpha(palette.primary.main, 0.4)} !important`
    }
  },
  '& .react-datepicker__day--in-range:not(.react-datepicker__day--range-start):not(.react-datepicker__day--range-end)':
    {
      background: `${alpha(palette.primary.main, 0.1)} !important`,
      fontWeight: 'bold !important',
      color: `${palette.common.black} !important`,
      '&:hover': {
        background: `${alpha(palette.primary.main, 0.4)} !important`
      }
    },
  '& .react-datepicker__day--in-selecting-range': {
    background: `${alpha(palette.primary.main, 0.1)} !important`,
    color: `${palette.common.black} !important`,
    fontWeight: 'bold !important'
  },
  '& .react-datepicker__day--selecting-range-start': {
    background: `${palette.primary.main} !important`,
    fontWeight: 'bold !important'
  },
  '& .react-datepicker__day-names': {
    border: 'none !important',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around'
  },
  '& .react-datepicker__day-name': {
    color: `${palette.common.black} !important`
  },
  '& .react-datepicker__header': {
    background: 'none !important',
    border: 'none !important',
    padding: 0
  },
  '& .react-datepicker__month': {
    width: '97%'
  },
  '& .react-datepicker__month-container': {
    paddingBottom: '16px',
    border: 'none',
    width: '100%'
  },
  '& .react-datepicker__header--custom': {
    border: 'none'
  },
  '& .react-datepicker__day--keyboard-selected': {
    background: alpha(palette.primary.main, 0.1)
  },
  '& .react-datepicker__week': {
    width: '100%'
  },
  '& .react-datepicker__triangle': {
    display: 'none'
  },
  '& .w-full': {
    width: '100%'
  }
}));

export default DatePickerStyled;
