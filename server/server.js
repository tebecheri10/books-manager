const express = require("express")
const dotenv = require("dotenv").config()

const booksRoutes = require("./routes/bookRoutes")

//express init
const app = express()

//allow json 
app.use(express.json())

//router
app.use("/api", booksRoutes )

//server
const PORT =process.env.PORT_SERVER || 5000
app.listen(PORT, ()=>{ console.log(`server running on port:${PORT}`)})