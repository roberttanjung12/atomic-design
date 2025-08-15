import type { Dispatch, FC, SetStateAction } from 'react';
import { List, ListItem, ListItemButton, Typography } from '@mui/material';

import moment from 'moment';
import handleTemplateRange from '../helpers/handle-template-range';
import type { DateValue } from '../types/date-value';
import type { Modes } from '../types/modes';

const Templates: FC<{
  setTemporaryDate: Dispatch<SetStateAction<DateValue>>;
  setMode: Dispatch<SetStateAction<Modes>>;
}> = ({ setTemporaryDate, setMode }) => {
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
          <Typography variant="caption">{moment().startOf('day').format('DD MMMM YYYY')}</Typography>
        </ListItem>
      </ListItemButton>

      <ListItemButton onClick={() => handleTemplateRange('Yesterday', setTemporaryDate)}>
        <ListItem>
          <Typography mb="2px">Yesterday</Typography>
          <Typography variant="caption">
            {moment().subtract(1, 'days').startOf('day').format('DD MMMM YYYY')}
          </Typography>
        </ListItem>
      </ListItemButton>

      <ListItemButton onClick={() => handleTemplateRange('Last 7 Days', setTemporaryDate)}>
        <ListItem>
          <Typography mb="2px">Last 7 Days</Typography>
          <Typography variant="caption">
            {`${moment().subtract(7, 'days').startOf('day').format('DD MMMM YYYY')} - ${moment().format('DD MMMM YYYY')}`}
          </Typography>
        </ListItem>
      </ListItemButton>

      <ListItemButton onClick={() => handleTemplateRange('Last 30 Days', setTemporaryDate)}>
        <ListItem>
          <Typography mb="2px">Last 30 Days</Typography>
          <Typography variant="caption">
            {`${moment().subtract(30, 'days').startOf('day').format('DD MMMM YYYY')} - ${moment().format('DD MMMM YYYY')}`}
          </Typography>
        </ListItem>
      </ListItemButton>

      <ListItemButton onClick={() => handleTemplateRange('Last 60 Days', setTemporaryDate)}>
        <ListItem>
          <Typography mb="2px">Last 60 Days</Typography>
          <Typography variant="caption">
            {`${moment().subtract(60, 'days').startOf('day').format('DD MMMM YYYY')} - ${moment().format('DD MMMM YYYY')}`}
          </Typography>
        </ListItem>
      </ListItemButton>
    </List>
  );
};

export default Templates;
