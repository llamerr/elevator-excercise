import {
  createTheme,
  CssBaseline,
  ThemeOptions,
  ThemeProvider,
} from "@mui/material";
import { useDarkMode } from "usehooks-ts";

const light: ThemeOptions = {
  palette: {
    mode: "light",
  },
};

const dark: ThemeOptions = {
  palette: {
    mode: "dark",
  },
};

const MUIThemeProvider = ({ children }) => {
  // The light theme is used by default
  const { isDarkMode, toggle, enable, disable } = useDarkMode();

  return (
    <ThemeProvider theme={isDarkMode ? createTheme(dark) : createTheme(light)}>
      <CssBaseline enableColorScheme />
      {children}
    </ThemeProvider>
  );
};

export default MUIThemeProvider;
