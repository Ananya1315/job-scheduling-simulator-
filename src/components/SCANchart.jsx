import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

function SCANChart({ sequence }) {
  const data = sequence.map((pos, index) => ({
    step: index,
    position: pos
  }));

  return (
    <div style={{ marginTop: '2rem' }}>
      <h2>SCAN Head Movement Visualization</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="step" label={{ value: "Step", position: "insideBottomRight", offset: -5 }} />
          <YAxis label={{ value: "Disk Position", angle: -90, position: "insideLeft" }} />
          <CartesianGrid stroke="#ccc" />
          <Tooltip />
          <Line type="monotone" dataKey="position" stroke="#8884d8" dot />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SCANChart;
