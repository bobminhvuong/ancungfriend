var message = require('./../utils/message');
var path = require('path');
module.exports = {
    uploadImage: uploadImage
}

function uploadImage(file, pathUrl) {
    //'../public/avatar/avatar_'
    file.mv(path.join(__dirname, pathUrl +'.png'));
   
}
