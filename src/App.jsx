import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { useMemo } from 'react';
import { getTheme } from './Assets/theme';
import { useAppContext } from './Middleware/AuthContext';
import AllTheRoutes from './Routes';

export default function App() {
  const { darkmode } = useAppContext();
  const theme = useMemo(() => getTheme(darkmode), [darkmode]);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AllTheRoutes />
    </ThemeProvider>
  );
}
