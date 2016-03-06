var path = require('path');
var normalize = require('./lib/normalize');

module.exports.load = function globalsLoad() {
  global.__root = path.join(__dirname, '..');
  global.__buildroot = path.join(__dirname, '..', 'build');
  global.__approot = path.join(__dirname);

  global.helper = function helper(name) {
    var name = normalize.filename(name);
    return require(path.join(__approot, 'helpers', name));
  };

  global.model = function model(name) {
    var name = normalize.filename(name);
    return require(path.join(__approot, 'models', name));
  };
};