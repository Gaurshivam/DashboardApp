import React from 'react';
import './Common.css';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['Order', 'Total Sale','Earning', 'Balance', ],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 5, 2, 3],
      backgroundColor: [
        'red',
        'yellow',
        'blue',
        'green',
      ],
      borderColor: [
        'red',
        'yellow',
        'blue',
        'green',
      ],
      borderWidth: 1,
    },
  ],
};

const Customer = () => {
  return (
    <div className='Customer'>
      <div style={{padding:"5px",marginBottom:"20px"}}>
        <h2>Customer</h2>
        <p style={{fontSize:"12px",marginLeft:"5px",padding:"2px"}}>Customer that buy products</p>
      </div>
      <div>
      <PirCx />
      </div>
    </div>
  );
}
 

const PirCx = () => {
  return <Pie data={data} />;
}

export default Customer;
