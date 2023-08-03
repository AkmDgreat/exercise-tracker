const User = require("../models/userModel")
const Exercise = require("../models/exerciseModel")

const getLogs = async (req, res) => {
    const exercises = await Exercise.find({ userId: req.params._id })

    const getRequiredAttributes = () => {
        const array = []
        exercises.map((object) => {
            const { description, duration, date } = object
            const requiredObject = { description, duration, date }
            array.push(requiredObject)
        })
        return array
    }

    const user = await User.findOne({ _id: req.params._id })

    if (!user) {
        return res.status(404).json({
            error: `No user found with id ${req.params._id}`
        })
    }

    res.status(200).json({
        username: user.username,
        count: getRequiredAttributes().length,
        _id: user._id,
        log: getRequiredAttributes()
    })
}

module.exports = getLogs