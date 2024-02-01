import { CssBaseline, Stack } from '@mui/material';
import MainForm from './components/MainForm/MainForm';
import MapsDisplay from './components/MapsDisplay/MapsDisplay';

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
