import { render } from '@testing-library/react';
import CodeSnippet from '@/@dront/components/CodeSnippet';
import Code from '@/modules/main/Setting/Appearance/Code';
import { appearanceCode } from '@/modules/main/Setting/Appearance/Code/appearance-code';
import { useSelector } from '@/store/hooks';

jest.mock('@/store/hooks');
jest.mock('@/modules/main/Setting/Appearance/Code/appearance-code');
jest.mock('@/@dront/components/CodeSnippet');

const mockAppearance = {
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
    isHover: false,
    isMobile: false,
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

describe('Code Component', () => {
  it('renders the CodeSnippet component with generated code', () => {
    const mockCode = `// Mock generated code based on ${JSON.stringify(mockAppearance)}`;

    (appearanceCode as jest.Mock).mockReturnValue(mockCode);

    render(<Code />);

    expect(CodeSnippet).toHaveBeenCalledWith(expect.objectContaining({ code: mockCode }), undefined);
  });

  it('handles undefined appearance data gracefully', () => {
    (useSelector as jest.Mock).mockReturnValue(undefined);
    (appearanceCode as jest.Mock).mockReturnValue('');

    render(<Code />);

    expect(CodeSnippet).toHaveBeenCalled();
  });
});
