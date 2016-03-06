var path = require('path');
var glob = require('glob');
var controllers = {};

module.exports._handlers = controllers;
module.exports.load = function controllersLoad() {
  var controllersGlob = path.join(__dirname, '..', 'controllers', '*.js');

  // Note: Array.forEach in node is blocking even though it specifies
  // a callback. This is intentional as require() blocks.
  glob.sync(controllersGlob).forEach(function (file) {
    var name = path.basename(file, '.js').replace('-', '_');
    controllers[name] = require(file);
  });

  return controllers;
}