import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
const themeBase = {
  palette: {
    type: 'light',
  },
  typography: {
    fontFamily: ['Jost', "Helvetica", "Arial", 'sans-serif']
  },
  breakpoints:{
    values: {
      xs: 0,
      sm: 700,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  }
}

export const lightTheme = responsiveFontSizes(
  createMuiTheme(themeBase)
);

export const darkTheme = 
responsiveFontSizes(
  createMuiTheme({...themeBase,
    palette: {
      type: "dark",
      background:{
        default:'#202020',
        paper:'#303030'
      }
    },
  })
);