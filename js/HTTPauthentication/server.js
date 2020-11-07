const http = require('http');
const express = require('express');
const morgan = require('morgan');

const app = express();
const server = http.createServer(app);

// server config
app.use(morgan('dev'));

// routes
app.get('/', (req, res) => {
  res.statusCode = 200;
  res.send('home.');
});

// api route requires authentication
app.get('/api', (req, res) => {
  res.statusCode = 401;
  res.end('authentication failed');
});

server.listen(3000, 'localhost', () => {
  console.log('server listening at #3000');
});
