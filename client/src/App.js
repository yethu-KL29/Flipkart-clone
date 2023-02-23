import { Box } from '@mui/system';
import React from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
function App() {
  return (
    <div className="App">
      <Header />
      <Box sx={{marginTop:"65px"}}>
        <Home />
      </Box>
    </div>
  );
}

export default App;
