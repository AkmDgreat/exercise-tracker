const mongoose = require("mongoose")

const logSchema = new mongoose.Schema({
    username: String,
    count: Number,
    log: [{
        description: String,
        duration: Number,
        date: String
    }]
})

const logModel = mongoose.model("Log", logSchema)

module.exports = logModel