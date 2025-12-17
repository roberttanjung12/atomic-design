import { thousand } from '@/modules/utility/Thousand/thousand';

describe('thousand utility', () => {
  describe('Basic formatting', () => {
    it('should format number with default comma separator', () => {
      expect(thousand(1234567.89)).toBe('1,234,567.89');
    });

    it('should handle small numbers', () => {
      expect(thousand(123.45)).toBe('123.45');
    });

    it('should handle negative numbers', () => {
      expect(thousand(-1234567.89)).toBe('-1,234,567.89');
    });

    it('should handle zero', () => {
      expect(thousand(0)).toBe('0.00');
    });
  });

  describe('String input parsing', () => {
    it('should parse string with dot separators', () => {
      expect(thousand('1.000.000')).toBe('1,000,000.00');
    });

    it('should parse string with dot separators and return number', () => {
      expect(thousand('1.000.000', { returnType: 'number' })).toBe(1000000);
    });

    it('should parse string with comma separators', () => {
      expect(thousand('1,000,000')).toBe('1,000,000.00');
    });

    it('should parse string with comma as decimal separator', () => {
      expect(thousand('1.234.567,89')).toBe('1,234,567.89');
    });

    it('should parse string with dot as decimal separator', () => {
      expect(thousand('1,234,567.89')).toBe('1,234,567.89');
    });

    it('should parse string with space separators', () => {
      expect(thousand('1 000 000')).toBe('1,000,000.00');
    });

    it('should parse string with underscore separators', () => {
      expect(thousand('1_000_000')).toBe('1,000,000.00');
    });

    it('should parse string and apply options', () => {
      expect(thousand('1.000.000', { separator: '.', decimalLimit: 0 })).toBe('1.000.000');
    });

    it('should parse negative string numbers', () => {
      expect(thousand('-1.000.000')).toBe('-1,000,000.00');
    });

    it('should parse string and apply redenomination', () => {
      expect(thousand('1.000.000', { redenomination: 1000 })).toBe('1,000.00');
    });

    it('should throw error for invalid string', () => {
      expect(() => thousand('invalid')).toThrow('Cannot parse "invalid" to a number');
    });
  });

  describe('Rounding modes', () => {
    it('should round up with roundingMode: "up"', () => {
      expect(thousand(1234.567, { roundingMode: 'up' })).toBe('1,234.57');
      expect(thousand(1234.561, { roundingMode: 'up', decimalLimit: 1 })).toBe('1,234.6');
    });

    it('should round down with roundingMode: "down"', () => {
      expect(thousand(1234.567, { roundingMode: 'down' })).toBe('1,234.56');
      expect(thousand(1234.569, { roundingMode: 'down', decimalLimit: 1 })).toBe('1,234.5');
    });

    it('should round normally with roundingMode: "normal"', () => {
      expect(thousand(1234.565, { roundingMode: 'normal' })).toBe('1,234.57');
      expect(thousand(1234.564, { roundingMode: 'normal' })).toBe('1,234.56');
    });

    it('should use normal rounding by default', () => {
      expect(thousand(1234.565)).toBe('1,234.57');
      expect(thousand(1234.564)).toBe('1,234.56');
    });
  });

  describe('Custom separator', () => {
    it('should use dot as separator with comma as decimal separator', () => {
      expect(thousand(1234567.89, { separator: '.' })).toBe('1.234.567,89');
    });

    it('should use comma as separator with dot as decimal separator', () => {
      expect(thousand(1234567.89, { separator: ',' })).toBe('1,234,567.89');
    });

    it('should use space as separator with dot as decimal separator', () => {
      expect(thousand(1234567.89, { separator: ' ' })).toBe('1 234 567.89');
    });

    it('should use underscore as separator with dot as decimal separator', () => {
      expect(thousand(1234567.89, { separator: '_' })).toBe('1_234_567.89');
    });
  });

  describe('Decimal separator based on thousand separator', () => {
    it('should use comma for decimal when thousand separator is dot', () => {
      expect(thousand(1234.56, { separator: '.' })).toBe('1.234,56');
    });

    it('should use dot for decimal when thousand separator is comma', () => {
      expect(thousand(1234.56, { separator: ',' })).toBe('1,234.56');
    });

    it('should use dot for decimal when thousand separator is space', () => {
      expect(thousand(1234.56, { separator: ' ' })).toBe('1 234.56');
    });

    it('should use dot for decimal when thousand separator is underscore', () => {
      expect(thousand(1234.56, { separator: '_' })).toBe('1_234.56');
    });

    it('should handle European format (dot separator, comma decimal)', () => {
      expect(thousand(9876543.21, { separator: '.', decimalLimit: 2 })).toBe('9.876.543,21');
    });
  });

  describe('Decimal limit', () => {
    it('should limit to 0 decimals', () => {
      expect(thousand(1234.567, { decimalLimit: 0 })).toBe('1,235');
    });

    it('should limit to 1 decimal', () => {
      expect(thousand(1234.567, { decimalLimit: 1 })).toBe('1,234.6');
    });

    it('should limit to 3 decimals', () => {
      expect(thousand(1234.56789, { decimalLimit: 3 })).toBe('1,234.568');
    });

    it('should use 2 decimals by default', () => {
      expect(thousand(1234.5)).toBe('1,234.50');
    });
  });

  describe('Redenomination', () => {
    it('should divide by 1000 (thousands)', () => {
      expect(thousand(1234567, { redenomination: 1000 })).toBe('1,234.57');
    });

    it('should divide by 1000000 (millions)', () => {
      expect(thousand(1234567890, { redenomination: 1000000 })).toBe('1,234.57');
    });

    it('should divide by 100 (hundreds)', () => {
      expect(thousand(123456, { redenomination: 100 })).toBe('1,234.56');
    });

    it('should use 1 as default redenomination', () => {
      expect(thousand(1234.56)).toBe('1,234.56');
    });
  });

  describe('Return type', () => {
    it('should return string by default', () => {
      const result = thousand(1234567.89);

      expect(typeof result).toBe('string');
      expect(result).toBe('1,234,567.89');
    });

    it('should return number when specified', () => {
      const result = thousand(1234.567, { returnType: 'number' });

      expect(typeof result).toBe('number');
      expect(result).toBe(1234.57);
    });

    it('should return number with rounding applied', () => {
      const result = thousand(1234.567, {
        returnType: 'number',
        roundingMode: 'up',
        decimalLimit: 1
      });

      expect(result).toBe(1234.6);
    });

    it('should return number with redenomination applied', () => {
      const result = thousand(1234567, {
        returnType: 'number',
        redenomination: 1000
      });

      expect(result).toBe(1234.57);
    });
  });

  describe('Combined options', () => {
    it('should handle round up + custom separator + no decimals', () => {
      expect(
        thousand(1234567.89, {
          roundingMode: 'up',
          separator: '.',
          decimalLimit: 0
        })
      ).toBe('1.234.568');
    });

    it('should handle redenomination + decimal limit', () => {
      expect(
        thousand(1234567890, {
          redenomination: 1000000,
          decimalLimit: 1
        })
      ).toBe('1,234.6');
    });

    it('should handle all options together', () => {
      expect(
        thousand(9876543.21, {
          roundingMode: 'down',
          separator: ' ',
          decimalLimit: 3,
          redenomination: 1000
        })
      ).toBe('9 876.543');
    });

    it('should handle complex scenario with number return', () => {
      const result = thousand(5555555.555, {
        roundingMode: 'up',
        decimalLimit: 2,
        redenomination: 1000,
        returnType: 'number'
      });

      expect(result).toBe(5555.56);
    });
  });

  describe('Edge cases', () => {
    it('should handle very large numbers', () => {
      expect(thousand(1234567890123.45)).toBe('1,234,567,890,123.45');
    });

    it('should handle very small numbers', () => {
      expect(thousand(0.12345, { decimalLimit: 5 })).toBe('0.12345');
    });

    it('should handle numbers less than 1', () => {
      expect(thousand(0.99)).toBe('0.99');
    });

    it('should handle negative numbers with all options', () => {
      expect(
        thousand(-1234567.89, {
          roundingMode: 'up',
          separator: '.',
          decimalLimit: 1
        })
      ).toBe('-1.234.567,8');
    });
  });
});
