import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, LabelList, ResponsiveContainer } from 'recharts';

function SSTFChart({ sequence }) {
  const data = sequence.map((cylinder, index) => ({
    name: `Step ${index}`,
    cylinder,
  }));

  return (
    <div style={{ marginTop: '2rem' }}>
      <h3>SSTF Movement Chart</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis label={{ value: 'Cylinder', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Bar dataKey="cylinder" fill="#f48fb1">
            <LabelList dataKey="cylinder" position="top" />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SSTFChart;
