import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, LabelList, ResponsiveContainer } from 'recharts';

function SCANChart({ sequence }) {
  const data = sequence.map((cylinder, index) => ({
    name: `Step ${index}`,
    cylinder,
  }));

  return (
    <div style={{ marginTop: '2rem' }}>
      <h3>SCAN Movement Chart</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis label={{ value: 'Cylinder', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Bar dataKey="cylinder" fill="#90caf9">
            <LabelList dataKey="cylinder" position="top" />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SCANChart;
