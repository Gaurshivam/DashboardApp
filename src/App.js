import { Box } from '@mui/material';
import './App.css'
import Rightbar from './Components/Rightbar/Rightbar';
import Sidebar from './Components/Sidebar/Sidebar';

function App() {
  return (
    <Box className='App'>
      <Sidebar />
      <Rightbar />
    </Box>
  );
}

export default App;