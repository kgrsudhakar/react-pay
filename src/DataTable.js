import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { experimentalStyled as styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function createData(name, calories) {
  return { name, calories };
}

const rows = [
  createData('paypal', 'English'),
  createData('iphone', 'English(Poland)'),
  createData('paypalbalance', 'Englsih(United States)'),
];

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-flex', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

function handle(row) {
  console.log('test row click', row);
  //const [rowName, setRowname] = useState('');
  // const [rowCalories, setRowcalories] = useState('');
  // const data = {};
  // data = row;
  // rowName = data.name;
  // var rowCalories = data.calories;
  //console.log(data, rowName, rowCalories);
}

const card = (
  <React.Fragment>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Keyword (Regex)</TableCell>
            <TableCell>Locale</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              onClick={() => handle(row)}
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>{row.calories}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </React.Fragment>
);

const modal = (
  <React.Fragment>
    <CardContent>
      <Typography
        sx={{ fontSize: 14 }}
        color="text.secondary"
        gutterBottom
      ></Typography>
      <Typography variant="h5" component="div"></Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Add</Button>
    </CardActions>
  </React.Fragment>
);

export default function DataTable() {
  return (
    <Box>
      <Grid>
        <Grid item>
          <Item>{card}</Item>
        </Grid>
        {/* <Grid item md={6}>
          <Item>{modal}</Item>
        </Grid> */}
      </Grid>
    </Box>
  );
}
