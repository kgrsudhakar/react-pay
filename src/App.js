import React from 'react';
import './style.css';
import DataTable from './DataTable.js';
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
    display: 'flex',
    backgroundColor: '#f1f1f1',
    margin: '0px',
    padding: '5px',
  },
});

export default function App() {
  const classes = useStyles();
  return (
    <>
      <ThemeProvider theme={theme}>
        <div className={classes.appMain}>
          <div>
            <DataTable />
          </div>
          <div>
            <Employees />
          </div>
        </div>
        <CssBaseline />
      </ThemeProvider>
    </>
  );
}
