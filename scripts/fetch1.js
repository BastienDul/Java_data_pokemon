// Étape 1 : Définir l'URL de l'API Pokémon
const apiUrl = "https://pokebuildapi.fr/api/v1/pokemon/";


let selectedPokemonData = null; // Variable pour stocker les données du Pokémon sélectionné



// Étape 2 : Sélectionner les éléments HTML
const form = document.querySelector("form"); // Sélectionnez le formulaire
const resultatElement = document.querySelector("#resultat"); // Sélectionnez la balise où afficher les résultats
const select = document.getElementById("selectCreation"); // Sélectionnez le menu déroulant
let boutonAfficher = null;
boutonAfficher = document.querySelector('button[name="pokemon"]'); // Sélectionnez le bouton "Afficher"
const boutonDetail = document.querySelector('button[name="carac"]'); // Selectionenr le bouton créer en JS

// Étape 3 : Effectuer une requête API pour obtenir la liste complète des Pokémon
fetch(apiUrl)
  .then((response) => response.json()) // Convertir la réponse en JSON
  .then((data) => {
    // Remplir le menu déroulant avec les noms des Pokémon
    for (let i = 0; i < data.length; i++) {
      const pokemon = data[i];
      const option = document.createElement("option"); // Créez une nouvelle option
      option.value = i + 1; // Utilisez l'indice + 1 comme valeur (identifiant) de l'option
      option.text = pokemon.name; // Définissez le texte de l'option comme le nom du Pokémon
      select.appendChild(option); // Ajoutez l'option au menu déroulant
    }
  })
  .catch((error) => {
    console.error("Erreur lors de la requête API : " + error); // Gérez les erreurs
  });

// Étape 4 : Ajouter un gestionnaire d'événements "click" au bouton "Afficher"
boutonAfficher.addEventListener("click", function () {
  const selectedPokemonIndex = parseInt(select.value); // Récupérez l'indice du Pokémon sélectionné


  

  if (!isNaN(selectedPokemonIndex)) {
    // Effectuer une nouvelle requête API pour obtenir les détails du Pokémon sélectionné
    fetch(apiUrl + selectedPokemonIndex)
      .then((response) => response.json()) // Convertir la réponse en JSON
      .then((selectedPokemon) => {
        // Stocker les informations du Pokémon sélectionné dans la variable selectedPokemonData
        selectedPokemonData = selectedPokemon;
        // Afficher les informations du Pokémon sélectionné dans la balise résultat
        resultatElement.innerHTML = `
          <h2>Voici les informations de ${selectedPokemon.name}</h2>
          <img src="${selectedPokemon.image}">
          <p>Élément : ${selectedPokemon.apiTypes
            .map((type) => type.name)
            .join(", ")}</p>
          ${selectedPokemon.apiEvolutions &&
            selectedPokemon.apiEvolutions.length > 0
            ? `<p>Évolution : ${selectedPokemon.apiEvolutions
              .map((evolution) => evolution.name)
              .join(", ")}</p>`
            : "<p>Aucune évolution.</p>"
          }
            <button type="submit" name="caract"><a href="./carateristique.html" target="_blank">Caractéristique</a></button>
        `;

        boutonDetail.addEventListener("click", function () {
          const selectedPokemonData = selectedPokemonData;
          const queryString = `caracteristique.html?pokemonData=${encodeURIComponent(JSON.stringify(selectedPokemonData))}`;
          window.location.href = queryString;
        });
        

      })
      .catch((error) => {
        console.error("Erreur lors de la requête API : " + error); // Gérez les erreurs
      });
  } else {
    console.error("Sélection de Pokémon invalide.");
  }


});

// Étape 5 : Ajouter un gestionnaire d'événements "submit" au formulaire (pour gérer la soumission)
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Empêchez la soumission du formulaire par défaut
});




