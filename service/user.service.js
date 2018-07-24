var User = require('./../models/user.model');
var crypto = require('./../utils/crypto');
var message = require('./../utils/message');
var _ = require('lodash');
var nodemailer = require('nodemailer');
var config = require('./../config');
var handlebars = require('handlebars');
var fs = require('fs');
var genericService = require('./../service/generic.service');

module.exports = {
    getAllUser: getAllUser,
    getUserById: getUserById,
    updateUser: updateUser,
    deleteUser: deleteUser,
    uploadAvatar: uploadAvatar,
    getUserByEmail: getUserByEmail,
    createUser: createUser,
    addfriend: addfriend,
    sendMail: sendMail,
    createAdmin: createAdmin
}

function sendMail(req) {
    // Cấu hình đọc file template html
    var readHTMLFile = function (path, callback) {
        fs.readFile(path, { encoding: 'utf-8' }, function (err, html) {
            if (err) {
                throw err;
                callback(err);
            }
            else {
                callback(null, html);
            }
        });
    };
    // Cấu hình người gửi mail
    var transporter = nodemailer.createTransport({ // config mail server
        service: config.MAIL.SERVICE,
        auth: {
            user: config.MAIL.USERNAME,
            pass: config.MAIL.PASSWORD
        }
    });
    return new Promise((resolve, reject) => {
        User.findOne({
            _id: req.myId
        }).exec(function (err, userData) {
            if (err) {
                reject(err)
            } else {
                readHTMLFile(__dirname + './../public/templateMail/mailv1.html', function (err, html) {
                    var template = handlebars.compile(html);
                    var replacements = {
                        username: "John Doe",
                        titel: "Ăn Cùng Bạn Bè"
                    };
                    var urlTemplate = template(replacements);
                    var nameUserSend = userData.name.toUpperCase();
                    // Cấu hình người nhận mail
                    var mailOptions = {
                        from: config.MAIL.USERNAME,
                        to: req.email,
                        subject: nameUserSend + ' ĐÃ MỜI BẠN GIA NHẬP CÙNG VỚI ANCUNG',
                        html: urlTemplate
                    };
                    transporter.sendMail(mailOptions, function (err, info) {
                        if (err) {
                            reject(err)
                        } else {
                            if (info) {
                                resolve({
                                    statusCode: message.STATUS_CODE.ACCEPTED,
                                    message: message.SUCCESS_MESSAGE.USER.SENT_MAIL
                                });
                            }
                        }
                    });
                });
            }
        });
    });
}

function addfriend(req, myId) {
    return new Promise((resolve, reject) => {
        User.findOne({
            _id: req.id
        }).exec(function (err, userFriend) {
            if (userFriend) {
                User.findOne({
                    _id: myId
                }).exec(function (err, response) {
                    if (err) {
                        reject(err)
                    } else {
                        if (response) {
                            //Kiểm tra đã đánh giá hay chưa
                            var checkMadeFriends = _.filter(response.friend, { id_friend: req.id_friend });
                            if (checkMadeFriends.length <= 0) {
                                response.friend.push({
                                    id_friend: req.id_friend,
                                    follow: true
                                });
                                response.save(function (err, dataFriend) {
                                    if (err) {
                                        reject(err)
                                    } else {
                                        //gọi lại hàm kết bạn lại
                                        addfriend({ id_friend: myId }, req.id_friend)

                                        resolve({
                                            statusCode: message.STATUS_CODE.SUCCES,
                                            message: message.SUCCESS_MESSAGE.USER.MAKE_FRIEND_SUCCES
                                        });
                                    }
                                })
                            } else {
                                reject({
                                    statusCode: message.STATUS_CODE.ERROR,
                                    message: message.ERROR_MESSAGE.USER.USER_EXIST
                                })
                            }
                        } else {
                            reject({
                                statusCode: message.STATUS_CODE.NOT_FOUND,
                                message: message.ERROR_MESSAGE.USER.USER_NOT_FOUND
                            })
                        }
                    }
                });
            } else {
                reject({
                    message: message.STATUS_CODE.NOT_FOUND,
                    message: message.ERROR_MESSAGE.USER.USER_FRIEND_NOT_FOUND
                })
            }
        })
    });
}

function uploadAvatar(id, file) {
    return new Promise((resolve, reject) => {
        User.findOne({ _id: id }).exec(function (err, response) {
            if (err) {
                reject(err);
            } else {
                var path = './../public/avatar/avatar_' + id;
                if (response) {
                    if (response.image) {
                        // xóa ảnh củ
                        fs.unlinkSync('public/avatar/' + response.image);
                        //lưu Ảnh mới
                        genericService.uploadImage(file, path);
                        response.image = 'avatar_' + id + '.png';
                        response.save(function (err, response) {
                            if (err) {
                                reject(err)
                            } else {
                                resolve({
                                    statusCode: message.STATUS_CODE.SUCCES,
                                    message: message.SUCCESS_MESSAGE.USER.USER_AVATAR_UPDATED
                                });
                            }
                        })
                    } else {
                        genericService.uploadImage(file, path);
                        response.image = 'avatar_' + id + '.png';
                        response.save(function (err, response) {
                            if (err) {
                                reject(err)
                            } else {
                                resolve({
                                    statusCode: message.STATUS_CODE.SUCCES,
                                    message: message.SUCCESS_MESSAGE.USER.USER_AVATAR_UPDATED
                                });
                            }
                        })
                    }
                }
            }
        });
    });
}

