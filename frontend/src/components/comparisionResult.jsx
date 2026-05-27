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

      <h3 style={{ marginTop: '1rem' }}>
        Best Algorithm:{" "}
        <span style={{ color: 'green' }}>
          {bestAlgorithm.toUpperCase()}
        </span>
      </h3>

    </div>
  );
}

export default ComparisonResults;