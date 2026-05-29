import './App.css';
import { useState } from 'react';
import axios from 'axios';

import SchedulerForm from './components/SchedulerForm';
import SimulationBoard from './components/SimulationBoard';
import ResultsDisplay from './components/ResultsDisplay';

import FCFSChart from './components/FCFSchart';
import SSTFChart from './components/SSTFchart';
import SCANChart from './components/SCANchart';
import CSCANChart from './components/CSCANchart';
import ComparisonResults from './components/comparisionResult';


function App() {

  const API_URL = process.env.REACT_APP_API_URL;
  const [result, setResult] = useState(null);

  const [comparisonResult, setComparisonResult] = useState(null);

  const [selectedAlgorithm, setSelectedAlgorithm] =
    useState('fcfs');


  // SINGLE ALGORITHM SIMULATION
  const handleCalculate = async (
    requests,
    head,
    algorithm,
    diskSize,
    direction
  ) => {

    try {

      const response = await axios.post(
        `${API_URL}/stimulate`,
        {
          algorithm: algorithm,
          requests: requests,
          head: head,
          disk_size: diskSize,
          direction: direction
        }
      );

     if (response.data.error) {
  alert(response.data.error);
  setResult(null);
  return;
}

setResult(response.data);
setSelectedAlgorithm(algorithm);

    }
    catch (error) {

      console.error("API Error:", error);

      alert("Backend connection failed");

    }
  };


  // COMPARE ALL ALGORITHMS
  const handleCompare = async (
    requests,
    head,
    diskSize,
    direction
  ) => {

    try {

      const response = await axios.post(
        `${API_URL}/compare`,
        {
          requests: requests,
          head: head,
          disk_size: diskSize,
          direction: direction
        }
      );
if (response.data.error) {
  alert(response.data.error);
  setComparisonResult(null);
  return;
}
      setComparisonResult(response.data);

    }
    catch (error) {

      console.error("Compare API Error:", error);

      alert("Comparison failed");

    }
  };


  return (

    <div className="App" style={{ padding: '2rem' }}>

      <h1 className="heading">
        Job Scheduling Simulator
      </h1>

      <div className="container">

        {/* LEFT SIDE FORM */}
        <div className="form-section">

          <SchedulerForm
            onCalculate={handleCalculate}
            onCompare={handleCompare}
          />

        </div>


        {/* RIGHT SIDE RESULTS */}
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

              {selectedAlgorithm === 'cscan' && (
                <CSCANChart sequence={result.sequence} />
              )}

              {selectedAlgorithm === 'look' && (
                <SCANChart sequence={result.sequence} />
              )}
               {selectedAlgorithm === 'clook' && (
                <CSCANChart sequence={result.sequence} />
              )}

            </>

          )}
          <ComparisonResults
  comparisonResult={comparisonResult}
/>

        </div>

      </div>

    </div>

  );
}

export default App;