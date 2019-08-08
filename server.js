const app = require('./app.js');

//Définition du port de l'application. Par défaut : port 3000.
const port = process.env.PORT || 3000;

//Démarrage sur serveur :
app.listen(port, () => {
    console.log(`Server is running on port: ${port} `);
});