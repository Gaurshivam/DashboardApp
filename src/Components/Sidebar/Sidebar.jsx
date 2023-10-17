import React from 'react';
import './Sidebar.css'
import CloseIcon from '@mui/icons-material/Close';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import PersonIcon from '@mui/icons-material/Person';
import PriceChangeIcon from '@mui/icons-material/PriceChange';
import AttractionsIcon from '@mui/icons-material/Attractions';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Box } from '@mui/material';

const Sidebar = () => {
  return (
    <Box className='sidebar'>
      <Box className='top'>
        <Box className='logo'>
          <img src='https://static.vecteezy.com/system/resources/previews/000/604/630/original/letter-s-logo-technology-logo-design-concept-template-vector.jpg'
            alt='logo' height={30} width={30} />
          <h2>Dash<span style={{ color: "red" }}>board</span></h2>
        </Box>
        <div className='close'>
        <CloseIcon />
        </div>
      </Box>

      <Box className='SideMid'>
        <a href='/#' >
          <DashboardIcon />
          <h3>Dashboard</h3>
        </a>
        <a href='/#' >
          <ProductionQuantityLimitsIcon />
          <h3>Product</h3>
        </a>
        <a href='/#' >
          <PersonIcon />
          <h3>Cutomers</h3>
        </a>
        <a href='/#' >
          <PriceChangeIcon />
          <h3>Income</h3>
        </a>
        <a href='/#' >
          <AttractionsIcon />
          <h3>Promote</h3>
        </a>
        <a href='/#' >
          <LiveHelpIcon />
          <h3>Help</h3>
        </a>



        <Box className='SideBottom'>
         <img src='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80' alt='Profile'
         />
         <Box >
         <h4 className="Bottom">Shivam Guar</h4>
         <p className="Bottom" style={{fontSize:"10px"}}>Product Manager</p>
         </Box>
         <span><ArrowDropDownIcon /></span>
      </Box>
      </Box>

    
    </Box>
  );
}

export default Sidebar;
