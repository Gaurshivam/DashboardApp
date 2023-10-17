import React from 'react';
import './Common.css'
import UpcomingIcon from '@mui/icons-material/Upcoming';

const TotalSale = () => {
  return (
    <div className='CommonCard'>
       <div className='CardLogo' style={{backgroundColor:"red"}}>
      <UpcomingIcon />
      </div>
      <div className='CardContent'>
      <p>Total Sale</p>
      <h3>$98K</h3>
      <h6>11.8% this Month</h6>
      </div>
    </div>
  );
}

export default TotalSale;