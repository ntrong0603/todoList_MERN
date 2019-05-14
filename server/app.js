// module
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const todoRoutes = require('./routes');

// connet database
mongoose.connect('mongodb://localhost/todo', {useNewUrlParser: true })

// create saver
const app = express();

// config middleware
app.use(cors());
app.use(bodyParser.json());


// router
app.use('/apis/todos', todoRoutes);

// runserver
app.listen(5000, () => console.log('Server in running port: 5000'));