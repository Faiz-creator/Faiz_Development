const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Mock database
let tasks = [];

// Routes
app.get('/tasks', (req, res) => {
    res.json(tasks);
});

app.post('/tasks', (req, res) => {
    const task = req.body;
    tasks.push(task);
    res.status(201).send('Task added successfully');
});

app.delete('/tasks/:id', (req, res) => {
    const id = req.params.id;
    tasks = tasks.filter(task => task.id !== id);
    res.send('Task deleted successfully');
});

// Server start
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
