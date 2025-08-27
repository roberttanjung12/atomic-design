import type { Dispatch, SetStateAction } from 'react';
import { List, ListItem, ListItemButton, Typography } from '@mui/material';

import { format, startOfDay, subDays } from 'date-fns';
import handleTemplateRange from '../helpers/handle-template-range';
import type { DateValue } from '../types/date-value';
import type { Modes } from '../types/modes';

const formatDate = (date: Date) => format(date, 'dd MMMM yyyy');

interface TemplatesProps {
  setTemporaryDate: Dispatch<SetStateAction<DateValue>>;
  setMode: Dispatch<SetStateAction<Modes>>;
}

const Templates = ({ setTemporaryDate, setMode }: TemplatesProps) => {
  const today = startOfDay(new Date());
  const yesterday = startOfDay(subDays(new Date(), 1));
  const last7Start = startOfDay(subDays(new Date(), 7));
  const last30Start = startOfDay(subDays(new Date(), 30));
  const last60Start = startOfDay(subDays(new Date(), 60));

  return (
    <List
      onClick={() => {
        setMode('custom-range');
      }}
      sx={{
        '& .MuiListItemButton-root': {
          p: 0,
          mb: 1
        },
        '& .MuiListItem-root': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 2
        }
      }}
    >
      <ListItemButton onClick={() => handleTemplateRange('Today', setTemporaryDate)}>
        <ListItem>
          <Typography mb="2px">Today</Typography>
          <Typography variant="caption">{formatDate(today)}</Typography>
        </ListItem>
      </ListItemButton>

      <ListItemButton onClick={() => handleTemplateRange('Yesterday', setTemporaryDate)}>
        <ListItem>
          <Typography mb="2px">Yesterday</Typography>
          <Typography variant="caption">{formatDate(yesterday)}</Typography>
        </ListItem>
      </ListItemButton>

      <ListItemButton onClick={() => handleTemplateRange('Last 7 Days', setTemporaryDate)}>
        <ListItem>
          <Typography mb="2px">Last 7 Days</Typography>
          <Typography variant="caption">{`${formatDate(last7Start)} - ${formatDate(today)}`}</Typography>
        </ListItem>
      </ListItemButton>

      <ListItemButton onClick={() => handleTemplateRange('Last 30 Days', setTemporaryDate)}>
        <ListItem>
          <Typography mb="2px">Last 30 Days</Typography>
          <Typography variant="caption">{`${formatDate(last30Start)} - ${formatDate(today)}`}</Typography>
        </ListItem>
      </ListItemButton>

      <ListItemButton onClick={() => handleTemplateRange('Last 60 Days', setTemporaryDate)}>
        <ListItem>
          <Typography mb="2px">Last 60 Days</Typography>
          <Typography variant="caption">{`${formatDate(last60Start)} - ${formatDate(today)}`}</Typography>
        </ListItem>
      </ListItemButton>
    </List>
  );
};

export default Templates;
