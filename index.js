'use strict';

var toInt      = require('to-integer');
var randomChar = require('random-char');

var pool = '0123456789bcdefghjkmnpqrstuvwxyz';

module.exports = function (options) {

  var length = options && options.length || 7;

  length = toInt(length);

  if (isNaN(length) || !isFinite(length)) {
    length = 7;
  }

  var result = '';

  while (length--) {
    result += randomChar({ pool: pool });
  }

  return result;
};

