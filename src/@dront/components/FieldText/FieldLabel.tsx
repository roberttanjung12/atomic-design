'use client';

import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const FieldLabel = styled((props: any) => (
  <Typography variant="subtitle1" fontWeight={600} {...props} component="label" htmlFor={props.htmlFor} />
))(() => ({
  display: 'block'
}));

export default FieldLabel;
