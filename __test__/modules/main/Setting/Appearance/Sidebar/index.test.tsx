import { render, screen } from '@testing-library/react';
import AppearanceSidebar from '@/modules/main/Setting/Appearance/Sidebar';
import SidebarColor from '@/modules/main/Setting/Appearance/Sidebar/Color';
import SidebarSlider from '@/modules/main/Setting/Appearance/Sidebar/Slider';
import SidebarSwitch from '@/modules/main/Setting/Appearance/Sidebar/Switch';
import { useSelector } from '@/store/hooks';

jest.mock('@/store/hooks');
jest.mock('@/modules/main/Setting/Appearance/Sidebar/Color');
jest.mock('@/modules/main/Setting/Appearance/Sidebar/Slider');
jest.mock('@/modules/main/Setting/Appearance/Sidebar/Switch');

jest.mock('mui-color-input', () => ({
  MuiColorInput: ({ onChange, ...props }: any) => <input data-testid="color-input" onChange={onChange} {...props} />
}));

describe('AppearanceSidebar Component', () => {
  const mockAppearance = {
    sidebar: {
      variant: 'dront',
      isCollapse: false,
      width: 280,
      miniWidth: 80,
      background: '#FFFFFF',
      itemColor: '#000000',
      itemHoverBackground: '#EEEEEE',
      itemHoverColor: '#000000',
      itemSelectedBackground: '#DDDDDD',
      itemSelectedColor: '#000000',
      subheaderColor: '#000000',
      subMenuHoverBackground: '#CCCCCC'
    }
  };

  beforeEach(() => {
    (useSelector as jest.Mock).mockReturnValue(mockAppearance);
  });

  it('renders the component with correct title', () => {
    render(<AppearanceSidebar />);
    expect(screen.getByRole('heading', { name: /Sidebar/i, level: 6 })).toBeInTheDocument();
  });

  it('renders SidebarSwitch for variant with correct props', () => {
    render(<AppearanceSidebar />);

    expect(SidebarSwitch).toHaveBeenNthCalledWith(
      1,
      {
        type: 'variant',
        value: mockAppearance.sidebar.variant,
        options: [
          { value: 'dront', label: 'DRONT' },
          { value: 'custom', label: 'Custom' }
        ]
      },
      undefined
    );
  });

  it('renders SidebarSwitch for type with correct props', () => {
    render(<AppearanceSidebar />);
    expect(SidebarSwitch).toHaveBeenNthCalledWith(
      2,
      {
        type: 'type',
        value: !mockAppearance.sidebar.isCollapse,
        options: [
          { value: true, label: 'Full' },
          { value: false, label: 'Mini' }
        ]
      },
      undefined
    );
  });

  it('renders SidebarSlider for width with correct props', () => {
    render(<AppearanceSidebar />);
    expect(SidebarSlider).toHaveBeenNthCalledWith(1, { type: 'full', value: mockAppearance.sidebar.width }, undefined);
  });

  it('renders SidebarSlider for miniWidth with correct props', () => {
    render(<AppearanceSidebar />);
    expect(SidebarSlider).toHaveBeenNthCalledWith(
      2,
      { type: 'mini', value: mockAppearance.sidebar.miniWidth },
      undefined
    );
  });

  it('renders SidebarColor components with correct props', () => {
    render(<AppearanceSidebar />);
    const colorProps = [
      { type: 'background', value: mockAppearance.sidebar.background },
      { type: 'item-color', value: mockAppearance.sidebar.itemColor },
      { type: 'item-hover-background', value: mockAppearance.sidebar.itemHoverBackground },
      { type: 'item-hover-color', value: mockAppearance.sidebar.itemHoverColor },
      { type: 'item-selected-background', value: mockAppearance.sidebar.itemSelectedBackground },
      { type: 'item-selected-color', value: mockAppearance.sidebar.itemSelectedColor },
      { type: 'subheader-color', value: mockAppearance.sidebar.subheaderColor },
      { type: 'sub-menu-hover-background', value: mockAppearance.sidebar.subMenuHoverBackground }
    ];

    colorProps.forEach((props, index) => {
      expect(SidebarColor).toHaveBeenNthCalledWith(index + 1, props, undefined);
    });
  });
});
