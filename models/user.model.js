var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  salt: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  role:{
    type: String,
    required: true
  },
  birtdate:{
    type:Date
  },
  sex: {
    type: String,
    required:true
  },
  address: {
    type: String
  },
  image:{
    type:String
  },
  friend: [{
    id_friend:String,
    follow:Boolean,
  }],
  createAt: {
    type: Date,
    require: true
  }
});
var User = mongoose.model('user', userSchema);
module.exports = User;