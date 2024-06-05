/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import Card from "./card.jsx";

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export default function DisplayCards({
  addCurrentScore,
  resetScore,
  gameOver,
  cards,
}) {
  const [resetAllCards, setResetAllCards] = useState(false);

  const shuffledCards = shuffleArray(cards);

  function handleResetScore() {
    setResetAllCards(true);
    resetScore();
  }

  useEffect(() => {
    if (resetAllCards) {
      setResetAllCards(false);
    }
  }, [resetAllCards]);

  return (
    <div id="card-container">
      {!gameOver &&
        shuffledCards.map((card) => (
          <Card
            key={card.id}
            name={card.name}
            image={card.image}
            addCurrentScore={addCurrentScore}
            resetScore={handleResetScore}
            resetAllCards={resetAllCards}
          />
        ))}
    </div>
  );
}
