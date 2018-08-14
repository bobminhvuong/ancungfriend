var restaurantService = require('./../service/restaurant.service');
var jwt = require('./../utils/jwt');
var config = require('./../config');
var message = require('./../utils/message')
module.exports = {
    getAllRestaurant: getAllRestaurant,
    getRestaurantById: getRestaurantById,
    updateRestaurant: updateRestaurant,
    deleteRestaurant: deleteRestaurant,
    createRestaurant: createRestaurant,
    updateRate: updateRate,
    updateImage: updateImageRestaurant,
    getRestaurantByName:getRestaurantByName
}
function updateImageRestaurant(req, res) {
    let uploadedFile = req.files.file;
    if (uploadedFile) {
        restaurantService.addImagRestaurant(req.params, uploadedFile)
            .then(function (response) {
                res.send(response)
            })
            .catch(function (err) {
                res.send(err);
            });
    } else {
        res.send({
            statusCode: message.STATUS_CODE.NOT_FOUND,
            message: message.ERROR_MESSAGE.USER.IMAGE_USER_NOT_FOUND
        });
    }
}

function getInfomationUserUsing(token) {
    return new Promise((resolve, reject) => {
        jwt.verify(token, function (err, deCodeData) {
            resolve(deCodeData)
        })
    });
}

function updateRate(req, res) {
    getInfomationUserUsing(req.headers[config.TOKEN]).then(function (deCodeData) {
        if (deCodeData) {
            var request = req.body;
            request.myId = deCodeData._id;
            request.idRestaurant = req.params.id;
            restaurantService.updateRate(request).then((response) => {
                res.send(response);
            }).catch((err) => {
                res.send(err)
            });
        } else {
            res.send({
                statusCode: message.STATUS_CODE.ERROR,
                message: message.ERROR_MESSAGE.AUTH.NOT_AUTHORIZED
            })
        }
    })
}

function getAllRestaurant(req, res) {
    if (req.query.page && req.query.limit) {
        restaurantService.getPageRestaurant(req.query).then((response) => {
            res.send(response);
        }).catch((err) => {
            res.send(err)
        })
    } else {
        restaurantService.getAllRestaurant(req.body).then((response) => {
            res.send(response);
        }).catch((err) => {
            res.send(err)
        })
    }
}

function getRestaurantById(req, res) {
    restaurantService.getRestaurantById(req.params).then((response) => {
        res.send(response);
    }).catch((err) => {
        res.send(err)
    })
}
function getRestaurantByName(req, res) {
    restaurantService.getRestaurantByName(req.params).then((response) => {
        res.send(response);
    }).catch((err) => {
        res.send(err)
    })
}
function updateRestaurant(req, res) {
    var request = req.body;
    request.id = req.params.id;
    restaurantService.updateRestaurant(request).then((response) => {
        res.send(response);
    }).catch((err) => {
        res.send(err)
    })
}

function deleteRestaurant(req, res) {
    restaurantService.deleteRestaurant(req.params).then((response) => {
        res.send(response);
    }).catch((err) => {
        res.send(err)
    })
}

function createRestaurant(req, res) {
    restaurantService.createRestaurant(req.body).then((response) => {
        res.send(response);
    }).catch((err) => {
        res.send(err)
    })
}