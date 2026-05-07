'use strict';
const { timingSafeEqual } = require('crypto');

module.exports = function(a, b) {
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
};
