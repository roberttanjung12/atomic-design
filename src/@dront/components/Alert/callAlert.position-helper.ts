/**
 * Returns CSS style objects based on the given position.
 * @param {'top-right' | 'top-left' | 'top-center' | 'bottom-right' | 'bottom-left' | 'bottom-center'} position - Alert position.
 * @returns {object} Object containing styles for wrapper, container, and close state.
 */
type AlertPosition = 'top-right' | 'top-left' | 'top-center' | 'bottom-right' | 'bottom-left' | 'bottom-center';

type Offset = { left?: string; top?: string; right?: string; bottom?: string };

interface PositionStyles {
  wrapper: React.CSSProperties;
  container: React.CSSProperties;
  close: React.CSSProperties;
}

export const getPositionStyles = (position: AlertPosition, offset?: Offset): PositionStyles => {
  const styles: PositionStyles = {
    wrapper: {
      top: offset?.top ?? '8px',
      right: offset?.right ?? '8px'
    },
    container: {
      transition: 'transform 0.4s cubic-bezier(1,0,0,1)',
      transform: 'translateX(100%)'
    },
    close: {
      transform: 'translateX(110%)'
    }
  };

  switch (position) {
    case 'top-left':
      styles.wrapper = { top: '8px', left: '8px' };

      if (offset?.top) styles.wrapper.top = offset.top;
      if (offset?.left) styles.wrapper.left = offset.left;

      styles.container.transform = 'translateX(-100%)';
      styles.close.transform = 'translateX(-110%)';
      break;
    case 'top-center':
      styles.wrapper = { top: '8px', left: '50%', transform: 'translateX(-50%)' };

      styles.container.transform = 'translateY(-100%)';
      styles.close.transform = 'translateY(-110%)';
      break;
    case 'bottom-right':
      styles.wrapper = { bottom: '8px', right: '8px' };

      if (offset?.bottom) styles.wrapper.bottom = offset.bottom;
      if (offset?.right) styles.wrapper.right = offset.right;

      styles.container.transform = 'translateX(100%)';
      styles.close.transform = 'translateX(110%)';
      break;
    case 'bottom-left':
      styles.wrapper = { bottom: '8px', left: '8px' };

      if (offset?.bottom) styles.wrapper.bottom = offset.bottom;
      if (offset?.left) styles.wrapper.left = offset.left;

      styles.container.transform = 'translateX(-100%)';
      styles.close.transform = 'translateX(-110%)';
      break;
    case 'bottom-center':
      styles.wrapper = { bottom: '8px', left: '50%', transform: 'translateX(-50%)' };

      if (offset?.bottom) styles.wrapper.bottom = offset.bottom;
      if (offset?.left) styles.wrapper.left = offset.left;

      styles.container.transform = 'translateY(100%)';
      styles.close.transform = 'translateY(110%)';
      break;
    case 'top-right':
    default:
      break;
  }

  return styles;
};
