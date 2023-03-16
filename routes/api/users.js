const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../../models/User');
const passport = require('passport');
const session = require('express-session');
const initializePassport = require('../../config/passport-config');

initializePassport(
  passport,
  async (email) => {
    let user = User.findOne({ email: email });
    return user;
  },
  async (id) => {
    let user = User.findById(id);
    return user;
  }
);

// @route:   GET api/users
// @desc:    Test route
// @access:  Public
// router.get('/', (req, res) => res.send('User Route'));

// @route:   POST api/users/register
// @desc:    Register user route
// @access:  Public
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ errors: [{ msg: 'User already exists' }] });
    }

    let hashedPassword = await bcrypt.hash(password, 10);

    user = new User({
      name,
      email,
      password: hashedPassword,
    });

    await user.save();
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }

  res.json('user created');
});

// @route:   PUT api/users/login
// @desc:    Login user
// @access:  Public
router.put('/login', async (req, res, next) => {
  passport.authenticate('local', (err, user, message) => {
    if (err) throw err;
    if (!user) {
      res.json({ msg: 'Login Failed', user: false });
    } else {
      delete user.password;
      req.logIn(user, (err) => {
        if (err) throw err;
        res.json({
          message: 'Successfully Authenticated',
        });
      });
    }
  })(req, req, next);
});

// @route:   POST api/users/logout
// @desc:    Logout Route
// @access:  Private
router.post('/logout', (req, res, next) => {
  try {
    req.logout(function (err) {
      if (err) return next(err);
    });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
  res.json('logout successful');
});

// @route:   GET api/users/session-info
// @desc:    Get session info
// @access:  Private
router.get('/session-info', (req, res) => {
  res.json({ session: req.session });
});

module.exports = router;
