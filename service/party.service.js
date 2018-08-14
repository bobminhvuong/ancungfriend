var message = require('./../utils/message');
var Party = require('./../models/party.model');
var restaurantservice = require('./../service/restaurant.service');
var _ = require('lodash');
var userService = require('./user.service');
module.exports = {
    getAllParty: getAllParty,
    getPartyById: getPartyById,
    updateParty: updateParty,
    deleteParty: deleteParty,
    createParty: createParty,
    getPageParty: getPageParty,
    AddUsersToTheParty: AddUsersToTheParty,
    getPartyByIdRestaurant: getPartyByIdRestaurant,
    getAllPartyNotUsed: getAllPartyNotUsed,
    deleteUsersToTheParty: deleteUsersToTheParty,
    getAllPartyPrivate: getAllPartyPrivate,
    getPartyByPublic: getPartyByPublic,
    invitefriend: invitefriend
}
function invitefriend(param, req) {
    return new Promise((resolve, reject) => {
        Party.findOne({
            _id: param.id
        }).exec(function (err, response) {
            if (err) {
                reject(err)
            } else {
                if (response) {
                    if (response.listUser.length == currentNumber) {
                        reject({
                            statusCode: message.STATUS_CODE.ERROR,
                            message: message.ERROR_MESSAGE.USER.USER_MAX
                        })
                    } else {
                        var checkUser = response.listUser.filter(item => item.id == req.idUser);
                        if (checkUser.length > 0) {
                            reject({
                                statusCode: message.STATUS_CODE.ERROR,
                                message: message.ERROR_MESSAGE.USER.USER_INVITED
                            })
                        } else {
                            response.listUser.push({
                                id: req.idUser,
                                leader: false,
                                invite: true,
                                accept: false
                            });
                            response.save(function (err, party) {
                                if (err) {
                                    reject(err)
                                } else {
                                    userService.getUserById({ id: req.idUser }).then((result) => {
                                        if (result) {
                                            userService.inviteFriend({ email: response.email, idParty: party._id }).then((resultmail) => {

                                            })
                                        }
                                    })
                                    resolve(party)
                                }
                            })
                        }
                    }
                } else {
                    reject({
                        statusCode: message.STATUS_CODE.NOT_FOUND,
                        message: message.ERROR_MESSAGE.PARTY.NOT_FOUND
                    })
                }
            }
        })
    })
}

function getPartyByPublic(req) {
    return new Promise((resolve, reject) => {
        Party.find({
            public: req.public
        }).then(function (err, response) {
            if (err) {
                reject(err)
            } else {
                resolve(response)
            }
        })
    })
}

