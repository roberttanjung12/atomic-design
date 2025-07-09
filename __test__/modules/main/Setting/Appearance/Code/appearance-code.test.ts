import { appearanceCode } from '@/modules/main/Setting/Appearance/Code/appearance-code';
import type { Appearance } from '@/store/slice/appearance/appearance-types';

describe('appearanceCode', () => {
  it('should handle boolean values correctly', () => {
    const appearance: Appearance = {
      activeLanguage: 'en',
      activeMode: 'light',
      activeTheme: 'DRONT_THEME',
      borderRadius: 7,
      headerHeight: 70,
      isContainerFull: false,
      isCardShadow: true,
      sidebar: {
        background: '#0f0f0f',
        isCollapse: false,
        isMobile: false,
        isHover: false,
        itemColor: '#ffffff',
        itemHoverBackground: '#ecf2ff',
        itemHoverColor: '#5d87ff',
        itemSelectedBackground: '#5d87ff',
        itemSelectedColor: '#ffffff',
        miniWidth: 90,
        subheaderColor: '#cccccc',
        subMenuHoverBackground: '#0f0f0f',
        variant: 'dront',
        width: 340
      }
    };

    const generatedCode = appearanceCode(appearance);

    expect(generatedCode).toContain('isCardShadow: true');
    expect(generatedCode).toContain('isContainerFull: false');
    expect(generatedCode).toContain('isHover: false');
    expect(generatedCode).toContain('isMobile: false');
  });

  it('should handle empty strings correctly', () => {
    const appearance: Appearance = {
      activeLanguage: 'en',
      activeMode: 'light',
      activeTheme: 'DRONT_THEME',
      borderRadius: 7,
      headerHeight: 70,
      isContainerFull: false,
      isCardShadow: true,
      sidebar: {
        background: '#0f0f0f',
        isCollapse: false,
        isMobile: false,
        isHover: false,
        itemColor: '#ffffff',
        itemHoverBackground: '#ecf2ff',
        itemHoverColor: '#5d87ff',
        itemSelectedBackground: '#5d87ff',
        itemSelectedColor: '#ffffff',
        miniWidth: 90,
        subheaderColor: '#cccccc',
        subMenuHoverBackground: '#0f0f0f',
        variant: 'dront',
        width: 340
      }
    };

    const generatedCode = appearanceCode(appearance);

    expect(generatedCode).toContain("activeLanguage: 'en'");
    expect(generatedCode).toContain("activeMode: 'light'");
  });
});
