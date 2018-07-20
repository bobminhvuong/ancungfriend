var router = require('express').Router();
var typefoodController = require('./../controller/typefood.controller');

module.exports = function () {
    router.get('/', typefoodController.getAllTypeFood);
    router.get('/:id', typefoodController.getTypeFoodById);
    router.put('/:id', require('./../middle-ware/auth').auth(), typefoodController.updateTypeFood);
    router.delete('/:id', require('./../middle-ware/auth').auth(), typefoodController.deleteTypeFood);
    router.post('/', require('./../middle-ware/auth').auth(), typefoodController.createTypeFood);
    return router;
}