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
  const username = req.cookies.username
  if (username) {
    const balance = BALANCES[username];
    const html = `
      <html>
        <body>
          <h3>${username}'s account:</h3>
          <p>
            Balance =
            $<span style="color:${balance > 0? 'green': 'red'}">${balance}</span>
          </p>
        </body>
      </html>
    `;
    res.send(html);
  } else {
    createReadStream('index.html').pipe(res);
  }
});

app.post('/login', (req, res) => {
  const reqUsername = req.body.username;
  const reqPassword = req.body.password;
  const userPassword = USERS[reqUsername];
  if (reqPassword === userPassword) {
    res.cookie('username', reqUsername);
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
