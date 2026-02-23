import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0a214e",
      contrastText: "#fff",
    },
    secondary: {
      main: "#f6a000",
    },
    background: {
      default: "#f3f7fc",
      paper: "#ffffff",
    },
    text: {
      primary: "#1f2d3d",
      secondary: "#4f6478",
    },
  },
  typography: {
    fontFamily: '"Space Grotesk", "Manrope", sans-serif',
    h1: { fontWeight: 700, letterSpacing: "-0.02em" },
    h2: { fontWeight: 700, letterSpacing: "-0.01em" },
    button: { fontWeight: 700 },
  },
});

export default theme;
