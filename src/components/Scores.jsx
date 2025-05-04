

const Scores = ({
  currScore = 0,
  topScore = 6
}) => {

  return(
    <section className="scores">
      <div>
        <div className="scoreContainer">
          <p className="bold">Current Score:</p>
          <p>{currScore}</p>
        </div>
        <div className="scoreContainer">
          <p className="bold">Best Score:</p>
          <p>{topScore}</p>
        </div>
      </div>
    </section>
  );
};

export default Scores