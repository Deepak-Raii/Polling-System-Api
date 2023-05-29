const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

//Set up default mongoose connection
module.exports = mongoose.connect("mongodb://127.0.0.1/Polling", { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log("Database Connected..."));
