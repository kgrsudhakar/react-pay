import React, { useState } from 'react';
import EmployeeForm from './EmployeeForm';
import PageHeader from '../../components/PageHeader';
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import {
  Paper,
  makeStyles,
  TableBody,
  TableRow,
  TableCell,
  Toolbar,
  InputAdornment,
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

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(1),
    padding: theme.spacing(3),
  },
  searchInput: {
    width: '75%',
  },
  newButton: {
    position: 'absolute',
    right: '10px',
  },
}));

const headCells = [
  { id: 'fullName', label: 'Doc ID' },
  { id: 'email', label: 'Channel' },
  { id: 'department', label: 'User Experience' },
  { id: 'actions', label: 'Actions', disableSorting: true },
];

// const directCells = [
//     { id: 'fullName', label: 'Keyword' },
//     { id: 'email', label: 'Display Name' },
//     // { id: 'mobile', label: 'Mobile Number' },
//     { id: 'segment', label: 'Segment' },
//     { id: 'url', label: 'URL' },
//     { id: 'appname', label: 'App Name' },
//     { id: 'actions', label: 'Actions', disableSorting: true }
// ]

export default function Employees() {
  const classes = useStyles();
  const [recordForEdit, setRecordForEdit] = useState(null);
  // const [recordForEdit1, setRecordForEdit1] = useState(null)
  const [records, setRecords] = useState(employeeService.getAllEmployees());
  const [filterFn, setFilterFn] = useState({
    fn: (items) => {
      return items;
    },
  });
  const [openPopup, setOpenPopup] = useState(false);
  // const [openPopup1, setOpenPopup1] = useState(false)

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

  // const addOrEdit1 = (employee, resetForm) => {
  //     if (employee.id == 0)
  //         employeeService.insertEmployee(employee)
  //     else
  //         employeeService.updateEmployee(employee)
  //     resetForm()
  //     setRecordForEdit1(null)
  //     setOpenPopup1(false)
  //     setRecords(employeeService.getAllEmployees())
  // }

  const openInPopup = (item) => {
    setRecordForEdit(item);
    setOpenPopup(true);
  };

  // const openInPopup1 = item => {
  //     setRecordForEdit1(item)
  //     setOpenPopup1(true)
  // }

  return (
    <>
      <Paper className={classes.pageContent}>
        <Toolbar>
          <PageHeader title="Pinned Article" />
          <Controls.Button
            text="Add New"
            variant="outlined"
            startIcon={<AddIcon />}
            className={classes.newButton}
            onClick={() => {
              setOpenPopup(true);
              setRecordForEdit(null);
            }}
          />
        </Toolbar>
        <TblContainer>
          <TblHead />
          <TableBody>
            {recordsAfterPagingAndSorting().map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.fullName}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.department}</TableCell>
                <TableCell>
                  <Controls.ActionButton
                    color="primary"
                    onClick={() => {
                      openInPopup(item);
                    }}
                  >
                    <EditOutlinedIcon fontSize="small" />
                  </Controls.ActionButton>
                  <Controls.ActionButton color="secondary">
                    <CloseIcon fontSize="small" />
                  </Controls.ActionButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TblContainer>
      </Paper>
      <Popup
        title="Pinned Article"
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <EmployeeForm recordForEdit={recordForEdit} addOrEdit={addOrEdit} />
      </Popup>
    </>
  );
}
