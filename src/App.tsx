import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

import { Dashboard } from "./containers";
import { Theme, ThemeContext } from "./context/themeContext";
import { GlobalStyles } from "./styles/global";
import { lightTheme, darkTheme } from "./styles/theme";

const App: React.FC = () => {
  const [theme, setTheme] = useState(Theme.LightTheme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider
        theme={theme === Theme.LightTheme ? lightTheme : darkTheme}
      >
        <GlobalStyles />
        <Dashboard />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default App;
