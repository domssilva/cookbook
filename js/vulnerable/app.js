const express = require("express");
const app = express();

const PORT = 3001;

//app.get('/', () => {});
app.get('/', (req, res) => {
  res.send('hello');
});

app.listen(PORT, () => console.log(`LISTENING ON PORT ${PORT}`));
