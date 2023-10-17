import React from 'react';
import './Rightbar.css'
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import { Box } from '@mui/material';

const Rightbar = () => {
  return (
    <Box className='MainBar'>
      <Navbar />
      <Home />
    </Box>
  );
}

export default Rightbar;
