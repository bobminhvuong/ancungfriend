var express = require('express');
var bodyParser = require('body-parser');
var multiparty = require('multiparty');
var path = require("path");
var cors = require('cors');
var app = express();
var connect_mongo = require('./db/index');
var config = require('./config');
var fileUpload = require('express-fileupload');


app.use(cors());//cấp quyền cho phép sử dụng api 
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(fileUpload());
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/apidocs', express.static(path.join(__dirname, 'apidocs')));

  
//Api
app.use(config.BASE_URL+'/user', require('./routes/user.route')());
app.use(config.BASE_URL+'/auth', require('./routes/auth.route')());
app.use(config.BASE_URL+'/party', require('./routes/party.route')());
app.use(config.BASE_URL+'/restaurant', require('./routes/restaurant.route')());
app.use(config.BASE_URL+'/typefood', require('./routes/typefood.route')());
app.use('/',function(req,res){
    res.status(301).redirect("https://ancungfriend.herokuapp.com/apidocs/index.html")
})
app.listen(process.env.PORT || config.PORT,console.log('server is listening port '+config.PORT));

