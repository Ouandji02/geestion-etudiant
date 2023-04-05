import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import MainPage from './vue/pages/MainPage';
import "./App.css"

export default function App() {
  return (
    <div className="app">
      <MainPage />
    </div>
  );
}