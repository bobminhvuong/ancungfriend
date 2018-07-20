var mongoose = require('mongoose');
var partySchema = new mongoose.Schema({
    titel:{
        type:String,
        require:true
    },
    field:{
        type:String
    },
    numberMax:{
        type:Number,
        require:true
    },
    currentNumber:{
        type:Number
    } ,
    status:{
        type:Boolean,
        require:true
    },
    timeStart:{
        type:String,    
        require:true
    },
    timeEnd:{
        type:String,
        require:true
    },
    dateStart:{
        type: Date,
        required: true
    },
    idRestaurant:{
        type:String,
        require:true
    },
    listUser:[{
        id:String,
        leader: Boolean
    }],
    createAt:{
        type:Date,
        require:true
    },
})
var Party = mongoose.model('party',partySchema);
module.exports = Party;