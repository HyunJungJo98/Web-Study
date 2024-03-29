const express = require('express');
const path = require('path');

const app = express();
const port = 5002;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/:page', (req, res) => {
  const { page } = req.params;
  console.log(page);
  res.sendFile(path.join(__dirname, `/data/${page}.json`));
});

app.listen(port, () => {
  console.log(`server listening on http://localhost:${port}`);
});
