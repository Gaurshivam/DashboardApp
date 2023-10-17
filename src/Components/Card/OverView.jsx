import React from 'react';
import './Common.css';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import {faker} from '@faker-js/faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 500 })),
      backgroundColor: 'darkviolet',
    },
  ],
};


const OverView = () => {
  return (
    <div className='OverView'>
      <div style={{padding:"5px",marginBottom:"10px"}}>
      <h2>Overview</h2>
      <p style={{fontSize:"12px",marginLeft:"5px",padding:"2px"}}>Monthly earning</p>
      </div>
      <div>
      <RevenueByMonthsChart  />
      </div>
    </div>
  );
}

const RevenueByMonthsChart = () =>{
   
    return(
        <div className='Bar'>
            <Bar options={options} data={data} />
        </div>
    )
}

export default OverView;
