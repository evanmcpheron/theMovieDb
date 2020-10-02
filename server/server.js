const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config({ path: './Config/.env' });
const connectDb = require('./Config/db');

const app = express();

const PORT = process.env.PORT || 5500;

app.get('/', (req, res) => {
  res.send('WELCOME TO NODE.JS');
});

connectDb();

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
