const mongoose = require("mongoose")

const exerciseSchema = new mongoose.Schema({
    username: String,
    userId: String,
    description:{
        type: String,
        required: [true, "Must provide a description"]
    },
    duration: {
        type: Number,
        required: [true, "Must provide a description"]
    },
    date: {
        type: String,
        default: new Date().toDateString()
    }
})

const exerciseModel = mongoose.model("Exercise", exerciseSchema)

module.exports = exerciseModel