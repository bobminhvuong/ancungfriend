var message = require('./../utils/message');
var TypeFood = require('./../models/typefood.model');
module.exports = {
    getAllTypeFood: getAllTypeFood,
    getTypeFoodById: getTypeFoodById,
    updateTypeFood: updateTypeFood,
    deleteTypeFood: deleteTypeFood,
    createTypeFood: createTypeFood,
    getPageTypeFood: getPageTypeFood
}

function getPageTypeFood(req) {
    var start = (req.page - 1) * req.limit;
    TypeFood.find().exec(function (err, response) {
        if (err) {
            reject(err)
        } else {
            TypeFood.find({})
                .sort({ 'createAt': -1 })
                .skip(start)
                .limit(req.limit)
                .exec(function (err, limitdata) {
                    if (err) {
                        reject(err)
                    } else {
                        var data = {
                            count: response.length,
                            typeFood: limitdata
                        }
                    }
                })
        }
    });
}

function getAllTypeFood() {
    return new Promise((resolve, reject) => {
        TypeFood.find().exec(function (err, response) {
            if (err) {
                reject(err)
            } else {
                resolve(response);
            }
        })
    });
}

function getTypeFoodById(id) {
    return new Promise((resolve, reject) => {
        TypeFood.findOne({
            _id: id
        }).exec(function (err, response) {
            if (err) {
                reject(err);
            } else {
                if (response) {
                    resolve(response)
                } else {
                    reject({
                        statusCode: message.STATUS_CODE.NOT_FOUND,
                        message: message.ERROR_MESSAGE.TYPE_FOOD.TYPE_FOOD_NOT_FOUND
                    })
                }
            }
        });
    });
}

function updateTypeFood(req) {
    return new Promise((resolve, reject) => {
        TypeFood.findOne({
            _id: req.id
        }).exec(function (err, response) {
            if (err) {
                reject(err);
            } else {
                if (response) {
                    response.name = req.name || response.name;
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
                        message: message.SUCCESS_MESSAGE.TYPE_FOOD.NOT_FOUND
                    });
                }
            }
        })
    });
}

function deleteTypeFood(req) {
    return new Promise((resolve, reject) => {
        TypeFood.findOne({
            _id: req.id
        }).exec(function (err, response) {
            if (err) {
                reject(err);
            } else {
                if (response) {
                    TypeFood.remove({
                        _id: req.id
                    }).exec(function (err, response) {
                        if (err) {
                            reject(err);
                        } else {
                            resolve({
                                statusCode: message.STATUS_CODE.ERROR,
                                message: message.SUCCESS_MESSAGE.TYPE_FOOD.TYPE_FOOD_DELETED
                            });
                        }
                    });
                } else {
                    reject({
                        statusCode: message.STATUS_CODE.NOT_FOUND,
                        message: message.SUCCESS_MESSAGE.TYPE_FOOD.NOT_FOUND
                    })
                }
            }
        });
    });
}

function createTypeFood(req) {
    return new Promise((resolve, reject) => {
        TypeFood.findOne({
            name: req.name
        }).exec(function (err, response) {
            if (err) {
                reject(err);
            } else {
                if (response) {
                    reject({
                        statusCode: message.STATUS_CODE.ERROR,
                        message: message.ERROR_MESSAGE.TYPE_FOOD.TYOE_FOOD_IS_EXIST
                    });
                } else {
                    req.createAt = new Date();
                    var newTypeFood = new TypeFood(req);
                    newTypeFood.save(function (err, response) {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(response);
                        }
                    });
                }
            }
        });
    });

}