import React from 'react';
import './style.css';
import oldDataTable from './DataTable.js';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import useLocalStorage from 'react-use-localstorage';
import { StyledEngineProvider } from '@mui/material/styles';
import { createTheme } from '@material-ui/core/styles';
import { makeStyles, CssBaseline, ThemeProvider } from '@material-ui/core';

import Employees from './pages/Employees/Employees';
import GridData from './pages/Employees/GridData';

const theme = createTheme({
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
    justify: 'center',
  },
});

export default function App() {
  const classes = useStyles();
  return (
    <>
      <ThemeProvider theme={theme}>
        {/* <Box sx={{ display: 'block' }}> */}
        <div className={classes.appMain}>
          <GridData />
          <Employees />
        </div>
        {/* </Box>
        <Box sx={{ display: 'block' }}>
          <div className={classes.appMain}>
            <Employees />
          </div>
        </Box> */}
        <CssBaseline />
      </ThemeProvider>
    </>
  );
}
