const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const { v4: uuidv4 } = require('uuid')

const PORT = process.env.PORT || 3001;

const notesData = require('./db/db.json')

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, 'public/index.html'))
);

app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, 'public/notes.html'))
);

app.get('/api/notes', (req, res) => {
    res.json(notesData)
});

app.post('/api/notes', (req, res) => {
    let newNote = {
        title: req.body.title,
        text: req.body.text,
        id: uuidv4()
    }
    notesData.push(newNote)
    fs.writeFile('./db/db.json', JSON.stringify(notesData), err => {
        if (err) throw err;
        console.log('Saved Note!');
    })
    res.sendFile(path.join(__dirname, 'public/notes.html'))
});

app.delete('/api/notes/:id', (req, res) => {
    let newNotes = notesData.filter(note => note.id !== req.params.id)
    fs.writeFile('./db/db.json', JSON.stringify(newNotes), err => {
        if (err) throw err;
        console.log('Deleted note!');
    })
    res.sendFile(path.join(__dirname, 'public/index.html'))
});

app.listen(PORT, () => {
    console.log('listening');
});