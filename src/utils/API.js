export const fetchCharacters = async () => {
  try {
    const response = await fetch("https://rickandmortyapi.com/api/character/");
    const dataCharacters = await response.json();
    return dataCharacters;
  } catch (error) {
    console.log("Error al obtener la información de la API");
  }
};
