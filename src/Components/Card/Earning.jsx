import React from 'react';
import './Common.css'
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';

const Earning = () => {
  return (
    <div className='CommonCard'>
      <div className='CardLogo' style={{backgroundColor:"blue"}}>
      <CurrencyExchangeIcon />
      </div>
      <div className='CardContent'>
      <p>Earning</p>
      <h3>$198K</h3>
      <h6>37.8% this Month</h6>
      </div>
    </div>
  );
}

export default Earning;
