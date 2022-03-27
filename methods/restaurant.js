const serveur = require('./serveur')

function restaurant(nbServeur) {
    return serveur(nbServeur, 1.0)
}

module.exports = restaurant

