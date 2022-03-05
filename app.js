const express = require("express")
const app = express()
require("dotenv").config()
const mongoose = require ("mongoose")
const cors = require("cors")

const uri = process.env.MONGO_URI

mongoose.connect(uri, (err) => {
    if(err) console.log(err);
    console.log("connected to db")
})

const corsOptions = {origin: '*',
credentials: true,
optionSuccessStatus: 200,
};


app.use(cors(corsOptions))

app.use(express.json())

app.use(cors())

module.exports = app