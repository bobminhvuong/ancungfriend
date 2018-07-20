var mongoose = require('mongoose');
var restaurantSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    typeFood: {
        type: String,
        require: true
    },
    minPrice: {
        type: Number
    },
    maxPrice: {
        type: Number
    },
    timeStart: {
        type: String,
        require: true
    },
    timeAnd: {
        type: String,
        require: true
    },
    address:{
        type:String,
        require:true
    },
    lat:{
        type:Number
    },
    long:{
        type:Number
    },
    detail:{
        type:String
    },
    image:[{
        image:String
    }],
    averageRate:{
        type:Number
    },
    listRate:[{
        idUser:String,
        rate:Number
    }],
    createAt:{
        type:Date,
        require:true
    }

})

var Restaurant = mongoose.model('restaurant', restaurantSchema);
module.exports = Restaurant;