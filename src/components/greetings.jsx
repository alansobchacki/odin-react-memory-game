// eslint-disable-next-line react/prop-types
export default function Greetings({ gameOver }) {
  return (
    <>
      {gameOver ? (
        <>
          <h1>You won the game!</h1>
          <h2>You correctly clicked on every image exactly once.</h2>
        </>
      ) : (
        <>
          <h1>Asian Food Memory Game</h1>
          <h2>
            Get points by clicking on an image but don&apos;t click on any more
            than once!
          </h2>
        </>
      )}
    </>
  );
}
