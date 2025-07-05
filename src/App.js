import './App.css';
import { useState } from 'react';

import SchedulerForm from './components/SchedulerForm';
import SimulationBoard from './components/SimulationBoard';
import ResultsDisplay from './components/ResultsDisplay';

import { fcfs } from './algorithm/fcfs';
import { sstf } from './algorithm/sstf';
import { scan } from './algorithm/scan';
import { c_scan } from './algorithm/c_scan';

import FCFSChart from './components/FCFSchart';
import SSTFChart from './components/SSTFchart';
import SCANChart from './components/SCANchart';
import C_SCANChart from './components/C_SCANchart';

function App() {
  const [result, setResult] = useState(null);
  const [selectedAlgorithm, setSelectedAlgorithm] = useState('fcfs');

  const handleCalculate = (requests, head, algorithm, diskSize, direction) => {
    let output;
    const dirFlag = direction === 'right' ? 1 : 0;

    if (algorithm === 'fcfs') {
      output = fcfs(requests, head);
    } else if (algorithm === 'sstf') {
      output = sstf(requests, head);
    } else if (algorithm === 'scan') {
      output = scan(requests, head, diskSize, dirFlag);
    } else if (algorithm === 'c_scan') {
      output = c_scan(requests, head, diskSize, dirFlag);
    }

    setResult(output);
    setSelectedAlgorithm(algorithm);
  };

  return (
    <div className="App" style={{ padding: '2rem' }}>
      <h1 className="heading">Job Scheduling Simulator</h1>

      <div className="container">
        {/* Left: Form */}
        <div className="form-section">
          <SchedulerForm onCalculate={handleCalculate} />
        </div>

        {/* Right: Result output */}
        <div className="result-section">
          <SimulationBoard />

          {result && (
            <>
              <ResultsDisplay result={result} />

              {selectedAlgorithm === 'fcfs' && (
                <FCFSChart sequence={result.sequence} />
              )}
              {selectedAlgorithm === 'sstf' && (
                <SSTFChart sequence={result.sequence} />
              )}
              {selectedAlgorithm === 'scan' && (
                <SCANChart sequence={result.sequence} />
              )}
              {selectedAlgorithm === 'c_scan' && (
                <C_SCANChart sequence={result.sequence} />
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
