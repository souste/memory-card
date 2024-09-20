function ScoreBoard({ counter }) {
  return (
    <div className="title-scoreboard-container">
      <div>
        <h2>Memory Card Game</h2>
      </div>
      <div className="scoreboard-container">
        <p>Score: {counter}</p>
        <p>Best Score:</p>
      </div>
    </div>
  );
}

export default ScoreBoard;
