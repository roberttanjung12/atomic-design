import { alpha, Box, styled } from '@mui/material';

const DatePickerStyled = styled(Box)(({ theme: { palette } }) => ({
  background: palette.background.paper,
  borderRadius: '16px',
  '& .calendar': {
    border: 'none'
  },
  '& .react-datepicker': {
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
      background: `${alpha(palette.primary.main, 0.1)} !important`
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
  '& .react-datepicker__day--keyboard-selected:not(.react-datepicker__day--keyboard-selected)': {
    background: `${alpha(palette.primary.main, 0.1)} !important`
  },
  '& .react-datepicker__week': {
    width: '100%'
  },
  '& .react-datepicker__triangle': {
    display: 'none'
  },
  '& .w-full': {
    width: '100%'
  },
  '& .react-datepicker__quarter-text': {
    padding: '8px'
  },
  '& .react-datepicker__quarter-text--selected': {
    background: palette.primary.main
  },
  '& .react-datepicker__quarter-text--in-range': {
    background: `${alpha(palette.primary.main, 0.1)} !important`,
    fontWeight: 'bold',
    color: `${palette.common.black} !important`
  },
  '& .react-datepicker__quarter-text--in-selecting-range': {
    background: `${alpha(palette.primary.main, 0.1)} !important`,
    color: `${palette.common.black} !important`,
    fontWeight: 'bold'
  },
  '& .react-datepicker__quarter-text--range-start, .react-datepicker__quarter-text--range-end': {
    background: `${palette.primary.main} !important`,
    color: `${palette.common.white} !important`
  },
  '& .react-datepicker__month-text': {
    padding: '8px'
  },
  '& .react-datepicker__month-text--selected': {
    background: palette.primary.main
  },
  '& .react-datepicker__month-text--in-range': {
    background: `${alpha(palette.primary.main, 0.1)} !important`,
    fontWeight: 'bold',
    color: `${palette.common.black} !important`
  },
  '& .react-datepicker__month-text--in-selecting-range': {
    background: `${alpha(palette.primary.main, 0.1)} !important`,
    color: `${palette.common.black} !important`,
    fontWeight: 'bold'
  },
  '& .react-datepicker__month-text--range-start, .react-datepicker__month-text--range-end': {
    background: `${palette.primary.main} !important`,
    color: `${palette.common.white} !important`
  },
  '& .react-datepicker__year--container': {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItem: 'center'
  },
  '& .react-datepicker__year-wrapper': {
    maxWidth: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  },
  '& .react-datepicker__year-text': {
    padding: 8
  },
  '& .react-datepicker__year-text--selected': {
    background: palette.primary.main
  },
  '& .react-datepicker__year-text--in-range': {
    background: `${alpha(palette.primary.main, 0.1)} !important`,
    fontWeight: 'bold',
    color: `${palette.common.black} !important`
  },
  '& .react-datepicker__year-text--in-selecting-range': {
    background: `${alpha(palette.primary.main, 0.1)} !important`,
    color: `${palette.common.black} !important`,
    fontWeight: 'bold'
  },
  '& .react-datepicker__year-text--range-start, .react-datepicker__year-text--range-end': {
    background: `${palette.primary.main} !important`,
    color: `${palette.common.white} !important`
  }
}));

export default DatePickerStyled;
