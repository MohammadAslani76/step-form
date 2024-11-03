import {useContext} from "react";
import {DataContext} from "./context/context.jsx";
import {cacheRTL, darkTheme, lightTheme} from "./components/ui/theme.jsx";
import {CacheProvider} from "@emotion/react";
import {ThemeProvider} from "@mui/material";
import FormContainer from "./components/FormContainer.jsx";

function App() {

    const value = useContext(DataContext)
    const [darkMode] = value.darkMode;

    const theme = darkMode ? darkTheme : lightTheme

  return (
      <CacheProvider value={cacheRTL}>
          <ThemeProvider theme={theme}>
            <FormContainer/>
          </ThemeProvider>
      </CacheProvider>
  )
}

export default App