import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function SSTFChart({ sequence }) {
  const chartData = sequence.map((value, index) => ({
    name: `Step ${index}`,
    Position: value,
  }));

  return (
    <div style={{ marginTop: '2rem' }}>
      <h3>SSTF Head Movement Chart</h3>
      <LineChart width={600} height={300} data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis domain={['dataMin - 10', 'dataMax + 10']} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Position" stroke="#8884d8" strokeWidth={2} />
      </LineChart>
    </div>
  );
}

export default SSTFChart;
