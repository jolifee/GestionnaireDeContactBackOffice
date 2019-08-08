const express = require('express');
const connection = require('../db')

/*les requetes sur la table des contacts*/
let Contact = {};

/* reccuperation de tout les contacts*/
Contact.findAllContacts = () => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM contact', (err, res) => {
            if (err) return reject(err);
            return resolve(res);
        });
    });
};

//récupérer une contact avec un paramètre id.
Contact.findOneContact = id => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM contact WHERE id = ?', [id], (err, res) => {
            if (err) return reject(err);
            return resolve(res[0]);
        });
    });
};

/* la creation d'une contact */
Contact.newContact = () => {
    return new Promise((resolve, reject) => {
        const params = [
            contact.nom,
            contact.prenom,
            contact.fonction,
            contact.email,
            contact.tel,
            contact.id_entreprise,
        ];
        const query = 'INSERT INTO contacts (nom,prenom,fonction,email,tel,id_entreprise) VALUES (?, ?, ?, ?, ?, ?, ?)';
        connection.query(query, params, (err, res) => {
            if (err) return reject(err);
            resolve(res);
        });
    });
};

/* la modification d'une contact */
Contact.newContact = () => {
    return new Promise((resolve, reject) => {
        const params = [
            contact.nom,
            contact.prenom,
            contact.fonction,
            contact.email,
            contact.tel,
            contact.id_entreprise,
        ];
        const query = 'INSERT INTO invoice (nom = ?,prenom = ?,fonction = ?,email = ?,tel = ?,id_entreprise = ?) VALUES (?, ?, ?, ?, ?, ?, ?)';
        db.query(query, params, (err, res) => {
            if (err) return reject(err);
            resolve(res);
        });
    });
};

//supprimer une contact avec un paramètre id.
Contact.deleteContact = id => {
    return new Promise((resolve, reject) => {
        connection.query('DELETE FROM contact WHERE id = ?', [id], (err, res) => {
            if (err) return reject(err);
            resolve(res);
        });
    });
};

module.exports = Contact;