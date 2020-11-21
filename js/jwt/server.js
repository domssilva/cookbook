const express = require('express');
const path = require('path');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const token = jwt.sign({foo: 'bar'}, 'shhh');

// config
app.use(morgan('tiny'));

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

app.get('/login', (req, res) => {
  res.sendFile(`${__dirname}/login.html`);
});

app.post('/login', (req, res) => {
  const user = req.body.user;
  const password = req.body.password;

  res.send(`hello ${user}`);
});

app.get('/test', (req, res) => {
  res.send('testing...');
});

app.listen(3001, () => console.log('listening on #3001'));

