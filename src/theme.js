import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

export const lightTheme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      type: 'light'
    },
    typography: {
      fontFamily: ['Titillium Web', "Roboto", "Helvetica", "Arial", 'sans-serif']
    }
  })
);

export const darkTheme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      type: "dark",
    },
    typography: {
      fontFamily: ['Titillium Web', "Roboto", "Helvetica", "Arial", 'sans-serif']
    }
  })
);