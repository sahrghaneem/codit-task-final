const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const mongoose=require('mongoose')
// const userController=require('./Controller/controller');
const jwt = require('jsonwebtoken')

require('dotenv').config()
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());
app.use('/api/tasks',require('./Route/route'));

 

mongoose.connect(`${process.env.DB_URL}`, {useNewUrlParser: true, useUnifiedTopology: true }, () => {
  console.log('Connected to DB');
});

    
app.listen(process.env.PORT||5000);