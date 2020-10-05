import * as http from 'http';

const PORT = 4003;
const server = http.createServer((req, res) => {
  console.log('Request received.');
});

server.listen(PORT, () => {
  console.log('Serfver listening on port: ', PORT);
});
