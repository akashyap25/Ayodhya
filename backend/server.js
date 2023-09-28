const express = require('express');
const connectDB = require("./db/connect");
const dotenv = require("dotenv");



const app = express();
connectDB();
dotenv.config();

 app.listen(3000, () => {
    console.log("Server is running on port 3000.");
});