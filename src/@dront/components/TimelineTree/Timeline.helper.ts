/**
 * Generates style configuration for a timeline divider element.
 *
 * @param color - The color value to apply to the divider border.
 * @returns An object containing CSS-in-JS style properties for the divider.
 *
 * @example
 * ```ts
 * const dividerStyle = getStyleDivider('#2196F3');
 * // => { background: 'none', borderLeft: '2px dashed #2196F3', flexGrow: 1 }
 * ```
 */
export const getStyleDivider = (color: string) => {
  return {
    background: 'none',
    borderLeft: `2px dashed ${color}`,
    flexGrow: 1
  };
};
