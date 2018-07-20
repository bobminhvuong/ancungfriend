var router = require('express').Router();
var userController = require('./../controller/user.controller');

module.exports = function () {
    router.get('/', userController.getAllUser);
    router.get('/:id', require('./../middle-ware/auth').auth(), userController.getUserById);
    router.put('/', require('./../middle-ware/auth').auth(), userController.updateUser);
    router.delete('/:id', require('./../middle-ware/auth').auth(), userController.deleteUser);
    router.post('/avatar', require('./../middle-ware/auth').auth(), userController.uploadAvatar);
    router.post('/', userController.createUser);
    router.post('/addfriend/:id', require('./../middle-ware/auth').auth(), userController.addfriend);
    router.post('/sendmail/:mail', require('./../middle-ware/auth').auth(), userController.sendMail);
    return router;
}