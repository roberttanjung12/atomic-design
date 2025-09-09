import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

/**
 * Props for the `CodeChip` component.
 */
interface CodeChipProps extends React.PropsWithChildren {
  /**
   * Chip variant type.
   *
   * @default 'primary'
   */
  variant?: 'primary' | 'secondary';
}

/**
 * Styled component for rendering inline code-like chips.
 * Provides different background colors based on the variant.
 */
const CodeChip = styled(props => <Typography {...props} component="code" />, {
  shouldForwardProp: prop => prop !== 'variant'
})<CodeChipProps>(({ theme, variant = 'primary' }) => {
  const backgroundColor = {
    primary: theme.palette.primary.light,
    secondary: theme.palette.secondary.light
  };
  const textColor = {
    primary: theme.palette.mode === 'light' ? theme.palette.grey[600] : theme.palette.grey[100],
    secondary: theme.palette.grey[600]
  };

  return {
    display: 'inline-block',
    fontFamily: 'monospace',
    fontSize: theme.typography.caption.fontSize,
    background: backgroundColor[variant],
    color: textColor[variant],
    borderRadius: theme.shape.borderRadius,
    padding: '2px 6px'
  };
});

export default CodeChip;
