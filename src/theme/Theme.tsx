import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

const blueDark = '#18202c';
const blueLight = '#009be5'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: `${blueDark}`,
    },
    secondary: {
      main: `${blueLight}`,
    },
  }
});

export default theme;
