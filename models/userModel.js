const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Must provide a user name"]
    }
})

const userModel = mongoose.model("User", userSchema)

module.exports = userModel