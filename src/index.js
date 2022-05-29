const express = require("express");
const bodyParser = require("body-parser");
const route = require("./route/route")
const app = express();

//global Middlewares

const mongoose = require("mongoose")
const multer = require("multer")
const { AppConfig } = require('aws-sdk');

app.use(multer().any())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

//MongoDB Connection

mongoose.connect("mongodb+srv://Yogesh_Mjs:U9bUHeuLxXaOhj4j@cluster0.8e1bd.mongodb.net/ShoppingCart?retryWrites=true&w=majority",
    { useNewUrlParser: true })
    .then(() => console.log("MongoDb is connected"))
    .catch(err => console.log(err))

app.use('/', route);

//local server connection string

app.listen(process.env.PORT || 3000, function () {
    console.log("Express App Running On Port" + (process.env.PORT || 3000))
})
