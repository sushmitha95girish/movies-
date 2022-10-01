// //const winston = require('winston');
// const mongoose = require('mongoose');
// //const dotenv = require("dotenv")
// //dotenv.config()
// module.exports = function () {
//   //mongoose.connect('mongodb://localhost/vidly') //FOR LOCAL
//   mongoose.connect("mongodb+srv://sushmitha:sushmitha@cluster0.gjnt2sv.mongodb.net/test")
//     .then(() => console.log('Connected to MongoDB...'));
//}

const express = require('express')
const path = require('path')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
//const Todo = require('./models/todo')



mongoose.connect("mongodb+srv://sushmitha:sushmitha@cluster0.gjnt2sv.mongodb.net/sample_mflix")
  .then(() => {
    console.log('database connected')
  });

//app.use('/', express.static(path.resolve(_dirnam, 'assets')))
