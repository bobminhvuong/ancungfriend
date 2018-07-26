var message = require('./../utils/message');
var Restaurant = require('./../models/restaurant.model');
// var TypeFood = require('./../models/TypeFood.model');
var genericService = require('./../service/generic.service');
var TypeFoodService = require('./../service/typefood.service')
var _ = require('lodash');

module.exports = {
    getAllRestaurant: getAllRestaurant,
    getRestaurantById: getRestaurantById,
    updateRestaurant: updateRestaurant,
    deleteRestaurant: deleteRestaurant,
    createRestaurant: createRestaurant,
    updateRate: updateRate,
    getPageRestaurant: getPageRestaurant,
    addImagRestaurant: addImagRestaurant,
}
function addImagRestaurant(req, file) {
    return new Promise((resolve, reject) => {
        Restaurant.findOne({
            _id: req.id
        }).exec(function (err, response) {
            if (err) {
                reject(err)
            } else {
                if (response) {
                    if (response.image.length > 0) {
                        var pathOne = '../public/restaurant/restaurant_' + (response.image.length + 1) + '_' + req.id;
                        genericService.uploadImage(file, pathOne);
                        response.image.push({
                            image: 'restaurant_' + (response.image.length + 1) + '_' + req.id + '.png'
                        });
                        response.save(function (err, response) {
                            if (err) {
                                reject(err)
                            } else {
                                resolve({
                                    statusCode: message.STATUS_CODE.ACCEPTED,
                                    message: message.SUCCESS_MESSAGE.RESTAURANT.RESTAURANT_FOOD_UPDATED_IMAGE
                                });
                            }
                        })
                    } else {
                        var pathTwo = '../public/restaurant/restaurant_' + 1 + '_' + req.id;
                        genericService.uploadImage(file, pathTwo);
                        response.image.push({
                            image: 'restaurant_' + 1 + '_' + req.id + '.png'
                        });
                        response.save(function (err, response) {
                            if (err) {
                                reject(err)
                            } else {
                                resolve({
                                    statusCode: message.STATUS_CODE.ACCEPTED,
                                    message: message.SUCCESS_MESSAGE.RESTAURANT.RESTAURANT_FOOD_UPDATED_IMAGE
                                });
                            }
                        })
                    }
                } else {
                    reject({
                        statusCode: message.STATUS_CODE.NOT_FOUND,
                        message: message.ERROR_MESSAGE.RESTAURANT.RESTAURANT_NOT_FOUND
                    });
                }
            }
        });
    });
}
function getPageRestaurant(req) {
    var start = (req.page - 1) * req.limit;
    Restaurant.find().exec(function (err, response) {
        if (err) {
            reject(err)
        } else {
            if (response) {
                Restaurant.find({})
                    .sort({ 'createAt': -1 })
                    .skip(start)
                    .limit(req.limit)
                    .exec(function (err, datalimit) {
                        if (err) {
                            reject(err)
                        } else {
                            var data = {
                                count: response.length,
                                restaurant: datalimit
                            }
                            resolve(data);
                        }
                    })
            }
        }
    })


}

function updateRate(req) {
    return new Promise((resolve, reject) => {
        Restaurant.findOne({
            _id: req.idRestaurant
        }).exec(function (err, response) {
            var checkRateUser = _.filter(response.listRate, { idUser: req.myId });
            if (response) {
                if (checkRateUser.length > 0) {
                    var averageRate = 0;
                    var index = [];

                    response.listRate.forEach(item => {
                        index.push(item)
                        if (item.idUser == req.myId) {
                            item.rate = req.rate;
                        }

                        averageRate = averageRate + item.rate;

                        // tinh trung binh rate
                        response.averageRate = (averageRate / index.length);

                        if (response.listRate.length == index.length) {
                            response.save(function (err, response) {
                                if (err) {
                                    reject(err);
                                } else {
                                    reject(response);
                                }
                            });
                        }
                    });
                } else {
                    response.listRate.push({
                        idUser: req.myId,
                        rate: req.rate
                    });
                    // tinh trung binh rate
                    response.averageRate = _.sumBy(response.listRate, function (o) { return o.rate; }) / response.listRate.length;

                    response.save(function (err, response) {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(response);
                        }
                    })
                }
            }
        })
    });
}

