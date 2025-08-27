import { useState } from 'react';
import { Stack } from '@mui/material';
import { Button } from '@/@dront/components';

const ButtonLoading = () => {
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 3000);
  };

  const handleClick2 = () => {
    setLoading2(true);
    setTimeout(() => setLoading2(false), 3000);
  };

  return (
    <Stack direction="row" spacing={2}>
      <Button loading={loading} onClick={handleClick}>
        {loading ? 'Loading...' : 'Click to Load'}
      </Button>
      <Button variant="outline" loading={loading2} onClick={handleClick2}>
        {loading2 ? 'Processing...' : 'Process Data'}
      </Button>
      <Button loading disabled>
        Always Loading
      </Button>
    </Stack>
  );
};

export default ButtonLoading;
