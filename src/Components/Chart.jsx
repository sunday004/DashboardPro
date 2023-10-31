import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import React, { useState, useEffect } from 'react'
import './Chart.css';


const Chart = ({list}) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    setChartData(list);
  }, [list]);


  return (
    <>
    {chartData?
      <div className="Chart">
      {console.log(chartData)}
    <BarChart
      width={400}
      height={300}
      data={chartData}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="datetime" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="temp" fill="#8884d8" />
      
    </BarChart>
    </div>
    :
    <p>Loading...</p>
    }
   
   </>
  );

}

export default Chart;