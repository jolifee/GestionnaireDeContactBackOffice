const express = require('express');
const connection = require('../db')

/*les requetes sur la table des entreprises*/
let Entreprise = {};

/* reccuperation de tout les entreprises*/
Entreprise.findAllEntreprises = () => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM entreprise', (err, res) => {
            if (err) return reject(err);
            return resolve(res);
        });
    });
};

//récupérer une entreprise avec un paramètre id.
Entreprise.findOneEntreprise = id => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM entreprise WHERE id = ?', [id], (err, res) => {
            if (err) return reject(err);
            return resolve(res[0]);
        });
    });
};

/* la creation d'une entreprise */
Entreprise.newEntreprise = () => {
    return new Promise((resolve, reject) => {
        const params = [
            entreprise.raisonSocial,
            entreprise.adresse,
            entreprise.cp,
            entreprise.ville,
            entreprise.email,
            entreprise.tel,
            entreprise.description,
        ];
        const query = 'INSERT INTO entreprises (raisonSocial,adresse,cp,ville,email,tel,description) VALUES (?, ?, ?, ?, ?, ?, ?)';
        connection.query(query, params, (err, res) => {
            if (err) return reject(err);
            resolve(res);
        });
    });
};

/* la modification d'une entreprise */
Entreprise.newEntreprise = () => {
    return new Promise((resolve, reject) => {
        const params = [
            entreprise.raisonSocial,
            entreprise.adresse,
            entreprise.cp,
            entreprise.ville,
            entreprise.email,
            entreprise.tel,
            entreprise.description,
        ];
        const query = 'INSERT INTO invoice (raisonSocial = ?,adresse = ?,cp = ?,ville = ?,email = ?,tel = ?,description = ?) VALUES (?, ?, ?, ?, ?, ?, ?)';
        db.query(query, params, (err, res) => {
            if (err) return reject(err);
            resolve(res);
        });
    });
};

//supprimer une entreprise avec un paramètre id.
Entreprise.deleteEntreprise = id => {
    return new Promise((resolve, reject) => {
        connection.query('DELETE FROM entreprise WHERE id = ?', [id], (err, res) => {
            if (err) return reject(err);
            resolve(res);
        });
    });
};

module.exports = Entreprise;