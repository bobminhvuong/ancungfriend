
var message = require('./../utils/message');
var Party = require('./../models/party.model');
var restaurantservice = require('./../service/restaurant.service');
var _ = require('lodash');
module.exports = {
    getAllParty: getAllParty,
    getPartyById: getPartyById,
    updateParty: updateParty,
    deleteParty: deleteParty,
    createParty: createParty,
    getPageParty: getPageParty,
    AddUsersToTheParty: AddUsersToTheParty,
    getPartyByIdRestaurant: getPartyByIdRestaurant
}
function getPartyByIdRestaurant(req) {
    return new Promise((resolve, reject) => {
        restaurantservice.getRestaurantById(req).then((response) => {
            if (response) {
                Party.find({
                    idRestaurant: req.id
                }).exec(function (err, response) {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(response)
                    }
                })
            } else {
                reject({
                    statusCode: message.STATUS_CODE.NOT_FOUND,
                    message: message.ERROR_MESSAGE.RESTAURANT.NOT_FOUND
                });
            }
        })
    });

}


function AddUsersToTheParty(req) {
    return new Promise((resolve, reject) => {
        Party.findOne({
            _id: req.id
        }).exec(function (err, response) {
            if (response.listUser.length == response.currentNumber) {
                reject({
                    statusCode: message.STATUS_CODE.ERROR,
                    message: message.ERROR_MESSAGE.PARTY.PARTY_ALREADY_FULL
                });
            } else {
                if (err) {
                    reject(err);
                } else {
                    if (response) {
                        var checkUser = _.find(response.listUser, function (item) {
                            return item.id = req.id
                        });
                        if (checkUser) {
                            reject({
                                statusCode: message.STATUS_CODE.ERROR,
                                message: message.ERROR_MESSAGE.USER.USER_REGISTERED
                            });
                        } else {
                            response.listUser.push({
                                id: req.myId,
                                leader: false
                            });
                            response.currentNumber = response.listUser.length;
                            response.save(function (err, pratyUpdate) {
                                if (err) {
                                    reject(err);
                                } else {
                                    resolve(pratyUpdate);
                                }
                            });
                        }
                    } else {
                        reject({
                            statusCode: message.STATUS_CODE.NOT_FOUND,
                            message: message.ERROR_MESSAGE.RESTAURANT.RESTAURANT_NOT_FOUND
                        })
                    }
                }
            }
        });
    });
}

function getPageParty(req) {
    var start = (req.page - 1) * req.limit;
    Party.find({})
        .sort({ 'createAt': -1 })
        .skip(start)
        .limit(req.limit)
        .exec(function (err, response) {
            if (err) {
                reject(err)
            } else {
                resolve(response);
            }
        })
}

function getAllParty() {
    return new Promise((resolve, reject) => {
        Party.find().exec(function (err, response) {
            if (err) {
                reject(err)
            } else {
                resolve(response);
            }
        })
    });
}

function getPartyById(req) {
    return new Promise((resolve, reject) => {
        Party.findOne({
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
                        message: message.ERROR_MESSAGE.PARTY.PARTY_NOT_FOUND
                    })
                }
            }
        });
    });
}

function updateParty(req) {
    return new Promise((resolve, reject) => {
        Party.findOne({
            _id: req.id
        }).exec(function (err, response) {
            if (err) {
                reject(err);
            } else {
                if (response) {
                    response.titel = req.titel || response.titel;
                    response.field = req.field || response.field;
                    response.numberMax = req.numberMax || response.numberMax;
                    response.status = req.status || response.status;
                    response.timeStart = req.timeStart || response.timeStart;
                    response.timeEnd = req.timeEnd || response.timeEnd;
                    response.idRestaurant = req.idRestaurant || response.idRestaurant;
                    response.save(function (err, response) {
                        if (err) {
                            reject(err)
                        } else {
                            resolve(response)
                        }
                    });
                } else {
                    reject({
                        statusCode: message.STATUS_CODE.NOT_FOUND,
                        message: message.ERROR_MESSAGE.PARTY.PARTY_NOT_FOUND
                    });
                }
            }
        })
    });
}
function deleteParty(req) {
    return new Promise((resolve, reject) => {
        Party.findOne({
            _id: req.id
        }).exec(function (err, response) {
            if (err) {
                reject(err);
            } else {
                if (response) {
                    Party.remove({
                        _id: req.id
                    }).exec(function (err, response) {
                        if (err) {
                            reject(err);
                        } else {
                            resolve({
                                statusCode: message.STATUS_CODE.ERROR,
                                message: message.SUCCESS_MESSAGE.PARTY.PARTY_FOOD_DELETED
                            });
                        }
                    });
                } else {
                    reject({
                        statusCode: message.STATUS_CODE.NOT_FOUND,
                        message: message.ERROR_MESSAGE.PARTY.PARTY_NOT_FOUND
                    })
                }
            }
        });
    });
}

function createParty(req) {
    return new Promise((resolve, reject) => {
        restaurantservice.getRestaurantById(req).then((response) => {
            if (response) {
                if (response) {
                    if (new Date(req.dateStart) >= (new Date())) {
                        var newParty = new Party({
                            titel: req.titel,
                            field: req.field,
                            numberMax: req.numberMax,
                            currentNumber: 1,
                            status: true,
                            timeStart: req.timeStart,
                            timeEnd: req.timeEnd,
                            dateStart: new Date(req.dateStart),
                            idRestaurant: req.idRestaurant,
                            listUser: [
                                {
                                    id: req.myId,
                                    leader: true
                                }
                            ],
                            createAt: new Date()
                        });
                        newParty.save(function (err, response) {
                            if (err) {
                                reject(err);
                            } else {
                                resolve(response);
                            }
                        });
                    } else {
                        reject({
                            statusCode: message.STATUS_CODE.NOT_FOUND,
                            message: message.ERROR_MESSAGE.PARTY.PARTY_DATE_ERROR
                        })
                    }
                }
            } else {
                reject({
                    statusCode: message.STATUS_CODE.NOT_FOUND,
                    message: message.ERROR_MESSAGE.RESTAURANT.NOT_FOUND
                });
            }
        });
    });
}