import Header from "./components/Header"
import Scores from "./components/Scores"
import Game from "./components/Game"
import Card from "./components/Card"
import Footer from "./components/Footer"
import { useState , useEffect} from 'react'

function App() {
  
  const [pokeNames, setPokeNames] = useState([]);
  const [pokeArray, setPokeArray] = useState([1, 2, 3, 4, 5, 6]);

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
  
      setPokeNames(results.map(x => {
        return {
          name: x.name,
          image: x.sprites.front_default
        }
      }))
    }
     
    getPokemon()
  },[pokeArray])

  function randomizeArray() {
    const sortedArray = pokeArray.sort(() => Math.random() - 0.5);
    setPokeArray([...sortedArray]);
  }

  return (
    <>
      <Header />
      <Scores />
      <section className="game">
        { pokeNames.map(item => <Card key={item.name} image={item.image} name={item.name} clckFunc={randomizeArray} />) }
      </section>
      <Footer />
    </>
  )
}

export default App