function getAllRestaurant() {
    return new Promise((resolve, reject) => {
        Restaurant.find().exec(function (err, response) {
            if (err) {
                reject(err)
            } else {
                resolve(response);
            }
        })
    });
}

function getRestaurantById(req) {
    return new Promise((resolve, reject) => {
        Restaurant.findOne({
            _id: req.id
        }).exec(function (err, response) {
            if (err) {
                reject(err);
            } else {
                if (response) {
                    resolve(response)
                } else {
                    reject({
                        statusCode: message.STATUS_CODE.NOT_FOUND,
                        message: message.ERROR_MESSAGE.RESTAURANT.RESTAURANT_NOT_FOUND
                    })
                }
            }
        });
    });
}

function updateRestaurant(req) {
    return new Promise((resolve, reject) => {
        Restaurant.findOne({
            _id: req.id
        }).exec(function (err, response) {
            if (err) {
                reject(err);
            } else {
                if (response) {
                    response.name = req.name || response.name;
                    response.typeFood = req.typeFood || response.typeFood;
                    response.minPrice = req.minPrice || response.minPrice;
                    response.maxPrice = req.maxPrice || response.maxPrice;
                    response.timeStart = req.timeStart || response.timeStart;
                    response.timeAnd = req.timeAnd || response.timeAnd;
                    response.address = req.address || response.address;
                    response.lat = req.lat || response.lat;
                    response.long = req.lat || response.long;
                    response.detail = req.detail || response.detail;
                    response.save(function (err, response) {
                        if (err) {
                            reject(err)
                        } else {
                            resolve({
                                statusCode: message.STATUS_CODE.ACCEPTED,
                                message: message.SUCCESS_MESSAGE.RESTAURANT.RESTAURANT_FOOD_UPDATED
                            })
                        }
                    });
                } else {
                    reject({
                        statusCode: message.STATUS_CODE.NOT_FOUND,
                        message: message.ERROR_MESSAGE.RESTAURANT.RESTAURANT_NOT_FOUND
                    });
                }
            }
        })
    });
}

function deleteRestaurant(req) {
    return new Promise((resolve, reject) => {
        Restaurant.findOne({
            _id: req.id
        }).exec(function (err, response) {
            if (err) {
                reject(err);
            } else {
                if (response) {
                    Restaurant.remove({
                        _id: req.id
                    }).exec(function (err, response) {
                        if (err) {
                            reject(err);
                        } else {
                            resolve({
                                statusCode: message.STATUS_CODE.ERROR,
                                message: message.SUCCESS_MESSAGE.RESTAURANT.RESTAURANT_FOOD_DELETED
                            });
                        }
                    });
                } else {
                    reject({
                        statusCode: message.STATUS_CODE.NOT_FOUND,
                        message: message.ERROR_MESSAGE.RESTAURANT.RESTAURANT_NOT_FOUND
                    })
                }
            }
        });
    });
}

function createRestaurant(req) {
    return new Promise((resolve, reject) => {
        if (req.image) {
            reject({
                statusCode: message.STATUS_CODE.ERROR,
                message: message.ERROR_MESSAGE.RESTAURANT.IMAGE_ERROR
            })
        } else {
            TypeFoodService.getTypeFoodById(req.typeFood).then(function (response) {
                if (response) {
                    Restaurant.findOne({
                        name: req.name
                    }).exec(function (err, response) {
                        if (err) {
                            reject(err);
                        } else {
                            if (response) {
                                reject({
                                    statusCode: message.STATUS_CODE.ERROR,
                                    message: message.ERROR_MESSAGE.RESTAURANT.RESTAURANT_IS_EXITS
                                });
                            } else {
                                req.createAt = new Date();
                                var newRestaurant = new Restaurant(req);
                                newRestaurant.save(function (err, response) {
                                    if (err) {
                                        reject(err);
                                    } else {
                                        resolve({
                                            statusCode: 201,
                                            message: message.SUCCESS_MESSAGE.RESTAURANT.RESTAURANT_FOOD_CREATED
                                        });
                                    }
                                });
                            }
                        }
                    });
                }
            }).catch(function (err) {
                reject(err)
            });
        }
    });
}