import { Box } from '@mui/system';
import React from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import DataProvider from './components/Context/DataProvider';
function App() {
  return (
    <DataProvider>

      <Header />
      <Box sx={{ marginTop: "65px" }}>
        <Home />
      </Box>
    </DataProvider>

  );
}

export default App;
