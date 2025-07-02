import { useState } from 'react';

function SchedulerForm({ onCalculate }) {
  const [head, setHead] = useState('');
  const [requests, setRequests] = useState('');
  const [selectedAlgorithm, setSelectedAlgorithm] = useState('fcfs'); // default

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestArray = requests
      .split(',')
      .map(num => parseInt(num.trim()))
      .filter(num => !isNaN(num));

    const headValue = parseInt(head);

    if (isNaN(headValue) || requestArray.length === 0) {
      alert("Please enter valid input.");
      return;
    }

    // 🔁 Send algorithm to parent App component
    onCalculate(requestArray, headValue, selectedAlgorithm);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Enter Process Data</h2>

      <div>
        <label>Initial Head Position:</label><br />
        <input
          type="number"
          value={head}
          onChange={(e) => setHead(e.target.value)}
        />
      </div>

      <div style={{ marginTop: '10px' }}>
        <label>Request Sequence (comma separated):</label><br />
        <input
          type="text"
          value={requests}
          onChange={(e) => setRequests(e.target.value)}
          placeholder="e.g. 55, 58, 39, 18"
        />
      </div>

      <div style={{ marginTop: '10px' }}>
        <label>Select Algorithm:</label><br />
        <select
          value={selectedAlgorithm}
          onChange={(e) => setSelectedAlgorithm(e.target.value)}
        >
          <option value="fcfs">FCFS</option>
          <option value="sstf">SSTF</option>
          <option value="scan">SCAN</option>
          <option value="c_scan">C_SCAN</option>

        </select>
      </div>

      <button type="submit" style={{ marginTop: '10px' }}>
        Run {selectedAlgorithm.toUpperCase()}
      </button>
    </form>
  );
}

export default SchedulerForm;
