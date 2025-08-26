import InfoIcon from '@mui/icons-material/Info';
import {
  Box,
  Tooltip as MUITooltip,
  styled,
  tooltipClasses,
  type TooltipProps as MUITooltipProps
} from '@mui/material';
import TooltipContent from './Content';
import type { TooltipProps } from './types';

const ArrowStyledTooltip = styled(({ className, ...props }: MUITooltipProps) => (
  <MUITooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.white,
    '&::before': {
      backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : theme.palette.common.white,
      border: `1px solid ${theme.palette.grey[300]}`
    }
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : theme.palette.common.white,
    border: `1px solid ${theme.palette.grey[300]}`,
    color: theme.palette.text.primary
  }
}));

/**
 * Tooltip component that displays additional information when hovered or focused.
 *
 * Renders a tooltip with customizable content, title, icon, and placement.
 * If `children` are provided, the tooltip wraps them; otherwise, it displays an icon.
 *
 * @param icon - Optional custom icon to display when no children are provided.
 * @param placement - Position of the tooltip relative to the target element.
 * @param title - Title text displayed at the top of the tooltip.
 * @param content - Main content of the tooltip.
 * @param children - Optional React node to wrap with the tooltip.
 *
 * @example
 * ```tsx
 * <Tooltip
 *   title="Info"
 *   content="This is some helpful information."
 *   placement="top"
 * >
 *   <Button>Hover me</Button>
 * </Tooltip>
 * ```
 */
const Tooltip = ({ icon, placement, title, content, children }: TooltipProps) => {
  return (
    <ArrowStyledTooltip title={<TooltipContent title={title} content={content} />} placement={placement}>
      {children ? (
        <Box width="fit-content">{children}</Box>
      ) : (
        <Box component="span" sx={{ verticalAlign: 'text-bottom', display: 'inline-flex', cursor: 'pointer' }}>
          {icon ? icon : <InfoIcon fontSize="small" sx={{ color: theme => theme.palette.text.disabled }} />}
        </Box>
      )}
    </ArrowStyledTooltip>
  );
};

export default Tooltip;
