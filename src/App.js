import React, { useState, useEffect } from 'react';
import './style.css';
// import ReactTable from 'react-table'
// import 'react-table/react-table.css'
import axios from 'axios';
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

const fetchData = async () => {
  const res = await fetch('https://swapi.dev/api/people/');
  const json = await res.json();
  return json.result;
};

export default function App() {
  const classes = useStyles();

  // const [data, setData] = useState({});

  // useEffect(() => {
  //   axios
  //     .get('https://lq-time-tracking.firebaseio.com/user.json')
  //     .then(function (response) {
  //       //const data1 = response.data;
  //       setData(response.data);
  //       console.log(response.data);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }, []);

  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchData().then((employees) => {
      setEmployees(employees);
    });
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        {/* <Box sx={{ display: 'block' }}> */}
        <div className={classes.appMain}>
          {/* <GridData />
          <Employees /> */}
          {/* <ReactTable
    data={...data}
    columns={columns}
    pivotBy={ ['Date', 'Name']}
  /> */}
        </div>
        {/* </Box>
        <Box sx={{ display: 'block' }}>
          <div className={classes.appMain}>
            <Employees />
          </div>
        </Box> */}
        <div>
          {employees.map((employee) => (
            <div key={employee.id}>{employee.name}</div>
          ))}
        </div>
        <CssBaseline />
      </ThemeProvider>
    </>
  );
}
