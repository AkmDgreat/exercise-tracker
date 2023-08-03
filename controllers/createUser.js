const User = require("../models/userModel")

const createUser = async (req, res) => {
    const user = await User.create(req.body)
    res.status(200).json({
        user
    })
}

module.exports = createUser