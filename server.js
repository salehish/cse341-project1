require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const contactsRouter = require('./routes/contacts');
app.use('/contacts', contactsRouter);

app.get('/', (req, res) => {
  res.send('Contacts API is running!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});