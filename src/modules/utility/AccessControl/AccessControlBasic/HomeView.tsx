import { AccessControlPermission, useAccessControlPermission } from '@dront/ui/AccessControl';
import { alertFloating } from '@dront/ui/Alert';
import { Button, Stack } from '@mui/material';

const DownloadButton = () => {
  const { isAllow } = useAccessControlPermission();

  const handleDownload = () => {
    if (isAllow({ on: 'Download' })) {
      alertFloating.open({
        title: 'Download allowed',
        severity: 'success',
        duration: 3000
      });
    } else {
      alertFloating.open({
        title: 'Download not allowed',
        severity: 'error',
        duration: 3000
      });
    }
  };

  return (
    <Button variant="outlined" onClick={handleDownload}>
      Download
    </Button>
  );
};

const EditButton = () => {
  const { isAllow } = useAccessControlPermission();

  const handleEdit = () => {
    if (isAllow({ on: 'Edit' })) {
      alertFloating.open({
        title: 'Edit allowed',
        severity: 'success',
        duration: 3000
      });
    } else {
      alertFloating.open({
        title: 'Edit not allowed',
        severity: 'error',
        duration: 3000
      });
    }
  };

  return (
    <Button variant="contained" onClick={handleEdit}>
      Edit
    </Button>
  );
};

const HomeView = () => {
  return (
    <AccessControlPermission on="View">
      <h1>Home view</h1>

      <Stack direction="row" spacing={2}>
        <DownloadButton />
        <EditButton />
      </Stack>
    </AccessControlPermission>
  );
};

export default HomeView;
