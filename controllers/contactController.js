const connection = require('../db')

/*les requetes sur la table des contacts*/
let Contact = {};

/* reccuperation de tout les contacts*/
Contact.findAllContacts = () => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM `contact`', (err, res) => {
            if (err) {
                return reject(err)
            }
            return resolve(res)
        });
    });
};

/* reccuperation de tout les contacts d'une entreprise*/
Contact.findAllContactsInEntreprise = (id_entreprise) => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT `c`.* FROM `contact` c, `entreprise` e WHERE `c`.`id_entreprise`=`e`.`id_entreprise` AND `e`.`id_entreprise`=?', [id_entreprise], (err, res) => {
            if (err) {
                return reject(err)
            }
            return resolve(res)
        });
    });
};

//récupérer un contact avec un paramètre id.
Contact.findOneContact = id_contact => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM contact WHERE id_contact = ?', [id_contact], (err, res) => {
            if (err) {
                return reject(err)
            }
            return resolve(res[0])
        });
    });
};

/* la creation d'un contact */
Contact.newContact = contact => {
    return new Promise((resolve, reject) => {
        const params = [
            contact.nom,
            contact.prenom,
            contact.fonction,
            contact.email,
            contact.tel,
            contact.id_entreprise
        ]
        const query = 'INSERT INTO contact (nom, prenom, fonction, email, tel, id_entreprise) VALUES (?, ?, ?, ?, ?, ?)';
        connection.query(query, params, (err, res) => {
            if (err) {
                return reject(err)
            }
            return resolve(res)
        });
    });
};

/* la modification d'un contact */
Contact.updateContact = (contact, id_contact) => {
    return new Promise((resolve, reject) => {
        const params = [
            contact.nom,
            contact.prenom,
            contact.fonction,
            contact.email,
            contact.tel,
            contact.id_entreprise
        ]
        const query = 'UPDATE `entreprise` SET `nom`=?, `prenom`=?, `fonction`=?, `email`=?, `tel`=?, `id_entreprise`=? WHERE `contact`.`id_contact`= ?;'
        connection.query(query, params, (err, res) => {
            if (err) {
                return reject(err);
            }
            return resolve(res);
        });
    });
};

//supprimer un contact avec un paramètre id.
Contact.deleteContact = id_contact => {
    return new Promise((resolve, reject) => {
        connection.query('DELETE FROM contact WHERE id_contact = ?', [id_contact], (err, res) => {
            if (err) {
                return reject(err)
            }
            return resolve(res[0])
        });
    });
};

module.exports = Contact;