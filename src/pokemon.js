const pokeArray = [];

const fetchPokeInfo = async(pokemon) => {
  try { 
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    if (!response.ok) {
      throw new Error("Could not fetch resource")
    }

    const data = await response.json();
    returnPokeInfo(data);
  } catch(error) {
    console.log(error);
  }
}

const returnPokeInfo = (pokemon) => {
  const name = pokemon.forms[0].name;
  const img = pokemon.sprites.front_default;
  const id = pokemon.id;
  pokeArray.push({ id, name, img });
};

fetchPokeInfo("bulbasaur");
fetchPokeInfo(2);
fetchPokeInfo(3);
fetchPokeInfo(4);
fetchPokeInfo(5);
fetchPokeInfo(6);

console.log(pokeArray);