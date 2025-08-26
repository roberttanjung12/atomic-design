'use client';

import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import { Chip } from '@/@dront/components';

const ChipArray = () => {
  const [chips, setChips] = useState([
    { key: 0, label: 'Primary', color: 'primary', deletable: true },
    { key: 1, label: 'Secondary', color: 'secondary', deletable: true },
    { key: 2, label: 'Fixed', color: 'success', deletable: false },
    { key: 3, label: 'Warning', color: 'warning', deletable: true }
  ]);

  const handleDelete = (chipToDelete: number) => {
    setChips(prev => prev.filter(chip => chip.key !== chipToDelete));
  };

  return (
    <Stack direction="row" spacing={2} flexWrap="wrap">
      {chips.map(chip => (
        <Chip
          key={chip.key}
          label={chip.label}
          color={chip.color as any}
          onDelete={chip.deletable ? () => handleDelete(chip.key) : undefined}
        />
      ))}
    </Stack>
  );
};

export default ChipArray;
