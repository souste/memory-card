function ScoreBoard({ score }) {
  return (
    <div className="title-scoreboard-container">
      <div>
        <h2>Memory Card Game</h2>
        <p>Get points by clicking on a cat. You lose if you click on the same cat twice!</p>
      </div>
      <div className="scoreboard-container">
        <p>Score: {score}</p>
        <p>Best Score:</p>
      </div>
    </div>
  );
}

export default ScoreBoard;
