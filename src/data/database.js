// src/data/database.js
const mongoose = require("mongoose");

require("dotenv").config();
let server = process.env.MONGODB_SERVER;
let username = process.env.MONGODB_USERNAME;
let pass = process.env.MONGODB_PASS;
const URI = `mongodb+srv://${username}:${pass}@${server}.mongodb.net/test?retryWrites=true&w=majority`


const options = {
    autoIndex: false,
    reconnectTries: 30,
    reconnectInterval: 500,
    poolSize: 10    
}

mongoose.connect(URI, options)
        .then(db => console.log("Db is connected"))
        .catch(error => console.error("error" , error))