import React from 'react';
import './style.css';
import OutlinedCard from './DataTable.js';
import Button from '@mui/material/Button';
import { StyledEngineProvider } from '@mui/material/styles';

export default function App() {
  return (
    <>
      <OutlinedCard />

      <Button variant="contained">Hello World</Button>
    </>
  );
}
