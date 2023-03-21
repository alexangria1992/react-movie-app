import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { Link } from "react-router-dom";
import logoImg from "../logo.png";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div>
        <Link to="/">
          <img src={logoImg} alt="" />
        </Link>
      </div>
      {children}
    </ThemeProvider>
  );
};

export default Layout;
