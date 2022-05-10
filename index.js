const express = require('express');

const app = express();

app.listen(3000);
app.get('/main', (req, res) => {
  res.send('Hello');
});

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});
