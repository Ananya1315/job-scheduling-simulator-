import React from 'react';

function ComparisonResults({ comparisonResult }) {

  if (!comparisonResult) {
    return null;
  }

  const results = comparisonResult.results;
  const bestAlgorithm = comparisonResult.best_algorithm;

  return (
    <div style={{ marginTop: '2rem' }}>

      <h2>Algorithm Comparison</h2>

      <table
        border="1"
        cellPadding="10"
        style={{
          borderCollapse: 'collapse',
          width: '100%',
          textAlign: 'center'
        }}
      >

        <thead>
          <tr>
            <th>Algorithm</th>
            <th>Total Seek Time</th>
            <th>Average Seek Time</th>
          </tr>
        </thead>

        <tbody>

          {Object.keys(results).map((algorithm) => (

            <tr
              key={algorithm}
              style={{
                backgroundColor:
                  algorithm === bestAlgorithm
                    ? '#d4edda'
                    : 'white'
              }}
            >

              <td>{algorithm.toUpperCase()}</td>

              <td>
                {results[algorithm].total_seek_time}
              </td>

              <td>
                {results[algorithm].average_seek_time}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

      <div
  style={{
    backgroundColor: "#e8f5e9",
    border: "2px solid #4caf50",
    borderRadius: "10px",
    padding: "15px",
    marginTop: "20px"
  }}
>
  <h3>🏆 Recommended Algorithm</h3>

  <p>
    <strong>{bestAlgorithm}</strong> achieved the lowest seek time for
    the current workload.
  </p>

  <p>
    This algorithm is expected to provide the best disk performance
    for the given request sequence.
  </p>
</div>
<div className="insights-card">
  <h2>📘 Algorithm Insights</h2>

  <p><strong>FCFS:</strong> Simple and fair but may result in higher seek times.</p>

  <p><strong>SSTF:</strong> Usually produces the lowest seek time but can cause starvation.</p>

  <p><strong>SCAN:</strong> Balanced performance and suitable for heavy workloads.</p>

  <p><strong>CSCAN:</strong> Provides more uniform waiting times.</p>

  <p><strong>LOOK:</strong> Similar to SCAN but avoids unnecessary travel to disk ends.</p>

  <p><strong>CLOOK:</strong> Similar to CSCAN with improved efficiency.</p>
</div>
    </div>
    
  );
}

export default ComparisonResults;