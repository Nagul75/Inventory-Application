const express = require('express')
const app = express()

app.set("view engine", "ejs")
app.use(express.urlencoded({extended: true}))


app.listen(8080, () => {
    console.log("Listening on PORT: " + 8080)
})