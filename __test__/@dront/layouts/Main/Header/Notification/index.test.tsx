import { render, screen, fireEvent } from '@testing-library/react';
import Notification from '@/@dront/layouts/Main/Header/Notification';
import * as data from '@/@dront/layouts/Main/Header/Notification/notification-seeder';

jest.mock('@/@dront/layouts/Main/Header/Notification/notification-seeder', () => ({
  notifications: [
    {
      avatar: '/path/to/avatar1.png',
      title: 'Notification Title 1',
      subtitle: 'Notification Subtitle 1'
    },
    {
      avatar: '/path/to/avatar2.png',
      title: 'Notification Title 2',
      subtitle: 'Notification Subtitle 2'
    },
    {
      avatar: '/path/to/avatar3.png',
      title: 'Notification Title 3',
      subtitle: 'Notification Subtitle 3'
    },
    {
      avatar: '/path/to/avatar4.png',
      title: 'Notification Title 4',
      subtitle: 'Notification Subtitle 4'
    },
    {
      avatar: '/path/to/avatar5.png',
      title: 'Notification Title 5',
      subtitle: 'Notification Subtitle 5'
    }
  ]
}));

jest.mock('@/@dront/components', () => ({
  MainScrollbar: ({ children }: any) => <div>{children}</div>
}));

describe('Notification', () => {
  it('renders notification icon with badge', () => {
    render(<Notification />);
    const notificationIcon = screen.getByLabelText(`Show ${data.notifications.length} new notifications`);

    expect(notificationIcon).toBeInTheDocument();
    expect(notificationIcon).toHaveAttribute('aria-controls', 'notification-menu');
  });

  it('opens the notification menu when the button is clicked', () => {
    render(<Notification />);

    const button = screen.getByRole('button');

    fireEvent.click(button);

    expect(screen.getByRole('menu')).toBeVisible();
    expect(screen.getByText('Notifications')).toBeVisible();
  });

  it('renders notifications correctly', () => {
    render(<Notification />);

    const button = screen.getByRole('button');

    fireEvent.click(button);

    data.notifications.forEach(notification => {
      expect(screen.getByText(notification.title)).toBeVisible();
      expect(screen.getByText(notification.subtitle)).toBeVisible();
    });
  });

  it('displays the correct number of notifications', () => {
    render(<Notification />);

    const button = screen.getByRole('button');

    fireEvent.click(button);

    const notifications = screen.getAllByRole('menuitem');

    expect(notifications).toHaveLength(data.notifications.length);
  });
});
