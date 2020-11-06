const express = require('express');
const morgan = require ('morgan');
const {createProxyMiddleware} = require('http-proxy-middleware');

const app = express();
const PORT = 3000;
const HOST = 'localhost';
const API = 'http://jsonplaceholder.typicode.com';

// LOGGING
app.use(morgan('dev'));

app.get('/info', (req, res) => {
  res.send('This is a proxy service which proxies to Billing and Account APIs.');
});

app.use('', (req, res, next) => {
  if (req.headers.authorization) {
    next();
  } else {
    res.sendStatus(403);
  }
});

// endpoints
app.use('/json_placeholder', createProxyMiddleware({
  target: API,
  changeOrigin: true,
  pathRewrite: {
    ['^/json_placeholder']: '',
  },
}));

app.listen(PORT, HOST, () => {
  console.log(`Listening on #${PORT}`);
}); 
