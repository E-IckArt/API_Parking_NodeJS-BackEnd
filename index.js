// Appel des modules
const express = require('express');
const parkings = require('./parkings.json');
const app = express();
const path = require('path');

// Définition des variables
const host = 'localhost';
const port = 8080;

// Ajout du Middleware pour récupérer les données et et interpréter le body passés dans la requête POST
app.use(express.json());

/*
 * Définition des routes
 */

// Définition de la route GET/parkings
app.get('/parkings', (req, res) => {
    res.status(200).json(parkings);
});

// Définition de la route GET/parkings/:id
app.get('/parkings/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const parking = parkings.find((parking) => parking.id === id);
    res.status(200).json(parking);
});

// Définition de la route POST/parking

// Ajout du middleware de redirection vers la page index.html
app.use(express.static(path.join(__dirname, 'public')));

// Server setup
app.listen(port, host, () => {
    console.log(`Serveur is running on http://${host}:${port}`);
});