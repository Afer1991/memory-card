

const GameOver = ({restart}) => {

  return(
    <section className="gameOver">
      <div>
        <p>You won!</p>
        <button onClick={restart}>Play Again</button>
      </div>
    </section>
  );
};

export default GameOver;