import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

export const lightTheme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      type: 'light',
      // secondary:{
      //   main:'#fafafa',
      // },
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
      // secondary:{
      //   main:'#424242',
      // },
      background:{
        default:'#202020',
        paper:'#303030'
      }
    },
    typography: {
      fontFamily: ['Titillium Web', "Roboto", "Helvetica", "Arial", 'sans-serif']
    }
  })
);