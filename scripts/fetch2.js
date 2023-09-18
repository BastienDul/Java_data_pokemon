// Dans fetch2.js sur la page caracteristique.html
const params = new URLSearchParams(window.location.search);
const pokemonDataParam = params.get("pokemonData");

if (pokemonDataParam) {
  const selectedPokemonData = JSON.parse(decodeURIComponent(pokemonDataParam));

  // Vous pouvez maintenant utiliser selectedPokemonData pour afficher les données du Pokémon sur cette page
}