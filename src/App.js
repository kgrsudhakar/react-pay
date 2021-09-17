import React from 'react';
// import './style.css';
import Dashboard from './controllers/Dashboard.js';
import Button from '@mui/material/Button';

export default function App() {
  // return (
  //   <div>
  //     <h1>Hello StackBlitz!</h1>
  //     <p>Start editing to see some magic happen :)</p>
  //     <Dashboard />
  //   </div>
  // );
  return (
    <>
      <Dashboard />
      <Button variant="contained">Hello World</Button>
    </>
  );
}
