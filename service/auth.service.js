var message = require('./../utils/message');
var User = require('./../models/user.model');
var crypto = require('./../utils/crypto');
var jwt = require('./../utils/jwt');
module.exports = {
    login: login,
    getUserByToken: getUserByToken,
    getUserByEmail: getUserByEmail
}
function getUserByEmail(email) {
    return new Promise((resolve, reject) => {
        User.find({
            email: email
        }).exec(function (err, response) {
            if (err) {
                reject(err)
            } else {
                if (response) {
                    resolve(response)
                } else {
                    reject({
                        statuscode: message.STATUS_CODE.NOT_FOUND,
                        message: message.ERROR_MESSAGE.USER.USER_NOT_FOUND
                    })
                }
            }
        })
    })
}

function getUserByToken(token) {
    return new Promise((resolve, reject) => {
        if (token) {
            jwt.verify(token, function (err, decodedData) {
                if (err) {
                    reject({
                        statusCode: message.STATUS_CODE.ERROR,
                        message: message.ERROR_MESSAGE.USER.USER_ERROR
                    });
                } else {
                    var email = decodedData.email
                    User.findOne({
                        email: email
                    }).exec(function (err, response) {
                        if (err) {
                            reject({
                                statusCode: message.STATUS_CODE.ERROR,
                                message: message.ERROR_MESSAGE.USER.USER_ERROR
                            });
                        } else {
                            var convertUser = convertUserModelToUserResponse(response)
                            resolve(convertUser);
                        }
                    });
                }
            })
        }
    });
}

function login(user) {
    return new Promise((resolve, reject) => {
        User.findOne({
            email: user.email
        }).exec(function (err, userModel) {
            if (userModel) {
                var pass = crypto.hashWithSalt(user.password, userModel.salt);
                if (userModel.password === pass) {
                    jwt.sign(convertUserModelToUserResponse(userModel), function (err, token) {
                        if (err) {
                            reject(err);
                        } else {
                            resolve({
                                token: token,
                                role:userModel.role
                            })
                        }
                    });
                } else {
                    reject({
                        statuscode: message.STATUS_CODE.ERROR,
                        message: message.ERROR_MESSAGE.USER.PASS_WRONG
                    });
                }
            } else {
                reject({
                    statuscode: message.STATUS_CODE.NOT_FOUND,
                    message: message.ERROR_MESSAGE.USER.EMAIL_NOT_FOUND
                });
            }
        });
    });
}

function convertUserModelToUserResponse(userModel) {
    var userObj = userModel.toObject();
    delete userObj.password;
    delete userObj.salt;
    return userObj;
}