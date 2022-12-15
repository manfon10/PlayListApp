import { createContext, FC } from "react";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import useToggleColorMode from "./styles/theme";
import AppRouter from "./routes/AppRouter";

const App: FC = () => {
  const ColorModeContext = createContext({ toggleColorMode: () => {} });

  const { colorMode, theme } = useToggleColorMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppRouter />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
