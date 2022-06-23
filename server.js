const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

const PORT = process.env.PORT || 3001;

const notesData = require('public/db/db.json')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

// Fallback route for when a user attempts to visit routes that don't exist
app.get('*', (req, res) =>
  res.send('public/db/index.html')
);

app.get('/notes', (req, res) =>
res.sendFile(path.join(__dirname, 'public/db/notes.html'))
);


app.get('/api/notes', (req, res) => {
    res.json(notesData)
    });


  app.post('/api/notes', (req, res) => {
    res.json(notesData)
    });

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
