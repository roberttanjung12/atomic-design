/**
 * Options for the thousand utility function
 */
export interface ThousandOptions {
  /**
   * Rounding mode
   * - 'up': Round up (ceiling)
   * - 'down': Round down (floor)
   * - 'normal': Normal rounding (default)
   */
  roundingMode?: 'up' | 'down' | 'normal';

  /**
   * Separator for thousands
   * @default ','
   */
  separator?: string;

  /**
   * Limit the number of decimal places
   * @default 2
   */
  decimalLimit?: number;

  /**
   * Redenomination factor (divide the number by this value)
   * @default 1
   */
  redenomination?: number;

  /**
   * Return type
   * - 'string': Return as formatted string (default)
   * - 'number': Return as number without formatting
   */
  returnType?: 'string' | 'number';
}

/**
 * Parse a formatted string number to a plain number
 * Removes common thousand separators (comma, dot, space, underscore)
 *
 * @param value - The string to parse
 * @returns Parsed number
 *
 * @example
 * ```typescript
 * parseFormattedNumber('1.000.000'); // 1000000
 * parseFormattedNumber('1,000,000.50'); // 1000000.50
 * parseFormattedNumber('1 000 000'); // 1000000
 * ```
 */
const parseFormattedNumber = (value: string): number => {
  // Remove common thousand separators: comma, dot (except the last one), space, underscore
  // Keep the last dot or comma as decimal separator

  // Find the last occurrence of dot or comma (potential decimal separator)
  const lastDotIndex = value.lastIndexOf('.');
  const lastCommaIndex = value.lastIndexOf(',');

  // Count occurrences to determine if it's a thousand separator or decimal separator
  const dotCount = (value.match(/\./g) || []).length;
  const commaCount = (value.match(/,/g) || []).length;

  let cleanedValue = value;

  // If there are multiple dots, they are thousand separators
  // If there's a comma after the last dot, the comma is the decimal separator
  if (dotCount > 1 || (lastCommaIndex > lastDotIndex && lastDotIndex !== -1)) {
    // Dots are thousand separators, comma is decimal separator
    cleanedValue = value
      .replace(/\./g, '')
      .replace(/[,\s_]/g, ',')
      .replace(',', '.');
  } else if (commaCount > 1 || (lastDotIndex > lastCommaIndex && lastCommaIndex !== -1)) {
    // Commas are thousand separators, dot is decimal separator
    cleanedValue = value.replace(/,/g, '').replace(/[\s_]/g, '');
  } else if (lastDotIndex > lastCommaIndex) {
    // Single dot, it's a decimal separator
    cleanedValue = value.replace(/[,\s_]/g, '');
  } else if (lastCommaIndex > lastDotIndex) {
    // Single comma, it's a decimal separator
    cleanedValue = value.replace(/[.\s_]/g, '').replace(',', '.');
  } else {
    // No decimal separator found, remove all separators
    cleanedValue = value.replace(/[,.\s_]/g, '');
  }

  const parsed = parseFloat(cleanedValue);

  if (isNaN(parsed)) {
    throw new Error(`Cannot parse "${value}" to a number`);
  }

  return parsed;
};

/**
 * Format a number with thousand separators and various options
 *
 * @param value - The number or formatted string to format
 * @param options - Formatting options
 * @returns Formatted string or number based on returnType
 *
 * @example
 * ```typescript
 * // Basic usage
 * thousand(1234567.89); // "1,234,567.89"
 * thousand('1.000.000'); // "1,000,000.00"
 *
 * // Parse string and return number
 * thousand('1.000.000', { returnType: 'number' }); // 1000000
 *
 * // Round up
 * thousand(1234.567, { roundingMode: 'up' }); // "1,235"
 *
 * // Round down
 * thousand(1234.567, { roundingMode: 'down' }); // "1,234"
 *
 * // Custom separator
 * thousand(1234567.89, { separator: '.' }); // "1.234.567,89"
 *
 * // Limit decimals
 * thousand(1234.56789, { decimalLimit: 2 }); // "1,234.57"
 *
 * // Redenomination (divide by 1000)
 * thousand(1234567, { redenomination: 1000 }); // "1,234.57"
 *
 * // Return as number
 * thousand(1234.567, { returnType: 'number' }); // 1234.57
 *
 * // Combined options
 * thousand(1234567.89, {
 *   roundingMode: 'up',
 *   separator: '.',
 *   decimalLimit: 0,
 *   redenomination: 1000
 * }); // "1.235"
 * ```
 */
export const thousand = (value: number | string, options: ThousandOptions = {}): string | number => {
  const {
    roundingMode = 'normal',
    separator = ',',
    decimalLimit = 2,
    redenomination = 1,
    returnType = 'string'
  } = options;

  const numericValue = typeof value === 'string' ? parseFormattedNumber(value) : value;

  let processedValue = numericValue / redenomination;

  const multiplier = Math.pow(10, decimalLimit);

  switch (roundingMode) {
    case 'up':
      processedValue = Math.ceil(processedValue * multiplier) / multiplier;
      break;
    case 'down':
      processedValue = Math.floor(processedValue * multiplier) / multiplier;
      break;
    case 'normal':
    default:
      processedValue = Math.round(processedValue * multiplier) / multiplier;
      break;
  }

  if (returnType === 'number') return processedValue;

  const fixedValue = processedValue.toFixed(decimalLimit);

  const [integerPart, decimalPart] = fixedValue.split('.');

  const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, separator);

  const decimalSeparator = separator === '.' ? ',' : '.';

  if (decimalLimit > 0 && decimalPart) {
    return `${formattedInteger}${decimalSeparator}${decimalPart}`;
  }

  return formattedInteger;
};
