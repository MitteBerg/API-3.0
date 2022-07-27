require('dotenv').config();
const express = require('express');


// import content of a.env

const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;

//connect to the mongodb
mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log(`Server Started at http://localhost:${3000}`)
})
//import routes 
const routes = require('./routes/routes');
app.use('/api', routes)