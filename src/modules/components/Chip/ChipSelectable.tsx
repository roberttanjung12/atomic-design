'use client';

import { useState } from 'react';
import Stack from '@mui/material/Stack';
import { Chip } from '@/@dront/components';

const ChipSelectable = () => {
  const [selected, setSelected] = useState(false);

  return (
    <Stack direction="row" spacing={2}>
      <Chip
        label={selected ? 'Active' : 'Inactive'}
        color="success"
        selectable
        selected={selected}
        onClick={() => setSelected(!selected)}
      />
    </Stack>
  );
};

export default ChipSelectable;
