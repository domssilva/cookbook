const express = require("express");
const app = express();

const PORT = 3001;

//app.get('/', (req, res) => {});
app.get('/', (req, res) => {
  res.send('hello');
});

app.get('/xss', (req, res) => {
  let name = req.query.name; 
  res.send(`hello ${name}`);
});

app.listen(PORT, () => console.log(`LISTENING ON PORT ${PORT}`));
