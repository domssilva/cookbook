const http = require('http');
const express = require('express');
const morgan = require('morgan');

const app = express();
const server = http.createServer(app);

// server config
app.use(morgan('dev'));

// routes
const data = {
  users: [
    {username: 'nick012', age: 22, id: '1'},
    {username: 'doeh12n', age: 28, id: '2'},
    {username: 'jh33n', age: 32, id: '3'},
  ],
  endpoints: [
    '/profile',
    '/dashboard',
    '/api/v2',
  ],
};

app.get('/', (req, res) => {
  res.statusCode = 200;
  res.send('home.');
});

// api route requires authentication
app.get('/api', (req, res) => {
  const requestHeaders = req.headers;
  console.log(requestHeaders);

  if (requestHeaders.authorization) {
    if (requestHeaders.authorization === 'bearer admin') {
      res.statusCode = 200;
      res.send(data);
      res.end();
    }
  } else {
    res.statusCode = 401;
    res.end('authentication failed');
  }
});

server.listen(3000, 'localhost', () => {
  console.log('server listening at #3000');
});
