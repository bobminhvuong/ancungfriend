var fs = require('fs');
var path = require('path');
var rootPath = __dirname;
var variables = JSON.parse(fs.readFileSync(path.join(rootPath, 'config.json'), 'utf8'));
module.exports = variables;