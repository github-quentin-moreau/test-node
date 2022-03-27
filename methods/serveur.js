const franchise = require('./franchise')

function serveur (serveur, montant){
    return franchise(serveur, montant)
}

module.exports = serveur