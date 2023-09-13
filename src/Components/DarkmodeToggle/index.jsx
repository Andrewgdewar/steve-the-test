import { IconButton, Tooltip, useTheme } from '@mui/material';
import { useState } from 'react';
import { Moon, Sun } from 'react-feather';

export const DarkmodeToggle = () => {
  const { palette } = useTheme();

  const [darkmode, setDarkmode] = useState('light');
  const toggleDarkmode = () => setDarkmode(darkmode === 'light' ? 'dark' : 'light');

  return (
    <Tooltip title={darkmode === 'dark' ? 'Turn on the light' : 'Turn off the light'}>
      <IconButton onClick={toggleDarkmode}>
        {darkmode === 'dark' ? (
          <Sun stroke={palette.primary.main} />
        ) : (
          <Moon stroke={palette.primary.dark} />
        )}
      </IconButton>
    </Tooltip>
  );
};
