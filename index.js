const express = require('express');
const app = express();
const port = 3000;

// Use express.json() to parse JSON request bodies
app.use(express.json());

// In-memory database
let database = {};

// POST endpoint to add a new value
app.post('/values', (req, res) => {
  const { value } = req.body;
  const id = String(`${Object.keys(database).length + 1}`);
  database[id] = value;
  res.status(201).json({ id });
});

// GET endpoint to retrieve all values
app.get('/values', (req, res) => {
  res.json(database);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});