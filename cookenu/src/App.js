import { ThemeProvider } from "@material-ui/core/styles";
import React, { useState } from "react"
import { BrowserRouter } from "react-router-dom";
import theme from "./constants/theme";
import Router from "./routes/Router";
import Header from "./components/Header/Header";



function App() {
  const token = localStorage.getItem("token")
  const [rightButtonText, setRightButtonText] = useState(token ? "Logout" : "Login")

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Header rightButtonText={rightButtonText} setRightButtonText={setRightButtonText} />
      <Router  setRightButtonText={setRightButtonText} />
      </BrowserRouter>
    </ThemeProvider>

  );
}

export default App;
