import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, LabelList } from 'recharts';

const FCFSChart = ({ sequence }) => {
  const data = sequence.map((position, index) => ({
    name: `Step ${index}`,
    position: position,
  }));

  return (
    <div>
      <h3>FCFS Movement Chart</h3>
      <BarChart
        width={600}
        height={300}
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis label={{ value: 'Cylinder', angle: -90, position: 'insideLeft' }} />
        <Tooltip />
        <Bar dataKey="position" fill="#8884d8">
          <LabelList dataKey="position" position="top" />
        </Bar>
      </BarChart>
    </div>
  );
};


  

export default FCFSChart;
