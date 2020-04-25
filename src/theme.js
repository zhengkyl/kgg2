import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

export const lightTheme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      type: 'light'
    }
  })
);

export const darkTheme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      type: "dark",
    },
  })
);