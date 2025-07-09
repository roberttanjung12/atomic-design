import React from 'react';
import { useMediaQuery } from '@mui/material';
import { render, screen } from '@testing-library/react';
import MainScrollbar from '@/@dront/components/MainScrollbar';

jest.mock('@mui/material', () => {
  const originalModule = jest.requireActual('@mui/material');

  return {
    ...originalModule,
    useMediaQuery: jest.fn()
  };
});

jest.mock('simplebar-react', () => jest.fn(({ children }) => <div data-testid="simplebar">{children}</div>));

describe('MainScrollbar Component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders Box for small screens', () => {
    (useMediaQuery as jest.Mock).mockReturnValue(true);

    render(
      <MainScrollbar sx={{ padding: 2 }}>
        <div>Test Content</div>
      </MainScrollbar>
    );

    const box = screen.getByText('Test Content').parentElement;

    expect(box).toHaveStyle({ overflowX: 'auto' });
  });

  test('renders SimpleBarStyle for large screens', () => {
    (useMediaQuery as jest.Mock).mockReturnValue(false);

    render(
      <MainScrollbar sx={{ padding: 2 }}>
        <div>Test Content</div>
      </MainScrollbar>
    );

    const simpleBar = screen.getByTestId('simplebar');

    expect(simpleBar).toBeInTheDocument();
    expect(simpleBar).toHaveAttribute('data-testid', 'simplebar');
  });

  test('renders children correctly', () => {
    (useMediaQuery as jest.Mock).mockReturnValue(false);

    render(
      <MainScrollbar sx={{ padding: 2 }}>
        <div>Test Content</div>
      </MainScrollbar>
    );

    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});
