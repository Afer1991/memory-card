import svg from "../assets/react.svg"

const Card = () => {
  
  return(
    <div className="card">
      <div className="imgContainer">
        <img src={svg} alt="" />
      </div>
      <h2>Pokemon</h2>
    </div>
  );
};

export default Card