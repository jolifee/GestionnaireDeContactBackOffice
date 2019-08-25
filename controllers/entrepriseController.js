const connection = require('../db')

/*les requetes sur la table des entreprises*/
let Entreprise = {};

/* reccuperation de tout les entreprises*/
Entreprise.findAllEntreprises = () => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM `entreprise`', (err, res) => {
            if (err) {
                return reject(err)
            }
            return resolve(res)
        });
    });
};

//récupérer une entreprise avec un paramètre id.
Entreprise.findOneEntreprise = id_entreprise => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM entreprise WHERE id_entreprise = ?', [id_entreprise], (err, res) => {
            if (err) {
                return reject(err)
            }
            return resolve(res[0])
        });
    });
};

/* la creation d'une entreprise */
Entreprise.newEntreprise = entreprise => {
    return new Promise((resolve, reject) => {
        const params = [
            entreprise.raison_social,
            entreprise.adresse,
            entreprise.code_postal,
            entreprise.ville,
            entreprise.type,
            entreprise.email,
            entreprise.tel,
            entreprise.description,
            entreprise.statut,
        ]
        const query = 'INSERT INTO entreprise (raison_social, adresse, code_postal, ville, type, email, tel, description, statut) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
        connection.query(query, params, (err, res) => {
            if (err) {
                return reject(err)
            }
            return resolve(res)
        });
    });
};

/* la modification d'une entreprise */
Entreprise.updateEntreprise = (entreprise, id_entreprise) => {
    return new Promise((resolve, reject) => {
        const params = [
            entreprise.raison_social,
            entreprise.adresse,
            entreprise.code_postal,
            entreprise.ville,
            entreprise.type,
            entreprise.email,
            entreprise.tel,
            entreprise.description,
            entreprise.statut,
        ]
        const query = 'UPDATE `entreprise` SET `raison_social`=?, `adresse`=?, `code_postal`=?, `ville`=?, `type`=?, `email`=?, `tel`=?, `description`=?, `statut`=? WHERE `entreprise`.`id_entreprise`= ?;'
        connection.query(query, params, (err, res) => {
            if (err) {
                return reject(err);
            }
            return resolve(res);
        });
    });
};

//supprimer une entreprise et ses contacts avec un paramètre id.
Entreprise.deleteEntreprise = id_entreprise => {
    return new Promise((resolve, reject) => {
        connection.query('DELETE FROM contact, entreprise WHERE id_entreprise = ?', [id_entreprise], (err, res) => {
            if (err) {
                return reject(err)
            }
            return resolve(res[0])
        });
    });
};

module.exports = Entreprise;