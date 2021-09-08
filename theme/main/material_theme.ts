import { createMuiTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";

export const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#fff",
      main: "rgb(23, 105, 170)",
      dark: "#000",
    },
    secondary: {
      main: "#f44336",
    },
    background: {
      default: "#f44336",
    },
  },
});
