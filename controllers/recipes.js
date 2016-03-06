var express = require('express');
var router = express.Router();

module.exports = function recipe(mode) {
  var routs = {
    index: function (req, res, next) {

    },
    show: function (req, res, next) {

    },
    create: function (req, res,next) {

    },
    edit: function (req, res,next) {

    },
    save: function (req, res,next) {

    }
  }

  return routes[mode] || function (req, res, next) {
    return next();
  };
};