function getUserByEmail(email) {
    return new Promise((resolve, reject) => {
        User.findOne({
            email: email
        }).exec(function (err, response) {
            if (err) {
                reject({
                    message: err.message
                });
            } else {
                resolve(response);
            }
        });
    });
}

function deleteUser(request) {
    return new Promise((resolve, reject) => {
        User.findOne({
            _id: request.id
        }).exec(function (err, response) {
            if (err) {
                reject(err);
            } else {
                if (response) {
                    User.remove({
                        _id: request.id
                    }).exec(function (err, response) {
                        if (err) {
                            reject({
                                statusCode: message.STATUS_CODE.NOT_FOUND,
                                message: message.ERROR_MESSAGE.USER.NOT_FOUND
                            });
                        } else {
                            resolve({
                                statusCode: message.STATUS_CODE.SUCCES,
                                message: message.SUCCESS_MESSAGE.USER.DELETED
                            });
                        }
                    });
                } else {
                    reject({
                        statusCode: message.STATUS_CODE.NOT_FOUND,
                        message: message.ERROR_MESSAGE.USER.NOT_FOUND
                    })
                }
            }
        });
    });
}

function updateUser(request) {
    return new Promise((resolve, reject) => {
        User.findOne({
            _id: request.myId
        }).exec(function (err, response) {
            if (err) {
                reject(err);
            } else {
                if (response) {
                    response.name = request.name || response.name;
                    response.password = request.password ? crypto.hashWithSalt(request.password, response.salt) : response.password;
                    response.email = request.email || response.email;
                    response.phone = request.phone || response.phone;
                    response.birtdate = request.birtdate || response.birtdate;
                    response.sex = request.sex || response.sex;
                    response.address = request.address || response.address;
                    response.role = response.role;
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
                        message: message.ERROR_MESSAGE.USER.USER_NOT_FOUND
                    });
                }
            }
        });
    });
}

function getUserById(req,) {
    return new Promise((resolve, reject) => {
        User.findOne({
            _id: req.id
        }).exec(function (err, response) {
            if (err) {
                reject({
                    message: err.message
                });
            } else {
                if (response) {
                    resolve(response)
                } else {
                    reject({
                        statusCode: message.STATUS_CODE.NOT_FOUND,
                        message: message.ERROR_MESSAGE.NOT_FOUND
                    });
                }
            }
        });
    });
}

async function getAllUser() {
    let result = await User.find({});
    return result
}

function createUser(request) {
    var checkEmail = validateEmail(request.email);
    return new Promise((resolve, reject) => {
        User.findOne({
            email: request.email
        }).exec(function (err, userModel) {
            if (err) {
                reject(err);
            } else {
                if (checkEmail) {
                    if (!userModel) {
                        var salt = crypto.genSalt();
                        var newUser = new User({
                            email: request.email,
                            name: request.name,
                            salt: salt,
                            password: crypto.hashWithSalt(request.password, salt),
                            sex: request.sex,
                            phone: request.phone,
                            birtdate: request.birtdate,
                            role: "USER",
                            createAt: new Date()
                        });
                        newUser.save(function (err, response) {
                            if (err) {
                                reject(err);
                            } else {
                                resolve({
                                    statusCode: message.STATUS_CODE.CREATED,
                                    message: message.SUCCESS_MESSAGE.USER.CREATED
                                });
                            }
                        });
                    } else {
                        reject({
                            statusCode: message.STATUS_CODE.NOT_FOUND,
                            message: message.ERROR_MESSAGE.USER.EMAIL_EXIST
                        });
                    }
                } else {
                    reject({
                        statusCode: message.STATUS_CODE.ERROR,
                        message: message.ERROR_MESSAGE.USER.EMAIL_ERROR
                    });
                }

            }
        });
    });
}

function createAdmin(request) {
    var checkEmail = validateEmail(request.email);
    return new Promise((resolve, reject) => {
        User.findOne({
            email: request.email
        }).exec(function (err, userModel) {
            if (err) {
                reject(err);
            } else {
                if (checkEmail) {
                    if (!userModel) {
                        var salt = crypto.genSalt();
                        var newUser = new User({
                            email: request.email,
                            name: request.name,
                            salt: salt,
                            password: crypto.hashWithSalt(request.password, salt),
                            sex: request.sex,
                            phone: request.phone,
                            birtdate: request.birtdate,
                            role: "ADMIN",
                            createAt: new Date()
                        });
                        newUser.save(function (err, response) {
                            if (err) {
                                reject(err);
                            } else {
                                resolve({
                                    statusCode: message.STATUS_CODE.CREATED,
                                    message: message.SUCCESS_MESSAGE.USER.CREATED
                                });
                            }
                        });
                    } else {
                        reject({
                            statusCode: message.STATUS_CODE.NOT_FOUND,
                            message: message.ERROR_MESSAGE.USER.EMAIL_EXIST
                        });
                    }
                } else {
                    reject({
                        statusCode: message.STATUS_CODE.ERROR,
                        message: message.ERROR_MESSAGE.USER.EMAIL_ERROR
                    });
                }

            }
        });
    });
}


function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
