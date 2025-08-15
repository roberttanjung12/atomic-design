import type { Dispatch, FC, SetStateAction } from 'react';
import { List, ListItem, ListItemButton } from '@mui/material';

import handleTemplateRange from '../helpers/handle-template-range';
import type { DateValue } from '../types/date-value';

const Templates: FC<{ setTemporaryDate: Dispatch<SetStateAction<DateValue>> }> = ({ setTemporaryDate }) => {
  return (
    <List>
      <ListItemButton onClick={() => handleTemplateRange('Today', setTemporaryDate)}>
        <ListItem>Today</ListItem>
      </ListItemButton>

      <ListItemButton onClick={() => handleTemplateRange('Yesterday', setTemporaryDate)}>
        <ListItem>Yesterday</ListItem>
      </ListItemButton>

      <ListItemButton onClick={() => handleTemplateRange('Last 7 Days', setTemporaryDate)}>
        <ListItem>Last 7 Days</ListItem>
      </ListItemButton>

      <ListItemButton onClick={() => handleTemplateRange('Last 30 Days', setTemporaryDate)}>
        <ListItem>Last 30 Days</ListItem>
      </ListItemButton>

      <ListItemButton onClick={() => handleTemplateRange('Last 60 Days', setTemporaryDate)}>
        <ListItem>Last 60 Days</ListItem>
      </ListItemButton>
    </List>
  );
};

export default Templates;
