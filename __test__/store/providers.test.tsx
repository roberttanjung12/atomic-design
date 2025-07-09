import { render, screen } from '@testing-library/react';
import { Providers } from '@/store/providers';
import { persistor } from '@/store/store';

describe('Providers', () => {
  it('renders children within Provider and PersistGate', () => {
    render(
      <Providers>
        <div>Test Child</div>
      </Providers>
    );

    expect(screen.getByText('Test Child')).toBeInTheDocument();
  });

  it('renders PersistGate with correct persistor and loading component', () => {
    const MockPersistGate = jest.fn(({ children, loading, persistor }) => (
      <div data-testid="persist-gate" data-persistor={persistor} data-loading={loading ? 'yes' : 'no'}>
        {children}
      </div>
    ));

    render(
      <Providers>
        <div>Test</div>
      </Providers>,
      {
        wrapper: ({ children }) => (
          <MockPersistGate persistor={persistor} loading={null}>
            {children}
          </MockPersistGate>
        )
      }
    );

    expect(MockPersistGate).toHaveBeenCalledWith(expect.objectContaining({ persistor, loading: null }), undefined);
  });
});
