var config = require('./../config').mongodb;
var mongoose = require('mongoose');
const mongooseFindAndFilter = require('mongoose-find-and-filter');


mongoose.plugin(mongooseFindAndFilter);
mongoose.Promise = global.Promise;

var connect_mongo = mongoose.connect('mongodb://' + config.host + '/' + config.database, function (err, db) {
    useMongoClient: true
});
module.exports = connect_mongo;