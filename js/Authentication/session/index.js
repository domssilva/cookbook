const express = require('express');
const {createReadStream} = require('fs');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();

// server config
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: false}))

// "database" data
const USERS = {
  alice: 'password',
  bob: 'hunter2',
};

const BALANCES = {
  alice: 350.50,
  bob: -1400,
};

// routes
app.get('/', (req, res) => {
  // const username = req.cookie.username
  // if (username) {
  //   const balance = BALANCES[username];
  //   res.send(`Hi ${username}.`);
  //   res.send(`Your balance is $${balance}`);
  // } else {
  //   createReadStream('index.html').pipe(res);
  // }
  createReadStream('index.html').pipe(res);
});

app.post('/login', (req, res) => {
  const username = req.body.username;
  const password = USERS[username]
  if (password === req.body.password) {
    res.cookie('username', username);
    res.redirect('/');
  } else {
    res.send('authentication failed.');
  }
});

app.get('/logout', (req, res) => {
  // deleting the cookie
  res.clearCookie('username');
  res.redirect('/');
});

app.listen(4000);
