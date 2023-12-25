const express =  require("express")

const app = express()
require('dotenv').config()
const port = process.env.PORT



app.get('/', (req, res) => {
    res.send("Ronard off to good start")
})

app.listen(port, () => {console.log(`listening on port ${port}`)})