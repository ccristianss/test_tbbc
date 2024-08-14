const session = require('express-session');
const crypto = require('crypto');

const state = crypto.randomBytes(32).toString('hex');

module.exports = session({
  secret: state,
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true, 
    secure: false,        // Debería ser true en producción con HTTPS
    maxAge: 1000 * 60 * 60 * 24, 
    sameSite: 'lax',
  }
});