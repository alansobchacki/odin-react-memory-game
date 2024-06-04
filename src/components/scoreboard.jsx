// eslint-disable-next-line react/prop-types
export default function Scoreboard({ currentScore, maxScore }) {
  return (
    <div className="scoreboard">
      <p>Your Previous Best Score: {maxScore} / 12 </p>
      <p>Your Current Score: {currentScore} / 12</p>
    </div>
  );
}
