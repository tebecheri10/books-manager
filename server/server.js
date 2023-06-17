const express = require("express")
const dotenv = require("dotenv").config()
const cors = require("cors")
const booksRoutes = require("./routes/bookRoutes")

//express init
const app = express()

//allow json 
app.use(express.json())

//Cors
app.use(cors())

//router
app.use("/api", booksRoutes )

//server
const PORT =process.env.PORT_SERVER || 5000
app.listen(PORT, ()=>{ console.log(`server running on port:${PORT}`)})