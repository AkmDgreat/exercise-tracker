const Exercise = require("../models/exerciseModel")
const User = require("../models/userModel")

//it makes more sense to just return what we are uploading in db (ie. I should do res.status(200).json({ exercise })
//and exercise should have the object which is currently inside res.json() (except the _id part)

const createExercise = async (req, res) => {
    const date = new Date().toDateString()

    const user = await User.findOne({ _id: req.params._id })

    const exercise = await Exercise.create({
        username: user.username,
        userId: user._id,
        description: req.body.description,
        duration: req.body.duration,
        date: req.body.date || date,
    })

    //res.status(200).json({ exercise })
    res.status(200).json({ 
        username: user.username,
        description: req.body.description,
        duration: req.body.duration,
        date: req.body.date || date,
        _id: req.params._id,
    })
}

module.exports = createExercise