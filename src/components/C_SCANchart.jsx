// src/components/CSCANChart.js
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function C_SCANChart({ sequence }) {
  const chartData = sequence.map((value, index) => ({
    step: index,
    head: value,
  }));

  return (
    <div style={{ marginTop: '2rem' }}>
      <h3>C-SCAN Head Movement Chart</h3>
      <LineChart
        width={600}
        height={300}
        data={chartData}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="step" label={{ value: "Step", position: "insideBottom", offset: -5 }} />
        <YAxis label={{ value: "Track", angle: -90, position: "insideLeft" }} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="head" stroke="#00bcd4" strokeWidth={2} />
      </LineChart>
    </div>
  );
}

export default C_SCANChart;
