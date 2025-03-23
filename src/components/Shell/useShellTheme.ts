import { SettingsContext } from 'contexts/SettingsContext';
import { useContext, useMemo } from 'react';
import { createTheme } from '@mui/material/styles';

export const useShellTheme = () => {
  const { getUserSettings } = useContext(SettingsContext);
  const { colorMode } = getUserSettings();

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: colorMode,
          primary: {
            main: colorMode === 'dark' ? '#ffffff' : '#000000', // White for dark mode, black for light mode
          },
          background: {
            default: colorMode === 'dark' ? '#000000' : '#ffffff', // Black for dark mode, white for light mode
            paper: colorMode === 'dark' ? '#000000' : '#ffffff',
          },
        },
      }),
    [colorMode]
  );

  return theme;
};
