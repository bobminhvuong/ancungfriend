var router = require('express').Router();
var restaurantController = require('./../controller/restaurant.controller');

module.exports = function () {
    router.get('/', restaurantController.getAllRestaurant);
    router.get('/:id', restaurantController.getRestaurantById);
    router.put('/:id', require('./../middle-ware/auth').auth(), restaurantController.updateRestaurant);
    router.delete('/:id', require('./../middle-ware/auth').auth(), restaurantController.deleteRestaurant);
    router.post('/', require('./../middle-ware/auth').auth(), restaurantController.createRestaurant);
    router.post('/rate/:id', require('./../middle-ware/auth').auth(), restaurantController.updateRate);
    router.post('/image/:id', require('./../middle-ware/auth').auth(), restaurantController.updateImage);
    router.get('/search', restaurantController.getRestaurantByName);
    
    return router;
}