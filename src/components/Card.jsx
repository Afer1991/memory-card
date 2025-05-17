

const Card = ({
  image,
  name,
  clckFunc
}) => {
  
  return(
    <div className="card" onClick={clckFunc}>
      <div className="imgContainer">
        <img src={image} alt="" />
      </div>
      <h2>{name}</h2>
    </div>
  );
};

export default Card