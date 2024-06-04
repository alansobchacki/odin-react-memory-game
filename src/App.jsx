import "./styles/App.css";
import { useState } from "react";
import Greetings from "./components/greetings.jsx";
import Scoreboard from "./components/scoreboard.jsx";
import DisplayCards from "./components/cardHandler.jsx";

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [maxScore, setMaxScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  function addCurrentScore() {
    setCurrentScore(currentScore + 1);

    const nextScore = currentScore + 1;
    if (nextScore == 12) {
      setMaxScore(12);
      setGameOver(true);
    }
  }

  function resetScore() {
    if (currentScore >= 1) {
      if (currentScore > maxScore) setMaxScore(currentScore);
    }

    setCurrentScore(0);
  }

  return (
    <div>
      <Greetings gameOver={gameOver} />
      <Scoreboard currentScore={currentScore} maxScore={maxScore} />
      <DisplayCards
        addCurrentScore={addCurrentScore}
        resetScore={resetScore}
        gameOver={gameOver}
      />
    </div>
  );
}

export default App;
