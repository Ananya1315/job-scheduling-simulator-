import { useState } from 'react';

function SchedulerForm({ onCalculate }) {
  const [head, setHead] = useState('');
  const [requests, setRequests] = useState('');
  const [selectedAlgorithm, setSelectedAlgorithm] = useState('fcfs'); 
  const [diskSize, setDiskSize] = useState('');
  const [direction, setDirection] = useState('right');

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestArray = requests
      .split(',')
      .map(num => parseInt(num.trim()))
      .filter(num => !isNaN(num));

    const headValue = parseInt(head);
    const diskSizeValue = parseInt(diskSize);

    if (
      isNaN(headValue) ||
      isNaN(diskSizeValue) ||
      requestArray.length === 0
    ) {
      alert("Please enter valid numeric input for all fields.");
      return;
    }

    onCalculate(requestArray, headValue, selectedAlgorithm, diskSizeValue, direction);
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
          required
        />
      </div>

      <div style={{ marginTop: '10px' }}>
        <label>Request Sequence (comma separated):</label><br />
        <input
          type="text"
          value={requests}
          onChange={(e) => setRequests(e.target.value)}
          placeholder="e.g. 55, 58, 39, 18"
          required
        />
      </div>

      <div style={{ marginTop: '10px' }}>
        <label>Disk Size:</label><br />
        <input
          type="number"
          value={diskSize}
          onChange={(e) => setDiskSize(e.target.value)}
          placeholder="e.g. 200"
          required
        />
      </div>

      {/* ✅ Direction dropdown only when SCAN or C-SCAN is selected */}
      {(selectedAlgorithm === 'scan' || selectedAlgorithm === 'c_scan') && (
        <div style={{ marginTop: '10px' }}>
          <label>Direction (for SCAN & C-SCAN):</label><br />
          <select
            value={direction}
            onChange={(e) => setDirection(e.target.value)}
          >
            <option value="right">Right</option>
            <option value="left">Left</option>
          </select>
        </div>
      )}

      <div style={{ marginTop: '10px' }}>
        <label>Select Algorithm:</label><br />
        <select
          value={selectedAlgorithm}
          onChange={(e) => setSelectedAlgorithm(e.target.value)}
        >
          <option value="fcfs">FCFS</option>
          <option value="sstf">SSTF</option>
          <option value="scan">SCAN</option>
          <option value="c_scan">C-SCAN</option>
        </select>
      </div>

      <button type="submit" style={{ marginTop: '10px' }}>
        Run {selectedAlgorithm.toUpperCase()}
      </button>
    </form>
  );
}

export default SchedulerForm;
