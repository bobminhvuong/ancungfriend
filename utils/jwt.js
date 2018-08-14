var jwt = require('jsonwebtoken');
var fs = require('fs');
var config = require('./../config');
var cert = fs.readFileSync(__dirname + '/key/key.pem');
var pub = fs.readFileSync(__dirname + '/key/key.pub');

exports.sign = function (obj, callback) {
    jwt.sign(obj, cert, {
        algorithm: 'RS256',
        expiresIn:config.timeToken // token time 
    }, function (err, token) {
        callback(err, token);
    });
}

exports.verify = function (token, callback) {
    jwt.verify(token, pub, function (err, decoded) {
        callback(err, decoded);
    });
};
