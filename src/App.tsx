import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import MainPage from './vue/pages/MainPage';
import "./App.css"
import { useSelector, useDispatch, Provider } from 'react-redux'
import {store} from './data/Store';


export default function App() {
  return (
    <Provider store={store} >
      <div className="app container">
      <MainPage />
    </div>
    </Provider>
  );
}