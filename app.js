//Import d'express et d'autres dépendances nécessaires au fonctionnement de l'application.
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

//Configuration de CORS pour accepter les requêtes provenant du client
/* const corsOptions = {
  //Définir l'adresse du client ici :
  origin: 'http://localhost:8000',
  optionsSuccessStatus: 200,
}; */

//Utilisation du middleware cors pour pouvoir faire des requêtes à partir du client.
app.use(cors());
//Utilisation du middleware bodyParser pour pouvoir traiter les requêtes.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Import des routes de l'API.
const entrepriseRouter = require('./routes/entrepriseRoutes');
const contactRouter = require('./routes/contactRoutes');

//Routes d'accès aux entreprises :
app.use('/api/v1/entreprises', entrepriseRouter);
//Routes d'accès aux contacts des entreprises :
app.use('/api/v1/contacts', contactRouter);


module.exports = app;