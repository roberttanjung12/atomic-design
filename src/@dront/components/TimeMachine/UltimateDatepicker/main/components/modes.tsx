import type { Dispatch, SetStateAction } from 'react';
import { List, ListItem, ListItemButton } from '@mui/material';
import type { DateValue } from '../types/date-value';
import type { Modes } from '../types/modes';

interface ModeMenu {
  label: string;
  mode: Modes;
}

interface ModesProps {
  mode: Modes;
  setMode: Dispatch<SetStateAction<Modes>>;
  setTemporaryDate: Dispatch<SetStateAction<DateValue>>;
}

const modes: ModeMenu[] = [
  { label: 'Custom Range', mode: 'custom-range' },
  { label: 'Daily', mode: 'daily' },
  { label: 'Weekly', mode: 'weekly' },
  { label: 'Monthly', mode: 'monthly' },
  { label: 'Quarter', mode: 'quarter' },
  { label: 'Yearly', mode: 'yearly' }
];

const Modes = ({ mode, setMode, setTemporaryDate }: ModesProps) => {
  const handleMode = (value: Modes) => {
    setTemporaryDate([null, null]);
    setMode(value);
  };

  return (
    <List sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
      {modes.map(item => (
        <ListItemButton
          selected={mode === item.mode}
          sx={{ p: 0 }}
          key={item.mode}
          onClick={() => handleMode(item.mode)}
        >
          <ListItem>{item.label}</ListItem>
        </ListItemButton>
      ))}
    </List>
  );
};

export default Modes;
