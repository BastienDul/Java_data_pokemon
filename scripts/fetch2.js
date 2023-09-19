const selection = localStorage.getItem("selection");
console.log("Sélection de l'utilisateur : " + selection);
const resultatElement = document.querySelector("#detailsPokemon"); // Sélectionnez la balise où afficher les résultats
//Connexion vers l'API pour récupérer les données
fetch("https://pokebuildapi.fr/api/v1/pokemon/" + selection)

    .then(response => response.json())
    .then(selectedPokemon => {
      resultatElement.innerHTML = `
      <h2>Caractéristique de ${selectedPokemon.name}</h2>
      <p>Point de vie : ${selectedPokemon.stats.attack}</p>
      <p>Point de vie : ${selectedPokemon.stats.defense}</p>
      <p>Point de vie : ${selectedPokemon.stats.special_attack}</p>
      <p>Point de vie : ${selectedPokemon.stats.special_defense}</p>
      <p>Point de vie : ${selectedPokemon.stats.speed}</p>
        <button type="submit" name="caract"><a href="./index.html">Retour à la selection des pokémons</a></button>
    `;



    })