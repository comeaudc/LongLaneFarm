const express = require('express');
const path = require('path');
const logger = require('morgan');
const cors = require('cors');
const passport = require('passport');
const session = require('express-session');

require('dotenv').config();
require('./config/database');

const app = express();

app.use(
  cors({
    origin: '*',
  })
);
app.use(logger('dev'));
app.use(express.json());
//serve the build folder
app.use(express.static(path.join(__dirname, 'build')));
app.use(
  session({
    secure: true,
    secret: process.env.SESSION_SECRET,
    resave: true, // Should we resave session variables if nothing has changed
    saveUninitialized: true, // Do you want to save empty value in session if there is no value?
    cookie: { originalMaxAge: 3600000 },
  })
);
app.use(passport.initialize());
// app.use(passport.session()); why cant I use/why do I need?

//Define Routes
app.use('/api/users', require('./routes/api/users'));

// catch all route
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(5000, () => {
  console.log(`Server is Listening on 5000`);
});
