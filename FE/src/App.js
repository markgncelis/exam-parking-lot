import { CssBaseline, Stack } from '@mui/material';
// import axios from 'axios'
import Main from './components/Main/Main';
import MainForm from './components/MainForm/MainForm';
import { createContext, useContext, useEffect, useState } from 'react';
import SlotsDisplay from './components/SlotsDisplay/SlotsDisplay';
import MapsDisplay from './components/MapsDisplay/MapsDisplay';
import { ParkingContext } from './context/ParkingContext';

function App() {
  

  return (
    <>
      
        <CssBaseline>
          <div className="App">
            <main>
              <Stack direction={'row'} pt={5} gap={3}>
                <MainForm />
                <MapsDisplay />
              </Stack>
            </main>
          </div>
        </CssBaseline>
      
    </>

  )
}

export default App;
