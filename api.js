/*Pour faire des requêtes HTTP vers une API en Node.js, vous pouvez utiliser le 
module "node-fetch" ou "axios". Ce sont des bibliothèques très populaires pour 
faire des requêtes HTTP en Node.js.
Voici un exemple de code pour faire une requête GET à l'aide de "node-fetch":*/

const fetch = require('node-fetch');

async function getData() {
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();
  console.log(data);
}

getData();

/*Et voici un exemple de code pour faire une requête GET à l'aide de "axios":*/

const axios = require('axios');

async function getData() {
  const response = await axios.get('https://api.example.com/data');
  console.log(response.data);
}

getData();

/*Pour faire des requêtes POST, vous pouvez utiliser la méthode post pour envoyer des données à l'API:*/

const axios = require('axios');

async function postData() {
  const response = await axios.post('https://api.example.com/data', {
    firstName: 'John',
    lastName: 'Doe'
  });
  console.log(response.data);
}

postData();

/*Il est important de noter que vous devez gérer les erreurs potentielles qui peuvent survenir 
lors de l'exécution de ces requêtes, telles que les erreurs de connexion ou les erreurs de réponse de l'API. 
Vous pouvez gérer les erreurs en utilisant des blocs try/catch ou en traitement les erreurs dans 
les promesses retournées par ces bibliothèques.*/