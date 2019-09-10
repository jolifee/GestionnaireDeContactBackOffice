const connection = require(' ../db ')

    / * les demandes sur la table des contacts * /
let Contact = {};

/ * reccuperation de tout les contacts * /
Contactez.findAllContacts = () => {
    renvoyer une  nouvelle  promesse((résoudre, rejeter) => {
        connexion.query(' SELECT * FROM `contact` ', (err, res) => {
            si(err) {
                retourne le  rejet(err)
            }
            retour  résoudre(res)
        });
    });
};

/ * récupération de tous les contacts d'une entreprise * /
Contactez.findAllContactsInEntreprise = (id_entreprise) => {
    renvoyer une  nouvelle  promesse((résoudre, rejeter) => {
        connexion.requête(' SELECT c. * FROM `contact` c,` entreprise` et WHERE c.id_entreprise = e.id_entreprise ET e.id_entreprise =? ', [id_entreprise], (err, res) => {
            si(err) {
                retourne le  rejet(err)
            }
            retour  résoudre(res)
        });
    });
};

// récupérer un contact avec un paramètre id.
Contactez.findOneContact = id_entreprise => {
    renvoyer une  nouvelle  promesse((résoudre, rejeter) => {
        connexion.requête(' SELECT c. * DE contact c, entretrise e WHERE c.id_entreprise = e.id_entreprise ET e.id_entreprise =? ', [id_entreprise], (err, res) => {
            si(err) {
                retourne le  rejet(err)
            }
            résolution de retour(res[0])
        });
    });
};

/ * la création d'un contact * /
Contactez.newContact = contact => {
    renvoyer une  nouvelle  promesse((résoudre, rejeter) => {
        const params = [
            contact.nom,
            contact.avant,
            contact.fonction,
            contact.email,
            contact.tel,
            contact.id_entreprise
        ]
        const query = ' INSERT INTO contact (nom, prénom, fonction, email, tel, id_entreprise) VALEURS (?,?,?,?,?,?) ';
        connexion.query(query, params, (err, res) => {
            si(err) {
                retourne le  rejet(err)
            }
            retour  résoudre(res)
        });
    });
};

/ * la modification d'un contact * /
Contactez.updateContact = (contact, id_contact) => {
    renvoyer une  nouvelle  promesse((résoudre, rejeter) => {
        const params = [
            contact.nom,
            contact.avant,
            contact.fonction,
            contact.email,
            contact.tel,
            contact.id_entreprise
        ]
        const requête = ' UPDATE `entreprise` SET` nom` =?, `prenom` =?,` fonction` =?, `email` =?,` tel` =?, `id_entreprise` =? WHERE `contact`.`id_contact` =?; '
        connexion.query(query, params, (err, res) => {
            si(err) {
                renvoyer  rejeter(err);
            }
            retour  résoudre(res);
        });
    });
};

// supprimer un contact avec un paramètre id.
Contactez.deleteContact = id_contact => {
    renvoyer une  nouvelle  promesse((résoudre, rejeter) => {
        connexion.query(' DELETE FROM contact WHERE id_contact =? ', [id_contact], (err, res) => {
            si(err) {
                retourne le  rejet(err)
            }
            résolution de retour(res[0])
        });
    });
};

module.exports = Contact;