import { Provider } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import LayoutMainHeaderLanguage from '@/@dront/layouts/Main/Header/Language';
import { store } from '@/store/store';

jest.mock('react-i18next', () => ({
  useTranslation: jest.fn(() => ({
    t: (key: string) => key,
    i18n: {
      changeLanguage: jest.fn()
    }
  }))
}));

describe('LayoutMainHeaderLanguage Component (with i18n mock)', () => {
  it('renders the correct active language avatar and tooltip text based on Redux state', async () => {
    render(
      <Provider store={store}>
        <LayoutMainHeaderLanguage />
      </Provider>
    );

    const activeLanguageAvatar = screen.getByRole('img', { name: /en/i });

    expect(activeLanguageAvatar).toBeInTheDocument();

    const languageTooltip = screen.getByRole('button', { name: /language/i });

    fireEvent.mouseOver(languageTooltip);
    await waitFor(() => {
      expect(screen.getByText(/Language/i)).toBeInTheDocument();
    });
  });

  it('opens and closes the language menu when clicking the language button', async () => {
    render(
      <Provider store={store}>
        <LayoutMainHeaderLanguage />
      </Provider>
    );

    const languageButton = screen.getByRole('button', { name: /language/i });

    fireEvent.click(languageButton);

    expect(screen.getByRole('menu')).toBeInTheDocument();

    fireEvent.click(screen.getByRole('menu').querySelector('li')!);
  });

  it('changes language when a language option is selected', async () => {
    const mockDispatch = jest.fn();

    (useTranslation as any).mockImplementation(() => ({
      t: (key: string) => key,
      i18n: { changeLanguage: mockDispatch }
    }));

    render(
      <Provider store={store}>
        <LayoutMainHeaderLanguage />
      </Provider>
    );

    const languageButton = screen.getByRole('button', { name: /language/i });

    fireEvent.click(languageButton);

    const germanMenuItem = screen.getByText('Deutsch');

    fireEvent.click(germanMenuItem);

    await waitFor(() => {
      expect(mockDispatch).toHaveBeenCalledWith('en');
    });
  });

  it('displays language menu items correctly', async () => {
    render(
      <Provider store={store}>
        <LayoutMainHeaderLanguage />
      </Provider>
    );

    const languageButton = screen.getByRole('button', { name: /language/i });

    fireEvent.click(languageButton);

    const englishOption = screen.getByText('English');
    const deutschOption = screen.getByText('Deutsch');
    const bahasaIndonesiaOption = screen.getByText('Bahasa Indonesia');

    expect(englishOption).toBeInTheDocument();
    expect(deutschOption).toBeInTheDocument();
    expect(bahasaIndonesiaOption).toBeInTheDocument();
  });
});