function getPartyByIdRestaurant(req) {
    return new Promise((resolve, reject) => {
        restaurantservice.getRestaurantById({
            id: req.idRestaurant
        }).then((response) => {
            if (response) {
                Party.find({
                    idRestaurant: req.idRestaurant
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

function deleteUsersToTheParty(req) {
    return new Promise((resolve, reject) => {
        Party.findOne({
            _id: req.id
        }).exec(function (err, response) {
            if (err) {
                reject(err)
            } else {
                if (response) {
                    var checkleader = response.listUser.filter(function (item) {
                        return item.id == req.myId;
                    });
                    var newUser = response.listUser.filter(function (item) {
                        return item.id != req.myId
                    });

                    if (checkleader.leader == true) {
                        reject({
                            statusCode: message.STATUS_CODE.ERROR,
                            message: message.ERROR_MESSAGE.USER.USER_NOT_OUT
                        })
                    } else {

                        response.listUser = newUser;
                        response.currentNumber = response.currentNumber - 1;
                        response.save(function (err, response) {
                            if (err) {
                                reject(err)
                            } else {
                                resolve(response)
                            }

                        })
                    }
                } else {
                    reject({
                        statusCode: message.STATUS_CODE.NOT_FOUND,
                        message: message.ERROR_MESSAGE.PARTY.PARTY_NOT_FOUND
                    });
                }
            }
        });
    });
}

function AddUsersToTheParty(req) {
    return new Promise((resolve, reject) => {
        Party.findOne({
            _id: req.id
        }).exec(function (err, response) {
            if (err) {
                reject(err);
            } else {
                if (response) {
                    if (response.public == true) {
                        if (response.listUser.length > response.numberMax) {
                            reject({
                                statusCode: message.STATUS_CODE.ERROR,
                                message: message.ERROR_MESSAGE.PARTY.PARTY_ALREADY_FULL
                            });
                        } else {
                            var checkUser = response.listUser.filter(function (item) {
                                return item.id == req.myId
                            });
                            if (checkUser.length == 0) {
                                response.listUser.push({
                                    id: req.myId,
                                    leader: false,
                                    invaite: false,
                                    accept: true
                                });
                                response.currentNumber = response.listUser.length;
                                response.save(function (err, pratyUpdate) {
                                    if (err) {
                                        reject(err);
                                    } else {
                                        resolve(pratyUpdate);
                                    }
                                });
                            } else {
                                reject({
                                    statusCode: message.STATUS_CODE.ERROR,
                                    message: message.ERROR_MESSAGE.USER.USER_REGISTERED
                                });
                            }
                        }
                    } else {
                        var indexUser = response.listUser.findIndex(function (element) {
                            return element.id == req.myId;
                        })
                        if (indexUser != 0) {
                            response.listUser[indexUser].accept = true;
                            response.currentNumber = response.listUser.length;
                            response.save(function (err, pratyUpdate) {
                                if (err) {
                                    reject(err);
                                } else {
                                    resolve(pratyUpdate);
                                }
                            });
                        } else {
                            reject({
                                statusCode: message.STATUS_CODE.ERROR,
                                message: message.ERROR_MESSAGE.PARTY.PARTY_PRIVATE
                            });
                        }
                    }
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

function getPageParty(req) {
    var start = (req.page - 1) * req.limit;
    Party.find({})
        .sort({
            'createAt': -1
        })
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
        Party.find({
        }).exec(function (err, response) {
            if (err) {
                reject(err)
            } else {
                resolve(response);
            }
        })
    });
}

function getAllPartyPrivate(req) {
    _id: req.id
    return new Promise((resolve, reject) => {
        Party.find({
            statusParty: 1
        }).exec(function (err, response) {
            if (err) {
                reject(err)
            } else {
                response.forEach(e => {
                    e.listUserBeInvite.forEach(d => {
                        if (d.idUser === _id) {
                            resolve(response);
                        }

                    })
                });

            }
        })
    });
}


function getAllPartyNotUsed(req) {
    return new Promise((resolve, reject) => {
        Party.find({
            status: req
        }).exec(function (err, response) {
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
        var restaurant = {
            id: req.idRestaurant
        }
        restaurantservice.getRestaurantById(restaurant).then((response) => {
            var dateNow = new Date();
            if (response) {
                if (new Date(req.dateStart) >= new Date()) {
                    var newParty = new Party({
                        titel: req.titel,
                        field: req.field,
                        numberMax: req.numberMax,
                        currentNumber: 1,
                        status: true,
                        timeStart: req.timeStart,
                        timeEnd: req.timeEnd,
                        dateStart: req.dateStart,
                        idRestaurant: req.idRestaurant,
                        statusParty: req.statusParty, // trang thai
                        listUser: [{
                            id: req.myId,
                            leader: true,
                            invite: false,
                            accept: true

                        }],
                        public: req.public || true,
                        createAt: new Date()
                    });
                    newParty.save(function (err, response) {
                        if (err) {
                            reject(err);
                        } else {
                            resolve({
                                response: response,
                                statusCode: message.STATUS_CODE.CREATED,
                                message: message.SUCCESS_MESSAGE.RESTAURANT.RESTAURANT_FOOD_CREATED
                            });
                        }
                    });
                } else {
                    reject({
                        statusCode: message.STATUS_CODE.ERROR,
                        message: message.ERROR_MESSAGE.PARTY.PARTY_IS_VALID
                    })
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


//auto load data sau 1 tiếng 
checkparty();

function checkparty() {
    var dateNow = new Date();
    Party.find({
        status: true
    }).exec(function (err, response) {
        response.forEach(element => {
            if (element.dateStart < dateNow) {
                element.status = false;
                element.save();
            }
        });
    })
    setTimeout(checkparty, 3600000);
}