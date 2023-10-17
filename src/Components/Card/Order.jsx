import React from 'react';
import './Common.css'
import GradingIcon from '@mui/icons-material/Grading';

const Order = () => {
  return (
    <div className='CommonCard'>
     <div className='CardLogo' style={{backgroundColor:"yellowgreen"}}>
      <GradingIcon />
      </div>
      <div className='CardContent'>
      <p>Order</p>
      <h3>$1.8K</h3>
      <h6>7.8% this Month</h6>
      </div>
    </div>
  );
}

export default Order;