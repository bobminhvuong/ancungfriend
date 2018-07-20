var mongoose = require('mongoose');
var typeFoodSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    createAt:{
        type: Date,
        required: true
    }
 });

var TypeFood = mongoose.model('typeFood',typeFoodSchema);
module.exports = TypeFood;

