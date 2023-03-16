const User = require('../models/User');
const localStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

module.exports = async function (passport) {
  passport.use(
    new localStrategy(
      { usernameField: 'email' },
      async (email, password, done) => {
        const user = await User.findOne({ email: email });
        console.log(`Got user: ${user}`);

        if (!user) {
          return done(null, false, { msg: 'Invalid Credentials' });
        }

        bcrypt.compare(password, user.password, (err, isMatch) => {
          if (err) throw err;
          if (isMatch) {
            return done(null, user, { msg: 'Found User - PW Match' });
          } else {
            return done(null, false, { msg: 'Invalid Credentials' });
          }
        });
      }
    )
  );
  passport.serializeUser((user, cb) => {
    cb(null, { id: user.id, email: user.email, admin: user.isAdmin });
  });
  passport.deserializeUser(async (id, cb) => {
    return cb(null, await User.findById(id).select('-password'));
  });
};
