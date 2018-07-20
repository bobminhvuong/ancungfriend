var router = require('express').Router();
var partyController = require('./../controller/party.controller');

module.exports = function () {
    router.get('/', partyController.getAllParty);
    router.get('/:id', partyController.getPartyById);
    router.put('/:id', require('./../middle-ware/auth').auth(), partyController.updateParty);
    router.delete('/:id', require('./../middle-ware/auth').auth(), partyController.deleteParty);
    router.post('/', require('./../middle-ware/auth').auth(), partyController.createParty);
    router.post('/joinParty/:id', require('./../middle-ware/auth').auth(), partyController.AddUsersToTheParty);//idRestaurant
    return router;
}