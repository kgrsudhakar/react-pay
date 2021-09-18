import React from 'react';
import './style.css';
import OutlinedCard from './DataTable.js';
import Button from '@mui/material/Button';
import { StyledEngineProvider } from '@mui/material/styles';
import {
  makeStyles,
  CssBaseline,
  createMuiTheme,
  ThemeProvider,
} from '@material-ui/core';

import Employees from './pages/Employees/Employees';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#333996',
      light: '#3c44b126',
    },
    secondary: {
      main: '#f83245',
      light: '#f8324526',
    },
    background: {
      default: '#f4f5fd',
    },
  },
  overrides: {
    MuiAppBar: {
      root: {
        transform: 'translateZ(0)',
      },
    },
  },
  props: {
    MuiIconButton: {
      disableRipple: true,
    },
  },
});

const useStyles = makeStyles({
  appMain: {
    paddingLeft: '320px',
    width: '100%',
  },
});

export default function App() {
  const classes = useStyles();
  return (
    <>
      <OutlinedCard />

      <Button variant="contained">Hello World</Button>

      <ThemeProvider theme={theme}>
        <Employees />
        <div className={classes.appMain}>
          {/* <Header /> */}
          <Employees />
        </div>
        <CssBaseline />
      </ThemeProvider>
    </>
  );
}
