const express = require("express")
const app = express()
const cors = require("cors")
const mongoose = require("mongoose")
require("dotenv").config()

const router = require("./router/route")
const MONGO_URI = process.env.MONGO_URI
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.static("public"))
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html")
})

app.use(express.json())
app.use("/api/users", router)

const startServer = async (url) => {
    try {
        await mongoose.connect(url)
        app.listen(port, () => console.log(`listening to port ${port}...`))
    } catch (error) {
        console.log(error)
    }
}

startServer(MONGO_URI)
