var config = require('./../config').mongodb;
var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

var connect_mongo = mongoose.connect('mongodb://admin:minhvuong15014811@ds141661.mlab.com:41661/ancung', function (err, db) {
    useMongoClient: true
});
module.exports = connect_mongo;