import React from 'react';
import { render } from '@testing-library/react';
import LayoutMainSidebarNavigationCustom from '@/@dront/layouts/Main/Sidebar/NavigationCustom';

describe('LayoutMainSidebarNavigationCustom', () => {
  it('should render the sidebar with the correct text', () => {
    const { getByText } = render(<LayoutMainSidebarNavigationCustom />);

    expect(getByText('* Drop your custom sidebar here *')).toBeInTheDocument();
  });

  it('should apply the correct styles', () => {
    const { container } = render(<LayoutMainSidebarNavigationCustom />);
    const boxElement = container.firstChild;

    expect(boxElement).toHaveStyle('text-align: center');
    expect(boxElement).toHaveStyle('color: #FFF');
    expect(boxElement).toHaveStyle('margin-top: 40px');
  });
});
