/* definition d'express , du router et des requier eventuel*/
const express = require('express');
const entrepriseRouter = express.Router();

const Entreprise = require('../controllers/entrpriseController');

//recuperation des entreprises
entrepriseRouter.get('/', async (req, res) => {
    try {
        let result = await Entreprise.findAllEntreprises();
        res.json(result);
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});

//recuperation d'une entreprise
entrepriseRouter.get('/:id', async (req, res) => {
    try {
        let result = await Entreprise.findOneEntreprise(req.params.id);
        res.json(result);
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});

/*ajout d'une entreprise dans la base de donnée */
entrepriseRouter.post('/', async (req, res) => {
    try {
        const entreprise = req.body;
        let result = await Entreprise.newEntreprise(entreprise);
        res.json(result);
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});

/*modification d'une entreprise dans la base de donnée */
entrepriseRouter.put('/:id', async (req, res) => {
    try {
        const entreprise = req.body;
        let result = await Entreprise.updateEntreprise(entreprise, req.params.id);
        res.json(result);
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});

//supression d'une entreprise
entrepriseRouter.delete('/:id', async (req, res) => {
    try {
        let result = await Entreprise.deleteEntreprise(req.params.id);
        res.json(result);
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});

module.exports = entrepriseRouter;