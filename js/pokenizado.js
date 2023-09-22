const pokeApi = "https://pokeapi.co/api/v2/pokemon/" + localStorage.getItem("ID Poke");

const fetchAPI = async () => {
  const response = await fetch(pokeApi);
  const data = await response.json();
  return data;
};

const displayPokemonData = async () => {
  try {
    const data = await fetchAPI();

   
    const name = data.name;
    const imageUrl = data.sprites.front_default;

    
    const pokemonNameElement = document.createElement("h1");
    pokemonNameElement.textContent = `Sos un : ${name}`;

    const pokemonImageElement = document.createElement("img");
    pokemonImageElement.src = imageUrl;
    pokemonImageElement.alt = `Imagen de ${name}`;

    
    const container = document.getElementById("pokemon-container");
    container.innerHTML = "";
    container.appendChild(pokemonNameElement);
    container.appendChild(pokemonImageElement);
  } catch (error) {
    console.error("Error al obtener y mostrar los datos del Pokémon:", error);
  }
};

displayPokemonData();
