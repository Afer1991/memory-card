

const GameOver = ({restart}) => {

  return(
    <section className="gameOver">
      <div>
        <h2>You won!</h2>
        <div className="btn-container">
          <button onClick={restart}>PLAY AGAIN</button>
        </div>
      </div>
    </section>
  );
};

export default GameOver;