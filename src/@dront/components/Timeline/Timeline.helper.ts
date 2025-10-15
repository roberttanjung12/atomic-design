export const getStyleDivider = (color: string) => {
  return {
    background: 'none',
    borderLeft: `2px dashed ${color}`,
    flexGrow: 1
  };
};
