import React from 'react';
import './Navbar.css'
import WavingHandIcon from '@mui/icons-material/WavingHand';
import { Box } from '@mui/material';

const Navbar = () => {
  return (
    <Box className='Navbar'>
      <h2>Hello Shivam <WavingHandIcon/></h2>
      <Box className='Input'><input type='text' placeholder='search...' /></Box>
    </Box>
  );
}

export default Navbar;
