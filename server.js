const express = require('express');
const path = require('path');
const fs = require('fs');

const PORT = process.env.PORT || 3001;

const app = express();

const notesData = require('./db/db.json')

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/db/index.html'))
);
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/db/notes.html'))
);

app.get('/api/notes', (req, res) => {
   
    notesData.push(req.body);

    fs.writeFile('./db/db.json', JSON.stringify(notesData), (err) => {
        err ? res.json(err) : res.send('saved');
    })
    });


  app.post('/api/notes', (req, res) => {
    res.json(notesData)
    });

app.listen(PORT);