function ResultsDisplay({ result }) {

  return (
    <div style={{ marginTop: "2rem" }}>

      <h3>Results</h3>

      <p>
        <strong>Sequence:</strong>{" "}
        {result.sequence.join(" → ")}
      </p>

      <p>
        <strong>Total Seek Time:</strong>{" "}
        {result.total_seek_time}
      </p>

      <p>
        <strong>Average Seek Time:</strong>{" "}
        {result.average_seek_time}
      </p>

    </div>
  );
}

export default ResultsDisplay;