import Header from "./components/Header"
import Scores from "./components/Scores"
import GameOver from "./components/GameOver"
import Card from "./components/Card"
import Footer from "./components/Footer"
import { useState , useEffect} from 'react'

function App() {
  
  const [pokeNames, setPokeNames] = useState([]);
  const [pokeArray, setPokeArray] = useState([1, 2, 3, 4, 5, 6]);
  const [clickedCard, setClickedCard] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const fetchPokeInfo = async(pokemon) => {
    try { 
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  
      if (!response.ok) {
        throw new Error("Could not fetch resource")
      }
  
      const data = await response.json();
      return data;
    } catch(error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const getPokemon = async () => {
      const results = await Promise.all([
        fetchPokeInfo(pokeArray[0]),
        fetchPokeInfo(pokeArray[1]),
        fetchPokeInfo(pokeArray[2]),
        fetchPokeInfo(pokeArray[3]),
        fetchPokeInfo(pokeArray[4]),
        fetchPokeInfo(pokeArray[5]),
      ])
  
      setPokeNames(results.map(pokemon => {
        return {
          name: pokemon.name,
          image: pokemon.sprites.front_default
        }
      }))
    }
     
    getPokemon()
  },[pokeArray])

  function clickCard(pokemon) {
    if (!clickedCard.includes(pokemon)) {
      const sortedArray = pokeArray.sort(() => Math.random() - 0.5);
      setPokeArray([...sortedArray]);
      const newScore = score + 1;
      setScore(newScore);
      setClickedCard([...clickedCard, pokemon]);

      if (newScore > bestScore) {
        setBestScore(newScore);
      };

      if (newScore === 6) {
        setGameOver(true);
      }
      
    } else {
      setScore(0);
      setClickedCard([]);
    };
  }

  const playAgain = () => {
    setGameOver(false);
    setScore(0);
    setBestScore(0);
    setClickedCard([]);
  };

  return (
    <>
      <Header />
      <Scores 
        currScore={score}
        topScore={bestScore}
      />
      {!gameOver ? 
      <section className="game">
         {pokeNames.map(pokemon => <Card key={pokemon.name} image={pokemon.image} name={pokemon.name} clckFunc={() => clickCard(pokemon.name)} />)} 
      </section> :
      <GameOver 
        restart={playAgain}
      />
      }
      <Footer />
    </>
  )
}

export default App
