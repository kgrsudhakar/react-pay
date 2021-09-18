import React, { useState } from 'react';
import {
  Paper,
  makeStyles,
  TableBody,
  TableRow,
  TableCell,
} from '@material-ui/core';
import useTable from '../../components/useTable';
import * as employeeService from '../../services/employeeService';
import Controls from '../../components/controls/Controls';
import { Search } from '@material-ui/icons';
import AddIcon from '@material-ui/icons/Add';
import Popup from '../../components/Popup';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import CloseIcon from '@material-ui/icons/Close';
import DirectLinks from './DirectLinks';
import Table from '@mui/material/Table';

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(1),
    padding: theme.spacing(3),
  },
  searchInput: {
    width: '75%',
  },
}));

const headCells = [
  { id: 'keyword', label: 'Keyword (Regex)' },
  { id: 'locale', label: 'Locale' },
];

function createData(keyword, locale) {
  return { keyword, locale };
}

const rows = [
  createData('paypal', 'English'),
  createData('iphone', 'English(Poland)'),
  createData('paypalbalance', 'Englsih(Russia)'),
  createData('1512', 'fr_XC)'),
  createData('1099', 'Englsih(United States)'),
  createData('email', 'fr_XC'),
  createData('declare', 'es_XC'),
  createData('profile', 'Englsih(United States)'),
  createData('admin', 'fr_XC'),
];

export default function GridData() {
  const classes = useStyles();
  const [recordForEdit, setRecordForEdit] = useState(null);
  const [records, setRecords] = useState(employeeService.getAllEmployees());
  const [filterFn, setFilterFn] = useState({
    fn: (items) => {
      return items;
    },
  });
  const [openPopup, setOpenPopup] = useState(false);

  const { TblContainer, TblHead, TblPagination, recordsAfterPagingAndSorting } =
    useTable(records, headCells, filterFn);

  const handleSearch = (e) => {
    let target = e.target;
    setFilterFn({
      fn: (items) => {
        if (target.value === '') return items;
        else
          return items.filter((x) =>
            x.fullName.toLowerCase().includes(target.value)
          );
      },
    });
  };

  const addOrEdit = (employee, resetForm) => {
    console.log('test service', employee);
    if (employee.id == 0) employeeService.insertEmployee(employee);
    else employeeService.updateEmployee(employee);
    resetForm();
    setRecordForEdit(null);
    setOpenPopup(false);
    setRecords(employeeService.getAllEmployees());
  };

  function handle(row) {
    console.log('test row click', row);
  }

  return (
    <>
      <Paper className={classes.pageContent}>
        <TblContainer>
          <Table aria-label="collapsible table">
            <TblHead />
            <TableBody>
              {/* {recordsAfterPagingAndSorting().map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.keyword}</TableCell>
                <TableCell>{item.locale}</TableCell>
              </TableRow>
            ))} */}
              {rows.map((row) => (
                <TableRow
                  onClick={() => handle(row)}
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.keyword}
                  </TableCell>
                  <TableCell>{row.locale}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TblContainer>
      </Paper>
      {/* <Popup
        title="Pinned Article"
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <EmployeeForm recordForEdit={recordForEdit} addOrEdit={addOrEdit} />
      </Popup> */}
    </>
  );
}
