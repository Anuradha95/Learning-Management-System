const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/lmsDb", { useNewUrlParser: true });

const connection = mongoose.connection;

connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
});

const studentsRouter = require('./routes/students');

app.use('/students', studentsRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

