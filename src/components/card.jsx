/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

export default function Card({
  name,
  image,
  addCurrentScore,
  resetScore,
  resetAllCards,
}) {
  const [, setIsClicked] = useState(false);
  const [counter, setCounter] = useState(0);

  function handleClick() {
    if (counter > 0) {
      setIsClicked(false);
      setCounter(0);
      resetScore();
      return;
    }

    setIsClicked(true);
    setCounter(1);
    addCurrentScore();
  }

  useEffect(() => {
    if (resetAllCards) {
      setIsClicked(false);
      setCounter(0);
    }
  }, [resetAllCards]);

  return (
    <div onClick={handleClick} className="card">
      <p>{name}</p>
      <img className="card-image" src={image} alt={name} />
    </div>
  );
}
