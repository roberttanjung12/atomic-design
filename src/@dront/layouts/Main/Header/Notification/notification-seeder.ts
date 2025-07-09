interface NotificationInterface {
  avatar?: string;
  title: string;
  subtitle: string;
}

export const notifications: NotificationInterface[] = [
  {
    title: 'Schweinsteiger Joined the Team!',
    subtitle: 'Congratulate him'
  },
  {
    title: 'New message received',
    subtitle: 'Badstuber sent you new message'
  },
  {
    title: 'New Payment received',
    subtitle: 'Check your earnings'
  },
  {
    title: 'Goretzka completed tasks',
    subtitle: 'Assign his new tasks'
  },
  {
    title: 'Kimmich Joined the Team!',
    subtitle: 'Congratulate him'
  },
  {
    title: 'New message received',
    subtitle: 'Draxler sent you new message'
  },
  {
    title: 'New Payment received',
    subtitle: 'Check your earnings'
  },
  {
    title: 'Podolski completed tasks',
    subtitle: 'Assign his new tasks'
  }
];
