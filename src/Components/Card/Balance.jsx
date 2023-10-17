import React from 'react';
import './Common.css'
import BalanceIcon from '@mui/icons-material/Balance';

const Balance = () => {
  return (
    <div className='CommonCard'>
       <div className='CardLogo' style={{backgroundColor:"pink"}}>
      <BalanceIcon />
      </div>
      <div className='CardContent'>
      <p>Balance</p>
      <h3>$2.4K</h3>
      <h6>7.8% this Month</h6>
      </div>
    </div>
  );
}

export default Balance;