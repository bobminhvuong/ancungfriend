var router = require('express').Router();
var authController = require('./../controller/auth.controller');
var userController = require('./../controller/user.controller');

module.exports = function () {
    router.post('/login', authController.login);
    router.get('/', authController.getUserByToken)    
    return router;
}