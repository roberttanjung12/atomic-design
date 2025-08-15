import { Box, styled } from '@mui/material';

const DatePickerStyled = styled(Box)(({ theme: { palette } }) => ({
  background: palette.background.paper,
  borderRadius: '16px',
  '& .react-datepicker': {
    width: '100% !important',
    border: 'none !important',
    background: palette.background.paper
  },
  '& .react-datepicker__header': {
    background: 'none !important',
    border: 'none !important',
    padding: 0
  },
  '& .react-datepicker__quarter-text': {
    padding: '8px',
    margin: '16px 0'
  },
  '& .react-datepicker__quarter-text--selected': {
    background: `${palette.primary.main} !important`,
    color: `${palette.common.white} !important`
  },
  '& .w-full': {
    width: '100%'
  }
}));

export default DatePickerStyled;
