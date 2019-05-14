//khai bao bien moi truong process.env
require('dotenv').config();

// module
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const todoRoutes = require('./routes');

// connet database
mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true })

// create saver
const app = express();

// config middleware
app.use(cors());
app.use(bodyParser.json());


// router
app.use('/apis/todos', todoRoutes);

// runserver
app.listen(process.env.PORT || 5000);