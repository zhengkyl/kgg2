import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

const theme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      primary: {
        main: "#CCF",
      },
      secondary: {
        main: "#000",
      },
    },
  })
);

export default theme;