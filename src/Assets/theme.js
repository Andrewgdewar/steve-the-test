import { createTheme } from '@mui/material/styles';

// colorMode accepts 'light' | 'dark'
export const getTheme = (colorMode) =>
  createTheme({
    palette: { mode: colorMode },
    typography: {
      fontFamily: 'Roboto, sans-serif',
      fontSize: 14,
      fontWeightLight: 300, // Work Sans
      fontWeightRegular: 400, // Work Sans
      fontWeightMedium: 700, // Roboto Condensed
    },
  });
