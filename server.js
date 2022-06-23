const express = require('express');
const path = require('path');

const app = express();
const PORT = 3001;

const notes = require('./db/db.json')

app.use(express.static('public'));

app.get('/', (req, res) => res.send('public/db/index.html'));

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/db/notes.html'))
);


app.get('/api/notes/db.json', (req, res) => {
    res.json(notes)
    });


  app.post('/api/notes/db.json', (req, res) => {
    res.json(notes)
    });

app.listen(PORT, () =>
  console.log()
);
