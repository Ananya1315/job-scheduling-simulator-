function ResultsDisplay({ result }) {
  if (!result) return <p>No data to display yet.</p>;

  return (
    <div>
      <h2>Results</h2>
      <p><strong>Total Head Movement:</strong> {result.totalMovement}</p>
      <p><strong>Sequence:</strong> {result.sequence.join(' → ')}</p>
    </div>
  );
}

export default ResultsDisplay;
