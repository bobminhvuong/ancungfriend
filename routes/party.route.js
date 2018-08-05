var router = require('express').Router();
var partyController = require('./../controller/party.controller');
var auth = require('./../middle-ware/auth').auth()
module.exports = function () {
    router.get('/', partyController.getAllParty);
    router.get('/:id', partyController.getPartyById);
    router.put('/:id', auth, partyController.updateParty);
    router.delete('/:id', auth, partyController.deleteParty);
    router.post('/', auth, partyController.createParty);
    router.post('/joinParty/:id', auth, partyController.AddUsersToTheParty);//idRestaurant
    router.delete('/joinParty/:id', auth, partyController.deleteUsersToTheParty);//idRestaurant

    return router;
}