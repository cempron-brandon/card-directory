const express = require('express')
const cardsRoutes = require("./src/routes/cards")
const dotenv = require("dotenv");
dotenv.config();

const app = express()

app.use(express.json())
app.use('/cards', cardsRoutes)

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})