import React from 'react';
import './Home.css'
import Earning from '../Card/Earning';
import Order from '../Card/Order';
import Balance from '../Card/Balance';
import TotalSale from '../Card/TotalSale';
import OverView from '../Card/OverView';
import Customer from '../Card/Customer';
import { Box } from '@mui/material';

const Home = () => {
  return (
    <Box className='Home'>
      <Box className='PageOne'>
      <Earning/>
      <Order />
      <Balance />
      <TotalSale />
      </Box>

      <Box className='PageTwo'>
        <OverView />
        <Customer />
      </Box>
    </Box>
  );
}

export default Home;
