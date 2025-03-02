const express = require('express')
const indexRouter = require('./routes/indexRouter')

const app = express()

app.set("view engine", "ejs")
app.use(express.urlencoded({extended: true}))
app.use("/", indexRouter)

app.listen(8080, () => {
    console.log("Listening on PORT: " + 8080)
})