'use strict';

var toInt      = require('to-integer');
var randomChar = require('random-char');

var pool = '0123456789bcdefghjkmnpqrstuvwxyz';

module.exports = function (length) {

  length = length && toInt(length) || 7;

  var result = '';

  while (length--) {
    result += randomChar(pool);
  }

  return result;
};

