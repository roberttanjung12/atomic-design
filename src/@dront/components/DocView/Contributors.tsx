import { useState } from 'react';
import { Avatar, Typography, useMediaQuery, Popover, ButtonBase } from '@mui/material';
import Stack from '@mui/material/Stack';
import contributors from '@/configurations/contributors';

type Contributor = (typeof contributors)[number];

/**
 * Infer contributors name.
 */
type ContributorName = Contributor['name'];

export interface ContributorsProps {
  persons: ContributorName[];
}

function getInitials(name: string): string {
  // Trim to remove excess leading/trailing spaces
  const parts = name.trim().split(/\s+/);

  if (parts.length === 0) {
    return '';
  }

  // Take the first letter of the first word
  const firstInitial = parts[0][0].toUpperCase();

  // If there is only one word, return only the first letter
  if (parts.length === 1) {
    return firstInitial;
  }

  // Take the first letter of the last word
  const lastInitial = parts[parts.length - 1][0].toUpperCase();
  const initial = firstInitial + lastInitial;

  return initial;
}

/**
 * Display contributors as avatar group with links to their GitLab profiles.
 */
const Contributors = ({ persons }: ContributorsProps) => {
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('sm'));
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [selectedPerson, setSelectedPerson] = useState<Contributor | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>, person: Contributor) => {
    setAnchorEl(event.currentTarget);
    setSelectedPerson(person);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSelectedPerson(null);
  };

  const open = Boolean(anchorEl);

  return (
    <Stack direction="row" alignItems="center" flexWrap={isMobile ? 'wrap' : 'nowrap'} spacing={isMobile ? -1 : -1.5}>
      {persons.map(person => {
        const selectedContributor = contributors.find(contributor => contributor.name === person)!;
        const { name: username } = selectedContributor;

        return (
          <ButtonBase
            key={username}
            onClick={e => {
              handleClick(e, selectedContributor);
            }}
          >
            <Avatar
              alt={username}
              sx={{
                width: isMobile ? 38 : 40,
                height: isMobile ? 38 : 40,
                textTransform: 'capitalize',
                border: '2px solid #fff',
                transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                '&:hover': {
                  transform: 'scale(1.2) translateY(-6px)',
                  zIndex: 10,
                  boxShadow: '0 2px 3px rgba(0, 0, 0, 0.25)'
                }
              }}
            >
              {getInitials(username)}
            </Avatar>
          </ButtonBase>
        );
      })}

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        transformOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        {selectedPerson && (
          <Stack p={2} spacing={0.5}>
            <Typography fontWeight={700}>{selectedPerson.name}</Typography>
            <Typography component="a" href={selectedPerson.url} target="_blank" rel="noopener noreferrer">
              View Profile
            </Typography>
          </Stack>
        )}
      </Popover>
    </Stack>
  );
};

export default Contributors;
