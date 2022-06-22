const express = require('express');
const path = require('path');

const app = express();
const PORT = 3001;

app.use(express.static('public'));

app.get('/', (req, res) => res.send('public/db/index.html'));

app.get('/send', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/db/notes.html'))
);

// app.get('/routes', (req, res) =>
//   res.sendFile(path.join(__dirname, 'public/routes.html'))
// );

app.get('/api/notes/db.json', (req, res) => {
    res.json({
    });
  });

  app.post('/api/notes/db.json', (req, res) => {
    res.json({
    });
  });
// app.listen(PORT, () =>
//   console.log(`Example app listening at http://localhost:${PORT}`)
// );
