const http = require('http');
const express = require('express');
const morgan = require('morgan');

const app = express();

// server config
app.use(morgan('dev'));

const server = http.createServer(app);

// routes
app.get('/', (req, res) => {
  res.send('home.');
});

server.listen(3000, 'localhost', () => {
  console.log('server listening at #3000');
});
