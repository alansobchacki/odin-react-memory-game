import { useState, useEffect } from "react";

import "./styles/App.css";
import Footer from "./components/footer.jsx";
import Greetings from "./components/greetings.jsx";
import Scoreboard from "./components/scoreboard.jsx";
import DisplayCards from "./components/cardHandler.jsx";
import { cards as initialCards } from "./components/data.jsx";

const UNSPLASH_ACCESS_KEY = "4zAWY2u-vTzknCrBzHnnH4ScBNI-bWpOQxa4QcQcx1Y";

function App() {
  const [cards, setCards] = useState(initialCards);
  const [currentScore, setCurrentScore] = useState(0);
  const [maxScore, setMaxScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    async function fetchImages() {
      try {
        const storedCards = JSON.parse(localStorage.getItem("cards"));
        if (storedCards) {
          setCards(storedCards);
        } else {
          const updatedCards = await Promise.all(
            cards.map(async (card) => {
              const response = await fetch(
                `https://api.unsplash.com/search/photos?query=${card.name}&client_id=${UNSPLASH_ACCESS_KEY}&per_page=1`
              );
              const data = await response.json();
              const imageUrl =
                data.results[0]?.urls?.small || "default_image_url";
              return {
                ...card,
                image: imageUrl,
              };
            })
          );
          setCards(updatedCards);
          localStorage.setItem("cards", JSON.stringify(updatedCards));
        }
      } catch (error) {
        console.error("Error fetching images from Unsplash:", error);
      }
    }

    fetchImages();
  }, []);

  function addCurrentScore() {
    const nextScore = currentScore + 1;
    setCurrentScore(nextScore);

    if (nextScore === 12) {
      setMaxScore(12);
      setGameOver(true);
    }
  }

  function resetScore() {
    if (currentScore > maxScore) setMaxScore(currentScore);
    setCurrentScore(0);
  }

  return (
    <div id="main-container">
      <Greetings gameOver={gameOver} />
      <Scoreboard currentScore={currentScore} maxScore={maxScore} />
      <DisplayCards
        addCurrentScore={addCurrentScore}
        resetScore={resetScore}
        gameOver={gameOver}
        cards={cards}
      />
      <Footer />
    </div>
  );
}

export default App;
