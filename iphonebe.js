const express =  require("express")
const mongoose = require("mongoose")
const app = express()
require('dotenv').config()

const {PORT, DATABASEURL} = process.env

mongoose.connect(DATABASEURL)
mongoose.connection
    .on("open" ,() => console.log('Connected to db'))
    .on("Close" ,() => console.log('Disonnected from db'))
    .on("Error" ,(Error) => console.log('Error connecting to db'))

app.get('/', (req, res) => {
    res.send("Ronard off to good start")
})





app.listen(PORT, () => {console.log(`listening on port ${PORT}`)})