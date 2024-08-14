const session = require('express-session');
const crypto = require('crypto');

const state = crypto.randomBytes(32).toString('hex');

module.exports = session({
  secret: state,
  resave: false,
  saveUninitialized: false,
});