import Alert from '@/@dront/components/Alert';

const AlertSnackbar = () => {
  return (
    <Alert
      severity="info"
      title="This is an alert"
      message="The alert component can be used to highlight certain parts of your page for higher content visibility."
      variant="snackbar" // variant snackbar
    />
  );
};

export default AlertSnackbar;
