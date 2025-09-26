import Accordion from '@dront/ui/Accordion';

const AccordionBasic = () => {
  const accordionItems = [
    {
      title: 'General Information',
      detail:
        'This section contains basic information about the user profile including name, email, and contact details.'
    },
    {
      title: 'Settings & Preferences',
      detail:
        'Configure your account settings, notification preferences, and privacy options to customize your experience.'
    },
    {
      title: 'Security & Privacy',
      detail:
        'Manage your security settings, two-factor authentication, and review privacy policies to keep your account secure.'
    }
  ];

  return <Accordion id="basic-accordion" list={accordionItems} variant="contained" />;
};

export default AccordionBasic;
