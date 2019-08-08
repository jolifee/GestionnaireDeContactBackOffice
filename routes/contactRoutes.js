/* definition d'express , du router et des requier eventuel*/
const express = require('express');
const contactRouter = express.Router();

const Contact = require('../controllers/contactController');

//recuperation des contacts
contactRouter.get('/', async (req, res) => {
    try {
        let result = await Contact.findAllContacts();
        res.json(result);
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});

//recuperation d'une contact
contactRouter.get('/:id', async (req, res) => {
    try {
        let result = await Contact.findOneContact(req.params.id);
        res.json(result);
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});

/*ajout d'une contact dans la base de donnée */
contactRouter.post('/', async (req, res) => {
    try {
        const contact = req.body;
        let result = await Contact.newContact(contact);
        res.json(result);
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});

/*modification d'une contact dans la base de donnée */
contactRouter.put('/:id', async (req, res) => {
    try {
        const contact = req.body;
        let result = await Contact.updateContact(contact, req.params.id);
        res.json(result);
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});

//supression d'une contact
contactRouter.delete('/:id', async (req, res) => {
    try {
        let result = await Contact.deleteContact(req.params.id);
        res.json(result);
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});

module.exports = contactRouter;