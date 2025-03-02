const express = require('express')
const indexRouter = require('./routes/indexRouter')
const newRouter = require('./routes/newRouter')

const app = express()

app.set("view engine", "ejs")
app.use(express.urlencoded({extended: true}))

app.use("/", indexRouter)
app.use("/new", newRouter)

app.listen(8080, () => {
    console.log("Listening on PORT: " + 8080)
})