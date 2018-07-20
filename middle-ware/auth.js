var jwt = require('./../utils/jwt');
var auth = require('../service/auth.service');
var config = require('./../config')
var message = require('./../utils/message');
exports.auth = function () {
    return function (req, res, next) {
        var token = req.headers[config.TOKEN];
        if (token) {
            jwt.verify(token, function (err, decodedData) {
                if (err) {
                    res.json({
                        statuscode: message.STATUS_CODE.ERROR,
                        message: message.ERROR_MESSAGE.AUTH.INVALID_TOKEN
                    });
                } else {
                    var email = decodedData.email;
                    auth.getUserByEmail(email).then(function(response){
                        req.user = response;
                        next();
                    }).catch(function(err){
                        res.json(err);
                    });
                }
            });
        } else {
            res.json({
                statuscode: message.STATUS_CODE.ERROR,
                message: message.ERROR_MESSAGE.AUTH.NOT_AUTHORIZED
            });
        }
    }
}