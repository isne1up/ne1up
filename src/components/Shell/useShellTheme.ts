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
          background: {
            default: colorMode === 'dark' ? '#000000' : '#ADB4BF', // Dark gray for dark mode, light gray for light mode
            paper: colorMode === 'dark' ? '#000000' : '#ADB4BF', // Slightly lighter for dark mode, pure white for light mode
          },
        },
      }),
    [colorMode]
  );

  return theme;
};
